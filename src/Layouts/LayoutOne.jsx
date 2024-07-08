import React from 'react'
import { Navbar } from '../Components/Navbar'
import { Outlet } from 'react-router-dom'

export const LayoutOne = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}
