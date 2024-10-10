import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { MyTaskList } from './components/MyTaskList'
import { Header } from './components/Header'
import { NavBar } from './components/NavBar'

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5, // 5 minutes default cache
      },
    },
  })

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <main className="container">
          <Header />
          <NavBar />
          <MyTaskList />
        </main>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  )
}

export default App
