import { useMutation } from '@tanstack/react-query'
import { postUser, UserDTO } from '../apis/api'
import toast from 'react-hot-toast'
import { useTranslation } from 'react-i18next'

export const useCreateUser = () => {
  const { t } = useTranslation('translations')
  return useMutation({
    mutationKey: ['User', 'Create'],
    mutationFn: async (data: UserDTO) => {
      if (data.phone.length < 6)
        throw new Error('Phone number must be at least 6 characters')

      return postUser(data)
    },
    onError: (_error, data) => {
      if (data.phone.length < 6)
        toast.error(t('Phone number must be at least 6 characters'))
      else toast.error(t('Ups! Something went wrong. Please try again later.'))
    },
    onSuccess: () => {
      toast.success(t('User created successfully'))
    },
  })
}
