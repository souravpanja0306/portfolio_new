import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {

    useEffect(() => {
        document.title = "404 Page Not Found";
    }, []);

    return (
        <>
            <div className='flex flex-col justify-center items-center min-h-screen font-mono'>
                <h1 className='text-center p-2 font-bold text-3xl text-red-600 md:lg:xl:text-9xl'>404</h1>
                <h1 className='text-center p-2 font-bold text-3xl text-red-600 md:lg:xl:text-5xl'>Page Not Found</h1>
                <h1 className='text-center p-2 text-red-500 text-xl'>Something went wrong!</h1>
                <NavLink to="/">
                    <h1 className='flex justify-center items-center bg-red-600 px-4 py-2 rounded-md text-white'>
                        Back to Home
                    </h1>
                </NavLink>
            </div>
        </>
    )
}

export default Error