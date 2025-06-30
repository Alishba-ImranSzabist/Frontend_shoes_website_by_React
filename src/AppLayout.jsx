import React from 'react'
import NavbarComponent from './Components/NavbarComponent'
import Footer from './Components/Footer'
import Home from './pages/Home'
import { Outlet } from 'react-router-dom'

export default function AppLayout() {
  return (
    <div>
      <NavbarComponent />
      <Outlet />
      <Footer />
    </div>
  )
}
