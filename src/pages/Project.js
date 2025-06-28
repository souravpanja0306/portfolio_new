import React, { useEffect } from 'react'
import { FaNodeJs } from "react-icons/fa";
import { GoMailRead } from "react-icons/go";
// import { SiMongodb, SiExpress, SiRedux, SiReact, SiSocketdotio, SiFirebase, SiAngular } from "react-icons/si";
import { SiAngular, SiNodedotjs, SiExpress, SiMongodb, SiAwsamplify, SiRazorpay } from "react-icons/si";
import { FaCcAmazonPay } from "react-icons/fa";
import { BsBox } from "react-icons/bs"; // placeholder for Eshopbox

const Project = () => {

  useEffect(() => {
    document.title = "Projects & Works Page";
  }, []);


  const raymondProjects = [
    {
      title: "Raymond B2B Project",
      img: "./b2b.png",
      tech: [
        { name: "Angular", icon: <SiAngular /> },
        { name: "NodeJS", icon: <SiNodedotjs /> },
        { name: "ExpressJS", icon: <SiExpress /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "CC Avenue", icon: <FaCcAmazonPay /> },
        { name: "Eshopbox", icon: <BsBox /> },
        { name: "Razorpay", icon: <SiRazorpay /> },
        { name: "AWS", icon: <SiAwsamplify /> },
      ],
    },
    {
      title: "Raymond CT Trim Ecommerce",
      img: "./ct-trim.png",
      tech: [
        { name: "Angular", icon: <SiAngular /> },
        { name: "NodeJS", icon: <SiNodedotjs /> },
        { name: "ExpressJS", icon: <SiExpress /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "CC Avenue", icon: <FaCcAmazonPay /> },
        { name: "Eshopbox", icon: <BsBox /> },
        { name: "Razorpay", icon: <SiRazorpay /> },
        { name: "AWS", icon: <SiAwsamplify /> },
      ],
    },
    {
      title: "Raymond Support Portal",
      img: "./support.png",
      tech: [
        { name: "Angular", icon: <SiAngular /> },
        { name: "NodeJS", icon: <SiNodedotjs /> },
        { name: "ExpressJS", icon: <SiExpress /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "CC Avenue", icon: <FaCcAmazonPay /> },
        { name: "Eshopbox", icon: <BsBox /> },
        { name: "Razorpay", icon: <SiRazorpay /> },
        { name: "AWS", icon: <SiAwsamplify /> },
      ],
    },
    {
      title: "Raymond Innerwear Ecommerce",
      img: "./innerwear.png",
      tech: [
        { name: "Angular", icon: <SiAngular /> },
        { name: "NodeJS", icon: <SiNodedotjs /> },
        { name: "ExpressJS", icon: <SiExpress /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "CC Avenue", icon: <FaCcAmazonPay /> },
        { name: "Eshopbox", icon: <BsBox /> },
        { name: "Razorpay", icon: <SiRazorpay /> },
        { name: "AWS", icon: <SiAwsamplify /> },
      ],
    },
    {
      title: "Raymond Tradeshow Ecommerce",
      img: "./tradeshow.png",
      tech: [
        { name: "Angular", icon: <SiAngular /> },
        { name: "NodeJS", icon: <SiNodedotjs /> },
        { name: "ExpressJS", icon: <SiExpress /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "CC Avenue", icon: <FaCcAmazonPay /> },
        { name: "Eshopbox", icon: <BsBox /> },
        { name: "Razorpay", icon: <SiRazorpay /> },
        { name: "AWS", icon: <SiAwsamplify /> },
      ],
    },
    {
      title: "Raymond Instaheart Points App",
      img: "./instaheart.png",
      tech: [
        { name: "Angular", icon: <SiAngular /> },
        { name: "NodeJS", icon: <SiNodedotjs /> },
        { name: "ExpressJS", icon: <SiExpress /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "CC Avenue", icon: <FaCcAmazonPay /> },
        { name: "Eshopbox", icon: <BsBox /> },
        { name: "Razorpay", icon: <SiRazorpay /> },
        { name: "AWS", icon: <SiAwsamplify /> },
      ],
    },
    {
      title: "Raymond Timeless Luxury Ecommerce",
      img: "./timelessluxury.png",
      tech: [
        { name: "Angular", icon: <SiAngular /> },
        { name: "NodeJS", icon: <SiNodedotjs /> },
        { name: "ExpressJS", icon: <SiExpress /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "CC Avenue", icon: <FaCcAmazonPay /> },
        { name: "Eshopbox", icon: <BsBox /> },
        { name: "Razorpay", icon: <SiRazorpay /> },
        { name: "AWS", icon: <SiAwsamplify /> },
      ],
    },
  ];


  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center p-6">
        <div className="flex flex-col lg:flex-row gap-6 w-full max-w-6xl">

          {/* Portfolio Website */}
          {/* <div className="w-full lg:w-1/2 rounded-lg shadow-lg p-6 lg:p-10 border border-slate-300">
            <h1 className="font-bold text-orange-600 text-2xl lg:text-3xl mb-3">Portfolio Website</h1>
            <h2 className="font-bold text-slate-600 text-sm mb-4">Technology Using</h2>
            <ul className="flex flex-wrap gap-4">
              <li className="text-2xl text-green-600 p-3 bg-gray-200 rounded-full hover:text-green-800 hover:rotate-90 duration-700 cursor-pointer"><SiReact /></li>
              <li className="text-2xl text-green-600 p-3 bg-gray-200 rounded-full hover:text-green-800 hover:rotate-90 duration-700 cursor-pointer"><SiFirebase /></li>
              <li className="text-2xl text-green-600 p-3 bg-gray-200 rounded-full hover:text-green-800 hover:rotate-90 duration-700 cursor-pointer"><SiRedux /></li>
              <li className="text-2xl text-green-600 p-3 bg-gray-200 rounded-full hover:text-green-800 hover:rotate-90 duration-700 cursor-pointer"><GoMailRead /></li>
            </ul>
            <div className="mt-4">
              <img src={dummyImage} alt="Portfolio Screenshot" className="rounded-md shadow-md w-full" />
            </div>
          </div> */}

          {/* Chat Application */}
          {/* <div className="w-full lg:w-1/2 rounded-lg shadow-lg p-6 lg:p-10 border border-slate-300">
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
            <div className="mt-4">
              <img src={dummyImage} alt="Chat App Screenshot" className="rounded-md shadow-md w-full" />
            </div>
          </div> */}
        </div>

        {/* Raymond Projects */}
        <div className="mt-12 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-6">
          {raymondProjects.map((item, index) => (
            <div key={index} className="rounded-lg shadow-lg p-6 lg:p-10 border border-slate-300">
              <h1 className="font-bold text-orange-600 text-2xl lg:text-3xl mb-3">{item.title}</h1>
              <h2 className="font-bold text-slate-600 text-sm mb-4">Technology Using</h2>
              <ul className="flex flex-wrap gap-4">
                {
                  item.tech.map((data, i) => {
                    return (
                      <li className="text-2xl text-green-600 p-3 bg-gray-200 rounded-full hover:text-green-800 hover:rotate-90 duration-700 cursor-pointer">{data.icon}</li>
                    )
                  })
                }
                {/* <li className="text-2xl text-green-600 p-3 bg-gray-200 rounded-full hover:text-green-800 hover:rotate-90 duration-700 cursor-pointer"><SiExpress /></li>
                <li className="text-2xl text-green-600 p-3 bg-gray-200 rounded-full hover:text-green-800 hover:rotate-90 duration-700 cursor-pointer"><SiReact /></li>
                <li className="text-2xl text-green-600 p-3 bg-gray-200 rounded-full hover:text-green-800 hover:rotate-90 duration-700 cursor-pointer"><FaNodeJs /></li>
                <li className="text-2xl text-green-600 p-3 bg-gray-200 rounded-full hover:text-green-800 hover:rotate-90 duration-700 cursor-pointer"><SiRedux /></li> */}
              </ul>
              <div className="mt-4">
                <img src={item.img} alt={`${item.title} Screenshot`} className="rounded-md shadow-md w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Project;
