import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Root from './routes/root'
import ErrorPage from './error-page'
import Shop, {ShopLoader} from './routes/shop'
import Index from './routes'
import { FilterList } from './components/filterList'
import { ItemCollection } from './components/itemCollection'

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
      children:[
        {index:true,element:<FilterList></FilterList>},
        {path:'item-collection',element:<ItemCollection></ItemCollection>}
      ]
     }
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
