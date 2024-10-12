import { useMutation } from '@tanstack/react-query'
import { postUser, UserDTO } from '../apis/api'

export const useCreateUser = () =>
  useMutation({
    mutationKey: ['User', 'Create'],
    mutationFn: (data: UserDTO) => postUser(data),
  })
