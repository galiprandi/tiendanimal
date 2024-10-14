import { useMutation, useQueryClient } from '@tanstack/react-query'
import { editTask as mutationFn, TaskDTO } from '../apis/api'

export const useEditTask = () => {
  const queryClient = useQueryClient()
  const queryKey = ['Tasks']

  const { mutate, ...rest } = useMutation({
    mutationKey: ['Edit Task'],
    mutationFn,
    onMutate: ({ id, data }) => {
      const snapshot = queryClient.getQueryData<TaskDTO[]>(queryKey)
      queryClient.setQueryData<TaskDTO[]>(queryKey, old =>
        old
          ? old.map(item => (item.id === id ? { ...item, ...data } : item))
          : old
      )

      return snapshot
    },
    onError: (_err, _data, snapshot) => {
      if (snapshot) queryClient.setQueryData(queryKey, snapshot)
    },
  })
  return {
    mutate,
    ...rest,
  }
}
