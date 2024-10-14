import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addEditTodo, TodoDTO } from '../apis/api'
import { useNavigate } from 'react-router-dom'

export const useAddEditTodo = () => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const { mutate, ...rest } = useMutation({
    mutationKey: ['Add/Edit Todo'],
    mutationFn: addEditTodo,
    onMutate: todo => {
      const queryKey = ['Todos']
      const snapshot = queryClient.getQueryData<TodoDTO[]>(queryKey)
      queryClient.setQueryData<TodoDTO[]>(['Todos'], old =>
        old
          ? old.map(item =>
              item.id === Number(todo.id) ? { ...item, ...todo } : item
            )
          : [todo]
      )
      queryClient.setQueryData<TodoDTO>(['Todos', Number(todo.id)], todo)

      navigate('../')
      return { snapshot }
    },
  })
  return {
    mutate,
    ...rest,
  }
}
