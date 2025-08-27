import React from 'react';
import ContactForm from './../components/ContactForm';

export default function Chatbot() {
  return (
    <div >
      {/* className='h-screen flex justify-center items-center font-bold text-4xl' */}
      <div>
        <div className='font bold text-4xl flex justify-center items-center font-bold'>
      <h1 className='dark:text-white'>About</h1>
        </div>
      </div>
      <div>
      <ContactForm/>
      </div>
    </div>
  );
} 