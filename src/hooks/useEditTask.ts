import { useMutation, useQueryClient } from '@tanstack/react-query'
import { editTask as mutationFn, TaskDTO } from '../apis/api'
import toast from 'react-hot-toast'
import { useTranslation } from 'react-i18next'

export const useEditTask = () => {
  const { t } = useTranslation('translations')
  const queryClient = useQueryClient()
  const queryKey = ['Tasks']

  const { mutate, ...rest } = useMutation({
    mutationKey: ['Edit Task'],
    mutationFn,
    onMutate: ({ id, data }) => {
      const snapshot = queryClient.getQueryData<TaskDTO[]>(queryKey)
      queryClient.setQueryData<TaskDTO[]>(queryKey, old =>
        old
          ? old.map(item => (item.id === id ? { ...item, ...data } : item))
          : old
      )

      return snapshot
    },
    onError: (_err, _data, snapshot) => {
      toast.error(t('Ups! Something went wrong. Please try again later.'))
      if (snapshot) queryClient.setQueryData(queryKey, snapshot)
    },
  })
  return {
    mutate,
    ...rest,
  }
}
