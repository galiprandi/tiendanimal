import { useMutation, useQueryClient } from '@tanstack/react-query'
import { defaultNewTask, addTask as mutationFn, TaskDTO } from '../apis/api'
import toast from 'react-hot-toast'
import { useTranslation } from 'react-i18next'

export const useAddTask = (onAdd?: (data: TaskDTO) => void) => {
  const { t } = useTranslation('translations')
  const queryClient = useQueryClient()

  const { mutate: addNewTask, ...rest } = useMutation({
    mutationKey: ['Add', 'Task'],
    mutationFn,
    onMutate: () => {
      const queryKey = ['Tasks']
      const snapshot = queryClient.getQueryData<TaskDTO[]>(queryKey)
      const { title, id, description } = defaultNewTask
      const mewTask = { title, id, description }
      const data = snapshot ? [...snapshot, mewTask] : [mewTask]
      queryClient.setQueryData(queryKey, data)

      return { snapshot, queryKey }
    },
    onSuccess: (data, _vars, ctx) => {
      if (!ctx) return
      const { queryKey } = ctx
      const newItem = { ...defaultNewTask, id: data.id }
      const x = queryClient.setQueryData<TaskDTO[]>(queryKey, old =>
        old?.map(item => (item.id === defaultNewTask.id ? newItem : item))
      )
      const newTask = x?.find(({ id }) => id === data.id)
      if (newTask && onAdd) onAdd(newTask)
    },
    onError: (_err, _data, ctx) => {
      if (!ctx) return
      toast.error(t('Ups! Something went wrong. Please try again later.'))
      const { snapshot, queryKey } = ctx
      if (snapshot) queryClient.setQueryData(queryKey, snapshot)
      queryClient.invalidateQueries({ queryKey })
    },
  })

  return { addNewTask, ...rest }
}
