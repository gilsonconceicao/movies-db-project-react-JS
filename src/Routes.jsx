import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
//components
import NavBar from './Components/NavBar';
//pages
import Home from './Pages/Home'
import InfoMovie from './Pages/InfoMovie';

const RoutesPage = () => {
  return (
    <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/infomovie/:id' element={<InfoMovie/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default RoutesPage