import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from './components/Layout';
import ErrorPage from './components/ErrorPage';
import Login from './components/Login';
import Register from './components/Register';
import React from "react";
import AdminForm from './components/AdminForm';
import ContactUs from './components/ContactUs';
import Task from './components/Task';





function App() {

 const routes = createBrowserRouter([
     {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'home', element: <Home /> },
      { path: 'contactus', element: <ContactUs/> },
      { path: 'task', element: <Task/> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: 'admin', element: <AdminForm /> },
    ],
  },
]);

  return (
    <>
     <RouterProvider router={routes}/>
    </>
  )
}

export default App
