import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './Home'
import Login from './components/Login/Login'
import Signup from './components/Login/Signup';
import Header from './components/Layout/Header';

export default function App() {
 
  return(
    <BrowserRouter>
      <Header />
        <Routes >
          <Route path = "/signup" element = {<Signup/>}/>  
          <Route path = "/login" element = {<Login/>}/> 
          <Route path = "/" element = {<Home/>}/>  
         </Routes> 
      </BrowserRouter>
  )

}
