import React, { useEffect } from 'react'
import { AiFillInstagram, AiOutlineFacebook, AiFillGithub, AiFillLinkedin, AiFillTwitterCircle, AiTwotoneMail, AiOutlineCloudServer } from "react-icons/ai";
import { Link } from "react-router-dom"
import { AiOutlineWhatsApp } from "react-icons/ai"


const Home = () => {

    useEffect(() => {
        document.title = "Sourav Panja || Home";
    }, []);

    return (
        <>
            <div className="flex-cols md:lg:xl:flex p-8 min-h-screen"
                style={{ backgroundImage: `url("./assets/sourav33.jpg")` }}>

                <div className='w-full md:lg:xl:w-1/3 flex justify-center md:lg:xl:p-12 '>
                    {/* <img src='/assets/sourav33.jpg' alt='Images' className='h-60 md:lg:xl:h-96 rounded-full border-4 border-solid border-slate-400 shadow-xl' /> */}
                </div>
                <div className='w-full md:lg:xl:w-2/3 justify-center md:lg:xl:p-12 py-2'>
                    <div className='text-white text-center md:lg:xl:text-left'>
                        <h1 className='text-orange-500 font-bold text-4xl md:lg:xl:text-6xl pt-4'>Hello! It's Me</h1>
                        <h1 className='text-green-500 font-bold text-3xl md:lg:xl:text-5xl pt-4'>
                            <span className='text-5xl md:lg:xl:text-7xl text-orange-500'>Sourav Panja </span>
                        </h1>
                        <h1 className='text-slate-400 font-bold text-2xl pt-4'>And I am MERN Stack Developer.</h1>
                        <h1 className='text-slate-400 font-bold text-2xl pt-4'>MongoDB || ExpressJs || ReactJs || NodeJS </h1>
                    </div>
                    <div className='flex text-center justify-center md:lg:xl:p-6 py-2'>
                        <a href="https://www.instagram.com/panja0306/" target="blank">
                            <AiFillInstagram className='md:lg:xl:m-6 text-5xl md:lg:xl:text-6xl hover:rotate-90 duration-500 text-pink-800 shadow-xl rounded-full' />
                        </a>
                        <a href="https://www.facebook.com/souravpanja03" target="blank">
                            <AiOutlineFacebook className='md:lg:xl:m-6 text-5xl md:lg:xl:text-6xl hover:rotate-90 duration-500 text-blue-600 shadow-xl rounded-full' />
                        </a>
                        <a href="https://github.com/souravpanja0306" target="blank">
                            <AiFillGithub className='md:lg:xl:m-6 text-5xl md:lg:xl:text-6xl hover:rotate-90 duration-500 text-slate-500 shadow-xl rounded-full' />
                        </a>
                        <a href="https://www.linkedin.com/in/sourav-panja-452b33205/" target="blank">
                            <AiFillLinkedin className='md:lg:xl:m-6 text-5xl md:lg:xl:text-6xl hover:rotate-90 duration-500 text-blue-700 shadow-xl rounded-full' />
                        </a>
                        <a href="https://wa.me/7278159888" target="blank">
                            <AiOutlineWhatsApp className='md:lg:xl:m-6 text-5xl md:lg:xl:text-6xl hover:rotate-90 duration-500 text-green-500 shadow-xl rounded-full' />
                        </a>
                        <a href="https://twitter.com/souravpanja9" target="blank">
                            <AiFillTwitterCircle className='md:lg:xl:m-6 text-5xl md:lg:xl:text-6xl hover:rotate-90 duration-500 text-blue-600 shadow-xl rounded-full' />
                        </a>
                    </div>
                    <div className='flex justify-center p-6'>
                        <a href='assets/FinalResume.pdf' target='_blank' className='mx-4 py-2 px-8 bg-red-500 rounded-full shadow-lg hover:bg-red-700'>
                            <AiOutlineCloudServer className='text-2xl text-white' />
                        </a>
                        <Link to="/contact">
                            <button className='mx-4 py-2 px-8 bg-red-500 rounded-full shadow-lg hover:bg-red-700'>
                                <AiTwotoneMail className='text-2xl text-white' />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home