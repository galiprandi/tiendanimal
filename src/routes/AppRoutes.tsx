import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AppLayout } from '../layouts/AppLayout'

// Pages
import { MyTasks } from '../pages/MyTasks'
import { MyData } from '../pages/MyData'
import { MyFeedback } from '../pages/MyFeedback'
import { MyCommunications } from '../pages/MyCommunications'
import { MyBestFriends } from '../pages/MyBestFriends'
import { Home } from '../pages/Home'

const router = createBrowserRouter([
  {
    path: '/tiendanimal',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'data',
        element: <MyData />,
      },
      {
        path: 'tasks',
        element: <MyTasks />,
      },
      {
        path: 'feedback',
        element: <MyFeedback />,
      },
      {
        path: 'communications',
        element: <MyCommunications />,
      },
      {
        path: 'friends',
        element: <MyBestFriends />,
      },
    ],
  },
])

export const AppRoutes = () => {
  return <RouterProvider router={router} />
}
