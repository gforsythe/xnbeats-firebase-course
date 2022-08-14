import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/login';
import Home from './components/home';
import Contact from './components/contact';
import Toasts from './utils/toasts';


function Rout() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/login' element={<Login/>}/>
      
       
      
      </Routes>
      <Footer/>
      <Toasts/>
    </BrowserRouter>
    
    
  )
}

export default Rout