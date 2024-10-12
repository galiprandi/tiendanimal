import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Header } from '../components/Header'
import { NavBar } from '../components/NavBar'
import { Outlet } from 'react-router-dom'

import './AppLayout.css'

export const AppLayout = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5, // 5 minutes default cache
      },
    },
  })

  return (
    <QueryClientProvider client={queryClient}>
      <main className="container">
        <Header />
        <NavBar />
        <Outlet />
      </main>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
