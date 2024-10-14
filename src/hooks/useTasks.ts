import { useQuery } from '@tanstack/react-query'
import { getTasks } from '../apis/api'
import toast from 'react-hot-toast'
import { useTranslation } from 'react-i18next'

const ITEMS_PER_PAGE = import.meta.env.VITE_ITEMS_PER_PAGE || 3

export const useTasks = (query?: string) => {
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

  const filtered = query
    ? tasks?.filter(task =>
        task.title.toLowerCase().includes(query.toLowerCase())
      )
    : tasks

  const totalPages = filtered ? Math.ceil(filtered.length / ITEMS_PER_PAGE) : 0

  const getPage = (page = 1) => {
    if (page > totalPages) page = 1
    return filtered?.slice(
      page * ITEMS_PER_PAGE - ITEMS_PER_PAGE,
      (page + 1) * ITEMS_PER_PAGE - ITEMS_PER_PAGE
    )
  }

  return {
    tasks,
    filtered,
    getPage,
    lastPage: totalPages,
    ...rest,
  }
}
