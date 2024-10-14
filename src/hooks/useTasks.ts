import { useQuery } from '@tanstack/react-query'
import { getTasks } from '../apis/api'
import toast from 'react-hot-toast'
import { useTranslation } from 'react-i18next'

export const useTasks = () => {
  const { t } = useTranslation('translations')
  const queryKey = ['Tasks']

  const { data: tasks, ...rest } = useQuery({
    queryKey,
    queryFn: () => {
      try {
        return getTasks()
      } catch (error) {
        console.error(error)
        toast.error(t('Ups! Something went wrong. Please try again later.'))
      }
    },
  })

  return {
    tasks,
    ...rest,
  }
}
