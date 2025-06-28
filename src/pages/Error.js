import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {

    useEffect(() => {
        document.title = "404 Page Not Found";
    }, []);

    return (
        <>
            <div className="min-h-screen flex justify-center items-center px-4">
                <div className="text-center space-y-6">
                    <h1 className="text-5xl md:text-7xl font-extrabold text-red-600 drop-shadow-lg">404</h1>
                    <h2 className="text-2xl md:text-3xl font-semibold">Oops! Page Not Found</h2>
                    <p className="max-w-md mx-auto">
                        The page you are looking for doesn't exist or has been moved.
                    </p>
                    <NavLink to="/" className="inline-block">
                        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full transition duration-300 shadow-lg">
                            Go Back Home
                        </button>
                    </NavLink>
                </div>
            </div>
        </>
    );
};

export default Error;
