import React from 'react'
// import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './commponent/Navbar'
import { useSelector } from 'react-redux'
import {cartItemsSelector} from "./store/slices/cartSlice";



function App() {
  const cartItmes=useSelector(cartItemsSelector);

  return (
    <>
    <Navbar />
    <Outlet cartItmes={cartItmes[0]}  />
    </>
    
  )
}

export default App
