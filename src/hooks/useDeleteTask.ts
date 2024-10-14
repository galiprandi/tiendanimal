import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteTask, TaskDTO } from '../apis/api'

export const useDeleteTask = () => {
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
      const { snapshot, queryKey } = ctx
      if (snapshot) queryClient.setQueryData(queryKey, snapshot)
    },
  })
}
