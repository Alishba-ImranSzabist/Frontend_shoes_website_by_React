import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Services from './pages/Services';
import AppLayout from './AppLayout';
import Collections from './pages/Collections';

import Help from './pages/Help';
import Signup from './pages/Signup';
import Categories from './pages/Categories';
import Products from './pages/Products';
import PageProduct from './Components/Pageproduct';



export default function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      children:[
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />,
        }, 
        {
          path:"products",
          element:<Products/>,
          
        },
        {
          path:'/PageProduct',
          element:<PageProduct/>
        },
        {
          path: 'contact',
          element: <Contact />
        },{
          path: 'Services',
          element: <Services />
        },{
          path:'login',
          element:<Login/>
        },
        {
          path:'Signup',
          element:<Signup/>
        },
        {
          path:'Collections',
          element:<Collections/>
        },{
          path:'Categories',
          element:<Categories/>
        },
        {
          path:'Help',
          element:<Help/>
        },
       
        
      ]
    }
  
  ]);




  




  // Return the JSX
  

    
    
  return (
    <div>
      <RouterProvider router={router} />

      
    </div>
    
  )
}
