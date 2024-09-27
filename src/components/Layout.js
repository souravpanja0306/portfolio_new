import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from './Navbar'

const Layout = ({ children }) => {
  const themeColor = useSelector((state) => state.theme.color);

  return (
    <div className='font-mono'>
      <Navbar />
      <div id="layout" className={`min-h-screen ${themeColor === "light" ? "bg-green-50" : "bg-slate-800"} p-2`}>
        {children}
      </div>
    </div>
  )
}

export default Layout