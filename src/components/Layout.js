import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const Layout = ({ children }) => {
  const themeColor = useSelector((state) => state.theme.color)

  useEffect(() => {
    const lay = document.getElementById("layout")
    if (themeColor == "light") {
      lay.classList.add("bg-green-50")
      lay.classList.remove("bg-slate-800")
    } else {
      lay.classList.add("bg-slate-800")
      lay.classList.remove("bg-green-50")
    }
  }, [themeColor])

  return (
    <>
      <div id="layout" className={`min-h-screen `}>
        {children}
      </div>
    </>
  )
}

export default Layout