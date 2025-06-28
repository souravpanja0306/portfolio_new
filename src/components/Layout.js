import React from 'react'
import { useSelector } from 'react-redux'

const Layout = ({ children }) => {
  const themeColor = useSelector((state) => state.theme.color)
  return (
    <>
      <div id="layout" className={`${themeColor === "light" ? "bg-green-50 text-slate-600" : "bg-slate-800 text-white"} min-h-screen `}>
        {children}
      </div>
    </>
  )
}

export default Layout