import React from 'react';
import PropTypes from 'prop-types';
import Comma from '../assets/Comma/image.png';


// Using a simple SVG quote icon as a placeholder

const TestimonialCard = ({ name, role, quote }) => {
  return (
    <div className='
      group 
      bg-white dark:bg-gray-900 
      border border-gray-100 dark:border-gray-800 
      shadow-lg rounded-2xl 
      w-80 flex p-6 flex-col gap-4 
      transition-all duration-300 ease-in-out 
      hover:scale-105
    '>
      
      {/* Icon */}
      <div className='flex'>
        <img src={Comma} alt="Quotation mark" className='w-10 h-10'/>
      </div>

      {/* Testimonial Text */}
      <div className='pb-2 min-h-[100px]'>
        <p className="text-gray-700 dark:text-gray-300 line-clamp-4 group-hover:line-clamp-none transition-all">
          {quote}
        </p>
      </div>

      {/* Profile Section */}
      <div className='bg-gray-100 dark:bg-gray-800 rounded-b-2xl -m-6 mt-auto flex flex-row items-center p-4 overflow-hidden'>
        <div className='pr-4'>
          <div className='w-12 h-12 rounded-full bg-blue-200 dark:bg-blue-800 flex items-center justify-center flex-shrink-0'>
            <span className='text-xl font-semibold text-blue-800 dark:text-blue-200'>
              {name[0] ? name[0].toUpperCase() : '?'}
            </span>
          </div>
        </div>
        {/* FIX: Added 'min-w-0' to the flex container to allow children to truncate.
          Added 'truncate' to name and role.
        */}
        <div className='flex flex-col min-w-0'>
          <div className='font-semibold text-md text-gray-900 dark:text-white truncate'>{name}</div>
          <p className='text-blue-500 font-semibold truncate'>{role}</p>
        </div>
      </div>
    </div>
  );
};

TestimonialCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
};

export default TestimonialCard;

