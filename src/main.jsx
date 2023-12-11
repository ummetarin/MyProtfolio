import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Mainlayout from './component/Mainlayout/Mainlayout';
import Home from './component/Home/Home';
import Contruct from './component/Contruct/Contruct';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Mainlayout></Mainlayout> ,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },{
        path:"/con",
        element:<Contruct></Contruct>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
