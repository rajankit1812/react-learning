import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      {/* This is where the child components defined by the routes will be rendered. When a route is matched, the corresponding component is displayed in place of the Outlet. It's like a placeholder for the dynamic content that changes based on the current route. */}
      <Footer />
    </>
  )
}

export default Layout
