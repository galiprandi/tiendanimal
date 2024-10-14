import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteTask, TaskDTO } from '../apis/api'
import toast from 'react-hot-toast'
import { useTranslation } from 'react-i18next'

export const useDeleteTask = () => {
  const { t } = useTranslation('translations')
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ['Delete', 'Task'],
    mutationFn: (id: number) => deleteTask(id),
    onMutate(id: number) {
      const queryKey = ['Tasks']
      const snapshot = queryClient.getQueryData<TaskDTO[]>(queryKey)
      const data = snapshot?.filter(todo => todo.id !== id)
      queryClient.setQueryData(queryKey, data)
      return { snapshot, queryKey }
    },
    onError(_err, _data, ctx) {
      if (!ctx) return
      toast.error(t('Ups! Something went wrong. Please try again later.'))
      const { snapshot, queryKey } = ctx
      if (snapshot) queryClient.setQueryData(queryKey, snapshot)
    },
  })
}
