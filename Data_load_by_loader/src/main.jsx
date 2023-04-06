import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './Component/Header/Header';
import Contact from './Component/Contact/Contact';
import ErrorPage from './Component/Error/error-page';
import Navbarpage from './Component/Navbarpage/Navbarpage';
import About from './Component/About/About';
import Default from './Component/Default/Default';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Navbarpage/>,
    children:[
      {
path:"/",
element:<Default/>,
      },
      {
        path: "/Header",
        element:  <Header></Header>,
      },
      {
        path: "/Contact",
        element:  <Contact></Contact>,
      },
      {
        path: "/error",
        element: <ErrorPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/about",
        element:<About></About>
      },
    ]
  }
    
  
  
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
   
  </React.StrictMode>,
)
