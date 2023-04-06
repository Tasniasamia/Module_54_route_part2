import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './Component/Navbar/Navbar';
import Default from './Component/Default/Default';
import About from './Component/About/About';
import Home from './Component/Home/Home';
import Contact from './Component/Contact/Contact';
import FriendDataAll from './Component/FriendDataAll/FriendDataAll';
import SingleFriendid from './Component/SingleFriendId/SingleFriendid';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar></Navbar>,
    children:[
      {
        path:"/",
        element:<Default></Default>,
      },
      {
        path:"/Home",
        element:<Home></Home>,
      },{
        path:"/About",
        element:<About></About>
      },{
path:"/FriendDataAll",
element:<FriendDataAll></FriendDataAll>,
loader:()=>fetch('https://jsonplaceholder.typicode.com/posts'),
      },{

        path:"/SingleFriend/:id",
        element:<SingleFriendid></SingleFriendid>,
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`),
        
      },
      
      {
        path:"/Contact",
        element:<Contact></Contact>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
