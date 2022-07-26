import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { AiFillCaretDown, AiFillHome, AiFillProfile, AiOutlineFundProjectionScreen, AiFillTool, AiFillMail, AiFillCaretUp } from "react-icons/ai";
import { BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { darkColor, lightColor } from '../store/slices/themeSlice'


const Navbar = () => {
    const dispatch = useDispatch()
    const themeColor = useSelector((state) => state.theme.color)


    const [Menu, setMenu] = useState(false)
    const handelMenu = () => {
        if (!Menu) {
            const menu = document.getElementById("menu")
            menu.classList.remove("hidden")
            setMenu(true)
        } else {
            const menu = document.getElementById("menu")
            menu.classList.add("hidden")
            setMenu(false)
        }
    }

    const ActiveLink = ({ isActive }) => {
        return {
            color: isActive ? "#0f7025" : ""
        }
    }


    return (
        <>
            <div className="py-2 bg-green-600 flex justify-between items-center px-16 shadow-2xl hidden lg:xl:flex">
                <div className=' text-white font-bold text-4xl'>
                    <NavLink to={"/"} className="hover:text-lime-800">Sourav Panja</NavLink>
                </div>
                <div className=' text-white'>
                    <NavLink to={"/"} className="p-3 text-xl font-bold duration-500 hover:rotate-3 hover:text-lime-800 " style={ActiveLink}>Home</NavLink>
                    <NavLink to={"/about"} className="p-3 text-xl font-bold duration-500 hover:rotate-3 hover:text-lime-800 " style={ActiveLink}>About</NavLink>
                    <NavLink to={"/project"} className="p-3 text-xl font-bold duration-500 hover:rotate-3 hover:text-lime-800 " style={ActiveLink}>Projects & Works</NavLink>
                    <NavLink to={"/experiences"} className="p-3 text-xl font-bold duration-500 hover:rotate-3 hover:text-lime-800 " style={ActiveLink}>Experiences</NavLink>
                    <NavLink to={"/contact"} className="p-3 text-xl font-bold duration-500 hover:rotate-3 hover:text-lime-800 " style={ActiveLink}>Contact</NavLink>
                </div>
                <div className=' text-white'>
                    {
                        themeColor == "light"
                            ? <button className='duration-500 hover:rotate-90' onClick={() => (dispatch(darkColor('dark')))}><BsFillSunFill /></button>
                            : <button className='duration-500 hover:rotate-90' onClick={() => (dispatch(lightColor('light')))}><BsMoonStarsFill /></button>
                    }
                </div>
            </div>

            {/* Mobile Views   */}

            <div className='py-2 bg-green-600 flex justify-between items-center p-8 md:lg:xl:px-16 md:lg:xl:hidden'>
                <div className='text-white text-lg' onClick={() => handelMenu()}>
                    {
                        Menu
                            ? <AiFillCaretUp />
                            : <AiFillCaretDown />
                    }
                </div>
                <div className=' text-white font-bold text-3xl md:lg:xl:text-4xl'>
                    <NavLink to={"/"}>Sourav Panja</NavLink>
                </div>
                <div className=' text-white hidden md:lg:xl:flex'>
                    <NavLink to={"/"} className="p-3">Home</NavLink>
                    <NavLink to={"/about"} className="p-3">About</NavLink>
                    <NavLink to={"/project"} className="p-3">Projects & Works</NavLink>
                    <NavLink to={"/experiences"} className="p-3">Experiences</NavLink>
                    <NavLink to={"/contact"} className="p-3">Contact</NavLink>
                </div>
                <div className=' text-white'>
                    {
                        themeColor == "light"
                            ? <button className='duration-500 hover:rotate-90' onClick={() => { dispatch(darkColor('dark')) }}><BsFillSunFill /></button>
                            : <button className='duration-500 hover:rotate-90' onClick={() => { dispatch(lightColor('light')) }}><BsMoonStarsFill /></button>
                    }
                </div>
            </div>
            <div id="menu" className='bg-green-700 flex justify-center items-center md:lg:xl:px-16 md:lg:xl:hidden hidden'>
                <div className='flex text-white text-3xl'>
                    <NavLink to={"/"} className="p-3"><AiFillHome className='text-white' /></NavLink>
                    <NavLink to={"/about"} className="p-3"><AiFillProfile className='text-white' /></NavLink>
                    <NavLink to={"/project"} className="p-3"><AiOutlineFundProjectionScreen className='text-white' /></NavLink>
                    <NavLink to={"/experiences"} className="p-3"><AiFillTool className='text-white' /></NavLink>
                    <NavLink to={"/contact"} className="p-3"><AiFillMail className='text-white' /></NavLink>
                </div>
            </div>
        </>
    )
}

export default Navbar