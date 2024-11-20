import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/error.tsx';
import Users from './components/users.tsx';
import UserDetails from './components/user-details.tsx';
import CommentsList from './components/comment.tsx';
import CommentDetails from './components/comment-details.tsx';

const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:"/users",
        element:<Users/>,
        
      },
      {
        path:"/users/:id",
        element:<UserDetails/>,
        
      },
      {
        path:"/comments",
        element:<CommentsList/>
      },
      {
        path:"/comments/:id",
        element:<CommentDetails/>
      }
      
    ]
  },
  

])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
