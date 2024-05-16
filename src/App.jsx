import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './routes/Layout/Layout'
import HomePage from './routes/Homepage/HomePage'
import ListPage from './routes/ListPage/ListPage'
import SinglePage from '~/routes/SinglePage/SinglePage'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <HomePage />
        },
        {
          path: '/list',
          element: <ListPage />
        },
        {
          path: '/:id',
          element: <SinglePage />
        }
        // {
        //   path:"/profile",
        //   element:<ProfilePage/>
        // },
        // {
        //   path:"/login",
        //   element:<Login/>
        // },
        // {
        //   path:"/register",
        //   element:<Register/>
        // }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App
