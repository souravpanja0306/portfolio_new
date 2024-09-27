import React, { useEffect } from 'react'
import { AiOutlineMail, AiOutlineHome, AiOutlinePhone } from "react-icons/ai";
import Layout from '../components/Layout';
import { useSelector } from 'react-redux'

const Contact = () => {
  const themeColor = useSelector((state) => state.theme.color);

  useEffect(() => {
    document.title = "Contact Page";
  }, []);

  return (
    <Layout>
      <div className='md:lg:xl:flex'>
        <div className={`flex justify-start items-center lg:xl:w-full rounded-lg shadow-lg p-4 lg:xl:py-12 lg:xl:px-24 ${themeColor === "dark" ? "bg-slate-600" : "bg-slate-100"} border-solid border-slate-300 border-2 md:lg:xl:m-6`}>
          <div className=' font-bold text-sm lg:xl:text-lg px-2'>
            <div className='flex items-center gap-3'>
              <AiOutlinePhone className='text-3xl text-center my-2 text-orange-600' />
              <ul className='indent-6'>
                <li><span className='font-bold'>Mobile : </span>7278159888 || 7686885164</li>
              </ul>
            </div>
            <div className='flex items-center gap-3'>
              <AiOutlineMail className='text-3xl text-center my-2 text-orange-600' />
              <ul className='indent-6'>
                <li><span className='font-bold'>Email : </span>panjasourav03@gmail.com</li>
              </ul>
            </div>
            <div className='flex items-center gap-3'>
              <AiOutlineHome className='text-3xl text-center my-2 text-orange-600' />
              <ul className='indent-6'>
                <li><span className='font-bold'>Address : </span>Kolkata, West Bengal, 700043</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact