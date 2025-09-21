import React from 'react';
import DocMid from './../assets/homepageIcons/therapist.png';
import LeftDoc from './../assets/therapists/Hero-section/LeftDoc.png';
import RightDoc from './../assets/therapists/Hero-section/RightDoc.png';

export default function TherapistsHeroSection() {
  return (
    <>
    <div className='lg:flex  lg:my-8 justify-between lg:py-4 lg:px-10 mb-8'>
        <div className='flex justify-center items-center pb-8 lg:py-0'>
          <div className='p-4 text-center lg:px-50 flex flex-col gap-4'>
            <p className='dark:text-white font-bold text-3xl lg:text-4xl '><span className='text-gray-500'>Find Your Therapist</span>, Get Help Quick</p> 
            <p className='dark:text-gray-500 font-semibold text-gray-600'>Connect with licensed mental health professionals in India</p>
          </div>
        </div>
        <div className='flex items-end justify-center'>
            <img className='w-40 lg:w-60 -mr-20 lg:-mr-30 z-10' src={LeftDoc} alt="Doc" />
            <img className='w-40 lg:w-70 -mb-[5px] z-20' src= {DocMid} alt="Doc" />
            <img className='w-40 lg:w-60 -ml-20 lg:-ml-30 z-10' src={RightDoc} alt="Doc" />
        </div>
    </div>
    </>
  )
}
