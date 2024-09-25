import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {

    useEffect(() => {
        document.title = "404 Page Not Found";
    }, []);
    
    return (
        <>
            <div className='flex justify-center items-center h-96'>
                <div className=''>
                    <h1 className='text-center p-2 font-bold text-3xl text-red-600 md:lg:xl:text-7xl'>404 Page Not Found</h1>
                    <h1 className='text-center p-2 text-red-500 text-2xl'>Something went wrong!</h1>
                    <NavLink to="/">
                        <h1 className='flex justify-center bg-red-600 p-2 rounded-full font-bold text-white'>Go Back</h1>
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default Error