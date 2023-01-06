import { element } from "prop-types";
import React from "react";
import { createBrowserRouter, RouterProvider, Route, Outlet } from 'react-router-dom'
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Product from './pages/Product/Product';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import NF from "./pages/NF/NF";

const Layout = ()=>{
  return(
    <div className="app">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/product/:id',
          element:<Product/>
        },
        {
          path:'/Products/:id',
          element:<Products/>
        },
        {
          path:'*',
          element:<NF/>
        },
      ]
    },
  ])

  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
