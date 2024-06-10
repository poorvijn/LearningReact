import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import App from './App.jsx'
import HomePage from './pages/HomePage'
import ProfilesPage from './pages/ProfilesPage'
import ProfilePage from './pages/ProfilePage'
import NotFoundPage from './pages/NotFoundPage'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>,
    errorElement: <NotFoundPage/>
  },
  {
    path:'/profiles',
    element: <ProfilesPage/>,
    children: [
      {
        path:'/profiles/:profileId',
        element: <ProfilePage/>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* RouterProvider is built using React Context API */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
