import React, { useRef, useEffect } from 'react'
import emailjs from '@emailjs/browser';
import { AiOutlineMail, AiOutlineHome, AiOutlinePhone } from "react-icons/ai";



const Contact = () => {
  const form = useRef();

  useEffect(() => {
    document.title = "Contact Page";
  }, []);

  const handelSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5rph4ng', 'template_me1mz4v', form.current, 'F3fNSsg3WbGPaV_7l')
      .then((result) => {
        console.log(result.text);
        form.current.reset();
      }, (error) => {
        console.log(error.text);
      });
  };


  return (
    <>
      <div className='md:lg:xl:flex p-8 '>
        <div className='flex justify-center items-center lg:xl:w-1/2 rounded-lg shadow-lg p-4 lg:xl:py-12 lg:xl:px-24 bg-slate-100 border-solid border-slate-300 border-2 md:lg:xl:m-6'>
          <div className='text-orange-600 font-bold text-sm lg:xl:text-lg px-2'>
            <AiOutlinePhone className='text-3xl text-center my-2' />
            <h1 className='font-bold text-slate-500 text-sm lg:xl:text-xl'>7278159888 || 7686885164</h1>
            <AiOutlineMail className='text-3xl text-center my-2' />
            <h1 className='font-bold text-slate-500 text-sm lg:xl:text-xl'>panjasourav03@gmail.com</h1>
            <AiOutlineHome className='text-3xl text-center my-2' />
            <h1 className='font-bold text-slate-500 text-sm lg:xl:text-xl'>Hide Road, Kolkata, West Bengal, Pin - 700043</h1>
          </div>
        </div>
        <div className='w-full md:lg:xl:w-1/2 rounded-lg shadow-lg p-6 lg:xl:py-12 lg:xl:px-24 bg-slate-100 border-solid border-slate-300 border-2 md:lg:xl:m-6 my-2'>
          <form ref={form}>
            <label className='font-bold text-slate-500 text-sm lg:xl:text-xl'>Full Name</label>
            <input className='w-full p-2 border-2 border-solid border-slate-600 rounded-md' type="text" name="user_name" />
            <label className='font-bold text-slate-500 text-sm lg:xl:text-xl'>Email</label>
            <input className='w-full p-2 border-2 border-solid border-slate-600 rounded-md' type="email" name="user_email" />
            <label className='font-bold text-slate-500 text-sm lg:xl:text-xl'>Messege</label>
            <textarea className='w-full p-2 border-2 border-solid border-slate-600 rounded-md' type="" rows="3" name="message" />
            <button className='bg-sky-500 px-4 py-2 rounded-lg mt-2 text-white hover:bg-sky-800 shadow-xl'
              onClick={(e) => handelSubmit(e)}>Send</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact