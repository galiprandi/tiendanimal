import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppRoutes } from './routes/AppRoutes.tsx'
import { Toaster } from 'react-hot-toast'
import './libs/i18n.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRoutes />
    <Toaster
      toastOptions={{
        position: 'bottom-center',
        style: {
          marginBottom: '3em',
        },
      }}
    />
  </StrictMode>
)
