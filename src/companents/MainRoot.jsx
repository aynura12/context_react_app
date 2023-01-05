import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'


const MainRoot = () => {
  return (
    <div>
  <Navbar/>
    <Outlet/>
    </div>
  )
}

export default MainRoot
