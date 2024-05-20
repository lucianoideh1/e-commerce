import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Root from './routes/root'
import ErrorPage from './error-page'
import Shop, {ShopLoader} from './routes/shop'
import Index from './routes'
import { Product } from './routes/product'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {index:true,element:<Index></Index>},
     {
      path:'/shop',
      element:<Shop></Shop>,
      loader:ShopLoader,
      errorElement:<ErrorPage></ErrorPage>,
     }
     ,
     {
      path:'/products',
      element:<Product></Product>
     }
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
