import { useQuery } from '@tanstack/react-query'
import { getTodo } from '../apis/api'

export const useTodo = (id?: number | 'new') => {
  const { data: todo, ...rest } = useQuery({
    queryKey: ['Todos', id],
    queryFn: () => getTodo(id as number),
    enabled: !!id && id !== 'new',
  })
  return {
    todo,
    ...rest,
  }
}
