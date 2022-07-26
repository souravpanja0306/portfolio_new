import React, { useEffect } from 'react'

const About = () => {

  useEffect(() => {
    document.title = "About Page";
  }, []);

  return (
    <>
      <div className='p-8'>
        <div className='md:lg:xl:flex'>
          <div className='w-full md:lg:xl:w-1/2 rounded-lg shadow-lg p-6 md:lg:xl:py-12 md:lg:xl:px-24 bg-slate-100 border-solid border-slate-300 border-2 md:lg:xl:m-6 my-2'>
            <h1 className='font-bold text-orange-600 text-2xl'>About</h1>
            <p className='indent-6'><span className='font-bold text-2xl'>H</span>i, This is Sourav Panja. I am web developer specializing in Mern Stack development,
              Experienced with all stages of the development cycle for dynamic web projects. Well
              versed in numerous programming languages including HTML5, CSS, Javascripts, MySql and
              others. </p>
          </div>
          <div className='w-full md:lg:xl:w-1/2 rounded-lg shadow-lg p-6 md:lg:xl:py-12 md:lg:xl:px-24 bg-slate-100 border-solid border-slate-300 border-2 md:lg:xl:m-6 my-2'>
            <h1 className='font-bold text-orange-600 text-2xl'>Personal Details</h1>
            <ul className='indent-6'>
              <li><span className='font-bold'>Gender : </span>Male</li>
              <li><span className='font-bold'>Date of Birth : </span>3rd, December, 1995</li>
              <li><span className='font-bold'>Nationality : </span>Indian</li>
              <li><span className='font-bold'>Religion : </span>Hinduism</li>
            </ul>
          </div>
        </div>
        <div className='md:lg:xl:flex'>
          <div className='w-full md:lg:xl:w-1/2 rounded-lg shadow-lg p-6 md:lg:xl:py-12 md:lg:xl:px-24 bg-slate-100 border-solid border-slate-300 border-2 md:lg:xl:m-6 my-2'>
            <h1 className='font-bold text-orange-600 text-2xl'>Academic Details</h1>
            <ul className='indent-6'>
              <li><span className='font-bold'>College : </span>Graduate(B.Com) from Shyama Prasad College, Calcutta University</li>
              <li><span className='font-bold'>School : </span>12th passout from Khidderpore Academy, WB Board</li>
              <li></li>
            </ul>
          </div>
          <div className='w-full md:lg:xl:w-1/2 rounded-lg shadow-lg p-6 md:lg:xl:py-12 md:lg:xl:px-24 bg-slate-100 border-solid border-slate-300 border-2 md:lg:xl:m-6 my-2'>
            <h1 className='font-bold text-orange-600 text-2xl'>Additional Qualifications</h1>
            <ul className='indent-6'>
              <li><span className='font-bold'>Institute : </span>Filed Technician in Computer Hardware, Brainware</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default About