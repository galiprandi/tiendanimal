import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteTodo, TodoDTO } from '../apis/api'

export const useDeleteTodos = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ['Delete', 'Todo'],
    mutationFn: (id: number) => deleteTodo(id),
    onMutate(id: number) {
      const queryKey = ['Todos']
      const snapshot = queryClient.getQueryData<TodoDTO[]>(queryKey)
      const data = snapshot?.filter(todo => todo.id !== id)
      queryClient.setQueryData(queryKey, data)
      return { snapshot, data }
    },
    onError() {
      queryClient.invalidateQueries({ queryKey: ['Todos'] })
    },
  })
}
