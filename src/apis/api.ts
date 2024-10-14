import Axios from 'axios'

const baseUrl =
  import.meta.env.VITE_API_URL ?? 'https://jsonplaceholder.typicode.com'

export const Api = Axios.create({
  baseURL: baseUrl,
})

export const getTodos = () =>
  Api.get<TodoDTO[]>('/todos').then(res => res.data.slice(0, 3))

export const getTodo = (id: number) =>
  Api.get<TodoDTO>(`/todos/${id}`).then(res => res.data)

export const addEditTodo = (data: TodoDTO) =>
  Api({
    method: data.id ? 'PUT' : 'POST',
    url: data.id ? `/todos/${data.id}` : '/todos',
    data,
  })

export const deleteTodo = (id: number) =>
  Api.delete(`/todos/${id}`).then(res => res.data)

export const postUser = (data: UserDTO) =>
  Api.post('/users', data).then(res => res.data)

// Interfaces

export interface TodoDTO {
  userId: number
  id: number
  title: string
  completed: boolean
}

export interface UserDTO {
  name: string
  email: string
  phone: string
}
