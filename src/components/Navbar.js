import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import {
    AiFillCaretDown,
    AiFillCaretUp,
    AiFillHome,
    AiFillProfile,
    AiOutlineFundProjectionScreen,
    AiFillTool,
    AiFillMail
} from "react-icons/ai";
import { BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { darkColor, lightColor } from '../store/slices/themeSlice'

const Navbar = () => {
    const dispatch = useDispatch()
    const themeColor = useSelector((state) => state.theme.color)

    const [Menu, setMenu] = useState(false)
    const handelMenu = () => {
        setMenu(!Menu)
    }

    const ActiveLink = ({ isActive }) => ({
        color: isActive ? "#0f7025" : "",
    })

    return (
        <>
            {/* Desktop Navbar */}
            <div className="fixed top-0 z-50 w-full py-3 px-6 shadow-md hidden lg:flex justify-between items-center">
                <div className=" font-bold text-3xl">
                    <NavLink to={"/"} className="hover:text-lime-300 duration-300">Sourav Panja</NavLink>
                </div>
                <div className="flex gap-6  text-lg font-semibold">
                    <NavLink to={"/"} className="hover:text-lime-300 duration-300" style={ActiveLink}>Home</NavLink>
                    <NavLink to={"/about"} className="hover:text-lime-300 duration-300" style={ActiveLink}>About</NavLink>
                    <NavLink to={"/project"} className="hover:text-lime-300 duration-300" style={ActiveLink}>Projects & Works</NavLink>
                    <NavLink to={"/experiences"} className="hover:text-lime-300 duration-300" style={ActiveLink}>Experiences</NavLink>
                    <NavLink to={"/contact"} className="hover:text-lime-300 duration-300" style={ActiveLink}>Contact</NavLink>
                </div>
                <div className=" text-2xl">
                    {themeColor === "light" ? (
                        <button onClick={() => dispatch(darkColor('dark'))} className="hover:rotate-90 duration-300">
                            <BsFillSunFill />
                        </button>
                    ) : (
                        <button onClick={() => dispatch(lightColor('light'))} className="hover:rotate-90 duration-300">
                            <BsMoonStarsFill />
                        </button>
                    )}
                </div>
            </div>

            {/* Mobile Navbar */}
            <div className="lg:hidden px-6 py-3 flex justify-between items-center shadow-md">
                <div className=" text-2xl cursor-pointer" onClick={handelMenu}>
                    {Menu ? <AiFillCaretUp /> : <AiFillCaretDown />}
                </div>
                <div className=" font-bold text-2xl">
                    <NavLink to={"/"}>Sourav Panja</NavLink>
                </div>
                <div className=" text-2xl">
                    {themeColor === "light" ? (
                        <button onClick={() => dispatch(darkColor('dark'))} className="hover:rotate-90 duration-300">
                            <BsFillSunFill />
                        </button>
                    ) : (
                        <button onClick={() => dispatch(lightColor('light'))} className="hover:rotate-90 duration-300">
                            <BsMoonStarsFill />
                        </button>
                    )}
                </div>
            </div>

            {/* Mobile Menu */}
            {Menu && (
                <div id="menu" className="p-4 flex justify-between items-center lg:hidden transition-all duration-500 shadow-lg">
                    <NavLink to={"/"} className="hover:text-lime-300 flex flex-col justify-center items-center" onClick={handelMenu}>
                        <AiFillHome className='text-2xl'/>
                        <span className='text-sm'>Home</span>
                    </NavLink>
                    <NavLink to={"/about"} className="hover:text-lime-300 flex flex-col justify-center items-center" onClick={handelMenu}>
                        <AiFillProfile className='text-2xl'/>
                        <span className='text-sm'>About</span>
                    </NavLink>
                    <NavLink to={"/project"} className="hover:text-lime-300 flex flex-col justify-center items-center" onClick={handelMenu}>
                        <AiOutlineFundProjectionScreen className='text-2xl'/>
                        <span className='text-sm'>Project</span>
                    </NavLink>
                    <NavLink to={"/experiences"} className="hover:text-lime-300 flex flex-col justify-center items-center" onClick={handelMenu}>
                        <AiFillTool className='text-2xl'/>
                        <span className='text-sm'>Experience</span>
                    </NavLink>
                    <NavLink to={"/contact"} className="hover:text-lime-300 flex flex-col justify-center items-center" onClick={handelMenu}>
                        <AiFillMail className='text-2xl'/>
                        <span className='text-sm'>Contact</span>
                    </NavLink>
                </div>
            )}
        </>
    )
}

export default Navbar
