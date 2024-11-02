import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from "./views/Home/Home"
import BlogView from "./views/BlogView/BlogView"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));

const router =createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/blog/:id",
    element:<BlogView/>
  },
])
root.render(<RouterProvider router ={router}/>);


