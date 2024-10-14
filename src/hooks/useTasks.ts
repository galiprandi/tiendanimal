import { useQuery } from '@tanstack/react-query'
import { getTasks } from '../apis/api'
import toast from 'react-hot-toast'
import { useTranslation } from 'react-i18next'

const ITEMS_PER_PAGE = import.meta.env.VITE_ITEMS_PER_PAGE || 3

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

  const totalPages = tasks ? Math.ceil(tasks.length / ITEMS_PER_PAGE) - 1 : 0

  const getPage = (page = 1) =>
    tasks?.slice(page * ITEMS_PER_PAGE, (page + 1) * ITEMS_PER_PAGE)

  return {
    tasks,
    getPage,
    lastPage: totalPages,
    ...rest,
  }
}
