import React, { useEffect } from 'react'

const Experiences = () => {

  useEffect(() => {
    document.title = "Experiences Page";
  }, []);

  return (
    <>
      <div className='md:lg:xl:flex p-8'>
        <div className='w-full md:lg:xl:w-1/2 rounded-lg shadow-lg p-6 md:lg:xl:py-12 md:lg:xl:px-24 bg-slate-100 border-solid border-slate-300 border-2 md:lg:xl:m-6 my-2'>
          <h1 className='font-bold text-orange-600 text-2xl'>1 Year + (2021 - Till Now)</h1>
          <ul className='indent-6'>
            <li><span className='font-bold'>Freelancing : </span>As a Mern Stack Developer, especially Reactjs, ReactRedux, Nextjs. Also work with NodeJs, ExpressJs, MongoDB, Google Firebase, SocketIO and others 3rd party API</li>
          </ul>
        </div>
        <div className='w-full md:lg:xl:w-1/2 rounded-lg shadow-lg p-6 md:lg:xl:py-12 md:lg:xl:px-24 bg-slate-100 border-solid border-slate-300 border-2 md:lg:xl:m-6 my-2'>
          <h1 className='font-bold text-orange-600 text-2xl'>2 Years + (2019 - 2021)</h1>
          <ul className='indent-6'>
            <li><span className='font-bold'>SAP Operator : </span>In a tea company, named: M/s Behera Brothers, Kolkata. ( Tea Import, Export, Packeging, Blending, Warehousing etc. )</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Experiences