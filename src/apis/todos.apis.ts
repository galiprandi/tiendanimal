import Axios from 'axios'

const baseUrl =
  import.meta.env.VITE_API_URL ?? 'https://jsonplaceholder.typicode.com'

export const TodosApi = Axios.create({
  baseURL: baseUrl,
})

export const getTodos = () =>
  TodosApi.get<TodoDTO[]>('/todos').then(res => res.data)

// Interfaces

export interface TodoDTO {
  userId: number
  id: number
  title: string
  completed: boolean
}
