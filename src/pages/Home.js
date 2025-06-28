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
            <div className="flex flex-col md:flex-row justify-center items-center min-h-screen">
                <div className="w-full md:w-1/3 flex justify-center p-4 md:p-12 items-center">
                    <img
                        src="./assets/sourav3.jpg"
                        alt="Sourav Panja"
                        className="h-60 md:h-96 rounded-full"
                    />
                </div>

                <div className="w-full md:w-2/3 flex flex-col justify-center p-4 md:p-12 py-2">
                    <div className="text-center md:text-left">
                        <h1 className="text-orange-500 font-bold text-2xl md:text-4xl pt-4">
                            Hello! It's Me
                        </h1>
                        <h1 className="text-green-500 font-bold text-3xl md:text-5xl pt-4">
                            <span className="text-5xl md:text-7xl text-orange-500">Sourav Panja </span>
                        </h1>
                        <h1 className="font-bold text-3xl pt-4">
                            And I am MERN Stack Developer.
                        </h1>
                        <h1 className="font-bold text-md">
                            MongoDB || ExpressJs || ReactJs || NodeJS
                        </h1>
                    </div>

                    <div className="flex justify-center md:p-6 py-2 flex-wrap">
                        <a href="https://www.instagram.com/panja0306/" target="_blank" rel="noreferrer">
                            <AiFillInstagram className="m-2 text-5xl md:text-6xl hover:rotate-90 duration-500 text-pink-800 shadow-xl rounded-full" />
                        </a>
                        <a href="https://www.facebook.com/souravpanja03" target="_blank" rel="noreferrer">
                            <AiOutlineFacebook className="m-2 text-5xl md:text-6xl hover:rotate-90 duration-500 text-blue-600 shadow-xl rounded-full" />
                        </a>
                        <a href="https://github.com/souravpanja0306" target="_blank" rel="noreferrer">
                            <AiFillGithub className="m-2 text-5xl md:text-6xl hover:rotate-90 duration-500 text-slate-500 shadow-xl rounded-full" />
                        </a>
                        <a href="https://www.linkedin.com/in/sourav-panja-452b33205/" target="_blank" rel="noreferrer">
                            <AiFillLinkedin className="m-2 text-5xl md:text-6xl hover:rotate-90 duration-500 text-blue-700 shadow-xl rounded-full" />
                        </a>
                        <a href="https://wa.me/7278159888" target="_blank" rel="noreferrer">
                            <AiOutlineWhatsApp className="m-2 text-5xl md:text-6xl hover:rotate-90 duration-500 text-green-500 shadow-xl rounded-full" />
                        </a>
                        <a href="https://twitter.com/souravpanja9" target="_blank" rel="noreferrer">
                            <AiFillTwitterCircle className="m-2 text-5xl md:text-6xl hover:rotate-90 duration-500 text-blue-600 shadow-xl rounded-full" />
                        </a>
                    </div>

                    <div className="flex justify-center p-6">
                        <a
                            href="/assets/FinalResume.pdf"
                            target="_blank"
                            rel="noreferrer"
                            className="mx-4 py-2 px-8 bg-red-500 rounded-full shadow-lg hover:bg-red-700"
                        >
                            <AiOutlineCloudServer className="text-2xl text-white" />
                        </a>
                        <Link to="/contact">
                            <button className="mx-4 py-2 px-8 bg-red-500 rounded-full shadow-lg hover:bg-red-700">
                                <AiTwotoneMail className="text-2xl text-white" />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home