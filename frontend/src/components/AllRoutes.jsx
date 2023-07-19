import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Cars from '../pages/Cars'


const AllRoutes = () => {
  return (
   <Routes>
    <Route path='/' element={<Login/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
    <Route path='/cars' element={localStorage.getItem("buycToken")? <Cars/> :<Login/> }></Route>
    
   </Routes>
  )
}

export default AllRoutes
