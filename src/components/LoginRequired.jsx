import React from 'react'
import LoginArt from "../assets/LoginRequired.png"
import HomeImg from "../assets/Home.png"
import { Link } from 'react-router-dom';


function LoginRequired() {
  return (
    <>
    <div className='mt-0 flex flex-col justify-center items-center gap-2'>
        <img className='h-80 w-auto' src={LoginArt} alt="" />
        <p className='font-semibold text-gray-400 text-center text-md mb-4'>Please Login/Sigup to use this feature !</p>
        <div className='flex gap-6 text-lg'>
        <Link to="/auth" className='bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-100 px-3 p-2 rounded-xl font-bold shadow-lg hover:bg-blue-300 hover:text-white'>Login/SignUp</Link>
        <Link to="/" className='bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-100 p-2 rounded-xl font-bold shadow-lg flex gap-2 items-center hover:bg-blue-300 hover:text-white'>
        <img className='h-5' src={HomeImg} alt="" />
        <p>Home</p>
        </Link>
        </div>
    </div>
    </>
  )
}

export default LoginRequired