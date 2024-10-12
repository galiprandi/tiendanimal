import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AppLayout } from '../layouts/AppLayout'

// Pages
import { MyTaskList } from '../pages/MyTasks'
import { MyData } from '../pages/MyData'
import { MyFeedback } from '../pages/MyFeedback'
import { MyCommunications } from '../pages/MyCommunications'
import { MyBestFriends } from '../pages/MyBestFriends'

const router = createBrowserRouter([
  {
    path: '/tiendanimal',
    element: <AppLayout />,
    children: [
      {
        path: 'data',
        element: <MyData />,
      },
      {
        path: 'tasks',
        element: <MyTaskList />,
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
