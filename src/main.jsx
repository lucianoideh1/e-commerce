import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Root from './routes/root'
import ErrorPage from './error-page'
import Item from './routes/item'
import ItemTwo, {itemTwoLoader} from './routes/itemTwo'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path:'item/:itemId',
        element:<Item></Item>
      },
     {
      path:'/item2',
      element:<ItemTwo></ItemTwo>,
      loader:itemTwoLoader,
     }
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
