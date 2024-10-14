import { useQuery } from '@tanstack/react-query'
import { getTasks as queryFn } from '../apis/api'

export const useTasks = () => {
  const queryKey = ['Tasks']

  const { data: tasks, ...rest } = useQuery({ queryKey, queryFn })

  return {
    tasks,
    ...rest,
  }
}
