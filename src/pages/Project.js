import React, { useEffect } from 'react'
import { FaNodeJs } from "react-icons/fa";
import { GoMailRead } from "react-icons/go";
import { SiMongodb, SiExpress, SiRedux, SiReact, SiSocketdotio, SiFirebase } from "react-icons/si";
import Layout from '../components/Layout';
import { useSelector } from 'react-redux';

const Project = () => {
  const themeColor = useSelector((state) => state.theme.color);

  useEffect(() => {
    document.title = "Projects & Works Page";
  }, []);

  return (
    <Layout>
      <div className='md:lg:xl:flex'>
        <div className={`w-full md:lg:xl:w-1/2 rounded-lg shadow-lg p-6 md:lg:xl:py-12 md:lg:xl:px-24 ${themeColor === "dark" ? "bg-slate-600" : "bg-slate-100"} border-solid border-slate-300 border-2 md:lg:xl:m-6 my-2`}>
          <h1 className='font-bold text-orange-600 text-xl md:lg:xl:text-3xl'>Portfolio Website</h1>
          <h1 className='font-bold text-orange-600 text-sm my-2'>Technology Using</h1>
          <ul className='flex'>
            <li className='ml-1 md:lg:xl:m-2 text-xl md:lg:xl:text-3xl text-green-600 p-2 md:lg:xl:p-3 hover:text-green-800 hover:rotate-90 duration-700 cursor-pointer bg-gray-200 rounded-full '><SiReact /></li>
            <li className='ml-1 md:lg:xl:m-2 text-xl md:lg:xl:text-3xl text-green-600 p-2 md:lg:xl:p-3 hover:text-green-800 hover:rotate-90 duration-700 cursor-pointer bg-gray-200 rounded-full '><SiFirebase /></li>
            <li className='ml-1 md:lg:xl:m-2 text-xl md:lg:xl:text-3xl text-green-600 p-2 md:lg:xl:p-3 hover:text-green-800 hover:rotate-90 duration-700 cursor-pointer bg-gray-200 rounded-full '><SiRedux /></li>
            <li className='ml-1 md:lg:xl:m-2 text-xl md:lg:xl:text-3xl text-green-600 p-2 md:lg:xl:p-3 hover:text-green-800 hover:rotate-90 duration-700 cursor-pointer bg-gray-200 rounded-full '><GoMailRead /></li>
          </ul>
        </div>
        <div className={`w-full md:lg:xl:w-1/2 rounded-lg shadow-lg p-6 md:lg:xl:py-12 md:lg:xl:px-24 ${themeColor === "dark" ? "bg-slate-600" : "bg-slate-100"} border-solid border-slate-300 border-2 md:lg:xl:m-6 my-2`}>
          <h1 className='font-bold text-orange-600 text-xl md:lg:xl:text-3xl'>Chat Application</h1>
          <h1 className='font-bold text-orange-600 text-sm my-2'>Technology Using</h1>
          <ul className='flex'>
            <li className='ml-1 md:lg:xl:m-2 text-xl md:lg:xl:text-3xl text-green-600 p-2 md:lg:xl:p-3 hover:text-green-800 hover:rotate-90 duration-700 cursor-pointer bg-gray-200 rounded-full '><SiMongodb /></li>
            <li className='ml-1 md:lg:xl:m-2 text-xl md:lg:xl:text-3xl text-green-600 p-2 md:lg:xl:p-3 hover:text-green-800 hover:rotate-90 duration-700 cursor-pointer bg-gray-200 rounded-full '><SiExpress /></li>
            <li className='ml-1 md:lg:xl:m-2 text-xl md:lg:xl:text-3xl text-green-600 p-2 md:lg:xl:p-3 hover:text-green-800 hover:rotate-90 duration-700 cursor-pointer bg-gray-200 rounded-full '><SiReact /></li>
            <li className='ml-1 md:lg:xl:m-2 text-xl md:lg:xl:text-3xl text-green-600 p-2 md:lg:xl:p-3 hover:text-green-800 hover:rotate-90 duration-700 cursor-pointer bg-gray-200 rounded-full '><FaNodeJs /></li>
            <li className='ml-1 md:lg:xl:m-2 text-xl md:lg:xl:text-3xl text-green-600 p-2 md:lg:xl:p-3 hover:text-green-800 hover:rotate-90 duration-700 cursor-pointer bg-gray-200 rounded-full '><SiRedux /></li>
            <li className='ml-1 md:lg:xl:m-2 text-xl md:lg:xl:text-3xl text-green-600 p-2 md:lg:xl:p-3 hover:text-green-800 hover:rotate-90 duration-700 cursor-pointer bg-gray-200 rounded-full '><SiSocketdotio /></li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default Project