import React, { useEffect } from 'react'
import { FaNodeJs } from "react-icons/fa";
import { GoMailRead } from "react-icons/go";
import { SiMongodb, SiExpress, SiRedux, SiReact, SiSocketdotio, SiFirebase } from "react-icons/si";

const Project = () => {
  const themeColor = useSelector((state) => state.theme.color);

  useEffect(() => {
    document.title = "Projects & Works Page";
  }, []);

  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center p-6 ">
        <div className="flex flex-col lg:flex-row gap-6 w-full max-w-6xl">

          {/* Portfolio Website */}
          <div className="w-full lg:w-1/2 rounded-lg shadow-lg p-6 lg:p-10 border border-slate-300">
            <h1 className="font-bold text-orange-600 text-2xl lg:text-3xl mb-3">Portfolio Website</h1>
            <h2 className="font-bold text-slate-600 text-sm mb-4">Technology Using</h2>
            <ul className="flex flex-wrap gap-4">
              <li className="text-2xl text-green-600 p-3 bg-gray-200 rounded-full hover:text-green-800 hover:rotate-90 duration-700 cursor-pointer"><SiReact /></li>
              <li className="text-2xl text-green-600 p-3 bg-gray-200 rounded-full hover:text-green-800 hover:rotate-90 duration-700 cursor-pointer"><SiFirebase /></li>
              <li className="text-2xl text-green-600 p-3 bg-gray-200 rounded-full hover:text-green-800 hover:rotate-90 duration-700 cursor-pointer"><SiRedux /></li>
              <li className="text-2xl text-green-600 p-3 bg-gray-200 rounded-full hover:text-green-800 hover:rotate-90 duration-700 cursor-pointer"><GoMailRead /></li>
            </ul>
          </div>

          {/* Chat Application */}
          <div className="w-full lg:w-1/2 rounded-lg shadow-lg p-6 lg:p-10 border border-slate-300">
            <h1 className="font-bold text-orange-600 text-2xl lg:text-3xl mb-3">Chat Application</h1>
            <h2 className="font-bold text-slate-600 text-sm mb-4">Technology Using</h2>
            <ul className="flex flex-wrap gap-4">
              <li className="text-2xl text-green-600 p-3 bg-gray-200 rounded-full hover:text-green-800 hover:rotate-90 duration-700 cursor-pointer"><SiMongodb /></li>
              <li className="text-2xl text-green-600 p-3 bg-gray-200 rounded-full hover:text-green-800 hover:rotate-90 duration-700 cursor-pointer"><SiExpress /></li>
              <li className="text-2xl text-green-600 p-3 bg-gray-200 rounded-full hover:text-green-800 hover:rotate-90 duration-700 cursor-pointer"><SiReact /></li>
              <li className="text-2xl text-green-600 p-3 bg-gray-200 rounded-full hover:text-green-800 hover:rotate-90 duration-700 cursor-pointer"><FaNodeJs /></li>
              <li className="text-2xl text-green-600 p-3 bg-gray-200 rounded-full hover:text-green-800 hover:rotate-90 duration-700 cursor-pointer"><SiRedux /></li>
              <li className="text-2xl text-green-600 p-3 bg-gray-200 rounded-full hover:text-green-800 hover:rotate-90 duration-700 cursor-pointer"><SiSocketdotio /></li>
            </ul>
          </div>

        </div>
      </div>
    </>
  )
}

export default Project
