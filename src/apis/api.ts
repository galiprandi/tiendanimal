import Axios from 'axios'

const baseUrl =
  import.meta.env.VITE_API_URL ?? 'https://jsonplaceholder.typicode.com'

export const Api = Axios.create({
  baseURL: baseUrl,
})

/**
 * This is a fake API, it's using the JSONPlaceholder API to simulate a real API.
 */
export const defaultNewTask = {
  id: 999,
  userId: 1,
  title: 'New task',
  completed: false,
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris, ac elementum ultrices mauris. Cursus urna vehicula nisi aliquam pulvinar sit interdum eget ac. Rhoncus et nunc, aliquam, ac faucibus odio porta diam lorem. Dictum amet malesuada dictum tristique sollicitudin sed sagittis.',
}

export const getTasks = () =>
  Api.get<TaskFromApiDTO[]>('/todos').then(({ data }) =>
    data
      .map(item => ({ ...item, description: defaultNewTask.description }))
      .slice(0, 3)
  )

export const getTask = (id: number) =>
  Api.get<TaskFromApiDTO>(`/todos/${id}`).then(res => res.data)

export const editTask = ({ id, ...data }: EditTaskParams) =>
  Api.patch<EditTaskParams['data']>(`/todos/${id}`, data).then(res => res.data)

export const addTask = () =>
  Api.post<TaskFromApiDTO>('/todos', defaultNewTask).then(res => res.data)

export const deleteTask = (id: number) =>
  Api.delete(`/todos/${id}`).then(res => res.data)

export const postUser = (data: UserDTO) =>
  Api.post('/users', data).then(res => res.data)

// Interfaces

interface TaskFromApiDTO {
  id: number
  userId: number
  title: string
  completed: boolean
}

type EditTaskParams = { id: number; data: Partial<TaskCreationDTO> }

export type TaskDTO = Awaited<ReturnType<typeof getTasks>>[number]
export type TaskCreationDTO = Omit<TaskFromApiDTO, 'id'>
export interface UserDTO {
  name: string
  email: string
  phone: string
}
