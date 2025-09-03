// import React from 'react';
// import PropTypes from 'prop-types';

// // Assuming you have a comma icon stored in your project assets
// import Comma from '../../assets/Comma/image.png';

// const TestimonialCard = ({ name, role, imageSrc, quote }) => {
//   return (
//     <div className='bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-lg rounded-2xl w-80 flex p-6 flex-col gap-4'>
      
//       {/* Icon */}
//       <div className='flex'>
//         <img src={Comma} alt="Quotation mark" className='w-10 h-10'/>
//       </div>

//       {/* Testimonial Text */}
//       <div className='pb-2'>
//         <p className="text-gray-700 dark:text-gray-300">
//           {quote}
//         </p>
//       </div>

//       {/* Profile Section */}
//       <div className='bg-gray-100 dark:bg-gray-800 rounded-b-2xl -m-6 mt-auto flex flex-row items-center p-4'>
//         <div className='pr-4'>
//           <img 
//             src={imageSrc} 
//             alt={`Profile photo of ${name}`}
//             className='w-12 h-12 rounded-full object-cover'          
//           />
//         </div>
//         <div className='flex flex-col'>
//           <div className='font-semibold text-md text-gray-900 dark:text-white'>{name}</div>
//           <p className='text-blue-500 font-semibold'>{role}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// // PropTypes updated to reflect the individual props
// TestimonialCard.propTypes = {
//   name: PropTypes.string.isRequired,
//   role: PropTypes.string.isRequired,
//   imageSrc: PropTypes.string.isRequired,
//   quote: PropTypes.string.isRequired,
// };

// export default TestimonialCard;

import React from 'react';
import PropTypes from 'prop-types';

// Assuming you have a comma icon stored in your project assets
import Comma from '../../assets/Comma/image.png';

const TestimonialCard = ({ name, role, quote }) => {
  return (
    <div className='bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-lg rounded-2xl w-80 flex p-6 flex-col gap-4'>
      
      {/* Icon */}
      <div className='flex'>
        <img src={Comma} alt="Quotation mark" className='w-10 h-10'/>
      </div>

      {/* Testimonial Text */}
      <div className='pb-2'>
        <p className="text-gray-700 dark:text-gray-300">
          {quote}
        </p>
      </div>

      {/* Profile Section */}
      <div className='bg-gray-100 dark:bg-gray-800 rounded-b-2xl -m-6 mt-auto flex flex-row items-center p-4'>
        <div className='pr-4'>
          {/* --- MODIFIED PART --- */}
          {/* This div creates the circular initial icon */}
          <div className='w-12 h-12 rounded-full bg-blue-200 dark:bg-blue-800 flex items-center justify-center'>
            <span className='text-xl font-semibold text-blue-800 dark:text-blue-200'>
              {name[0]}
            </span>
          </div>
        </div>
        <div className='flex flex-col'>
          <div className='font-semibold text-md text-gray-900 dark:text-white'>{name}</div>
          <p className='text-blue-500 font-semibold'>{role}</p>
        </div>
      </div>
    </div>
  );
};

// PropTypes updated to remove imageSrc
TestimonialCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
};

export default TestimonialCard;

