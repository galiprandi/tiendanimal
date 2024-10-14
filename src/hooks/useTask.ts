import { useQuery } from '@tanstack/react-query'
import { getTask } from '../apis/api'

export const useTask = (id: number) => {
  const { data: task, ...rest } = useQuery({
    queryKey: ['Todos', id],
    queryFn: () => getTask(id),
  })
  return {
    task,
    ...rest,
  }
}
