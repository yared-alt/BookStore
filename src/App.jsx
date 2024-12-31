import React from 'react'
// import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './commponent/Navbar'

function App() {

  return (
    <>
    <Navbar />
    <Outlet />
    </>
    
  )
}

export default App
