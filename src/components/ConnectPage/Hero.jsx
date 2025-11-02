import React from 'react'
import Face2 from '../../assets/homepageIcons/New folder/C.png'
import DocMid from '../../assets/homepageIcons/therapist.png';
import Doodle from "../../assets/doodle.png"


function Hero() {
  return (
    <>
    <div className='mb-100'>
        <div className='flex justify-between items-center rounded-4xl'>
          <p className='text-blue-100 dark:text-blue-200 font-bold text-4xl md:text-8xl lg:text-9xl '>Share Thoughts</p>
          <img className='h-50 md:h-120 top-10 dark:opacity-40' src={Doodle} alt="" />
        </div>
        <div>
          <div className='flex justify-center items-center flex-col'>
            <p className='font-bold dark:text-gray-50 text-2xl text-center md:text-4xl'>Share your Own journey</p>
            <p className='font-bold text-xl text-center md:text-3xl text-gray-400'>Let others know how you made it through</p>
          </div>
        </div>
    </div>
    </>
  )
}

export default Hero