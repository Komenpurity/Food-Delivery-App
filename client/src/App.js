import React from 'react'
import { Routes, Route,BrowserRouter } from "react-router-dom";
import Home from './Components/Home'
import Auth from './Components/Login/Auth'
import Login from './Components/Login/Login'
import Search from './Components/Search'
import Navbar from './Components/Navbar/Navbar'
import CurrentOrder from './Components/CurrentOrder';
import Cart from './Components/Cart';

export default function App() {
  return(
    <BrowserRouter>
      <Navbar />
        <Routes> 
          <Route path = "/login" element = {<Login/>}/> 
          <Route path = "/home" element = {<Home/>}/>  
          <Route path = "/" element = {<Auth/>}/>   
          <Route path = "/search" element = {<Search/>}/> 
          <Route path = "/current" element = {<CurrentOrder/>}/> 
          <Route path = "/cart" element = {<Cart/>}/>  
         </Routes> 
      </BrowserRouter>
  )

}
