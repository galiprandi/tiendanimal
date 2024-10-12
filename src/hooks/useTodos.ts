import { useQuery } from '@tanstack/react-query'
import { getTodos as queryFn } from '../apis/todos.apis'

export const useTodos = () => {
  const queryKey = ['Todos']

  const { data: todos, ...rest } = useQuery({ queryKey, queryFn })

  const firstThreeTodos = todos?.slice(0, 3)

  return {
    todos,
    firstThreeTodos,
    ...rest,
  }
}
