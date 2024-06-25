import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ErrorPage from "./pages/ErrorPage.jsx"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import SignIn from "./components/signin/Sigin.jsx"
import SignUp from "./components/signup/Signup.jsx"
import Dashboard from "./components/dashboard/Dashboard.jsx";
import {PaginationProvider} from "./components/dashboard/RightSide/Pagination.jsx"



const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <App />,
    children: [
      {
        path: "",
        element: <SignIn />
      },
      {
        path:"/signup",
        element:<SignUp/>
      },{
        path:"/dashboard",
        element:<Dashboard/>
      }
      
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <PaginationProvider>
        <RouterProvider router={router} />
  </PaginationProvider>
)