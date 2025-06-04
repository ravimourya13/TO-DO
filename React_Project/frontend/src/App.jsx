import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from './components/Layout';
import ErrorPage from './components/ErrorPage';
import Login from './components/Login';
import Register from './components/Register';


function App() {

 const routes = createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      errorElement:<ErrorPage/>,
      children:[
        // {index:true,element:<Home/>}
        {path:'home',element:<Home/>},
        {path:'login',element:<Login/>},
        {path:'register',element:<Register/>}
      ]
    }
  ])

  return (
    <>
     <RouterProvider router={routes}/>
    </>
  )
}

export default App
