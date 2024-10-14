import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Header } from '../components/Header'
import { Outlet } from 'react-router-dom'

import './AppLayout.css'
import { Footer } from '../components/Footer'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes default cache
    },
  },
})

export const AppLayout = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
