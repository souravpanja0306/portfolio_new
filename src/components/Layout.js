import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from './Navbar'

const Layout = ({ children }) => {
  const themeColor = useSelector((state) => state.theme.color);

  return (
    <>
      <div id="layout" className={`font-mono min-h-screen ${themeColor == "light" ? "bg-green-50" : "bg-slate-800"}`}>
        <Navbar />
        {children}
      </div>
    </>
  )
}

export default Layout