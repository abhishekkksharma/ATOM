import React, { useState, useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import B from '../assets/homepageIcons/B.png';
import C from '../assets/homepageIcons/C.png';
import D from '../assets/homepageIcons/D.png';
import therapist from '../assets/homepageIcons/therapist.png';
import people from '../assets/homepageIcons/people.png';
import chatIcon from '../assets/homepageIcons/chatIcon.png';
import ContactForm from './../components/ContactForm';
import TestimonialCard from '../components/Testimonials/card';
import ChatBotPhoneImg from '../assets/homepageIcons/ChatbotPhoneImg.png'
import FaqComponent from '../components/FAQs';



export default function App() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const copyText = (e) => {
    navigator.clipboard.writeText(`Hey! I just came across this awesome page and thought you’d like it too. Check it out: https://atom-beryl.vercel.app/`)
      .then(() => {
        const originalText = e.target.textContent; 
        e.target.textContent = "Link Copied!"; 
        setTimeout(() => {
          e.target.textContent = originalText; 
        }, 2000);
      })
      .catch(err => console.error("Failed to copy: ", err));
  };

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    {/* // Main container is now the relative parent for the SVG */}
    <div className="lg:mt-20 sm:mt-10 bg-transparent flex items-center justify-center p-4 overflow-hidden relative pb-10">
      
        <div className="absolute inset-0 pointer-events-none">
          <svg
            className="w-full h-full" // Opacity is now controlled by the elements themselves
            viewBox="0 0 800 400"
            fill="none"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg" // Added for SVG best practice
          >
            {/* Define the radial gradient inside a <defs> block.
              This gradient will be used by the ellipse in dark mode.
            */}
            <defs>
              <radialGradient id="blurGradient">
                {/* Center of the gradient: a semi-transparent blue */}
                <stop offset="0%" stopColor="rgba(37, 99, 235, 0.3)" />
                {/* Edge of the gradient: fully transparent */}
                <stop offset="100%" stopColor="rgba(37, 99, 235, 0)" />
              </radialGradient>
            </defs>
                    
            {/* This is the new circular blur.
              - It's an ellipse centered in the viewbox.
              - It's hidden by default and only shown in dark mode with "hidden dark:block".
              - It uses the "blurGradient" we defined above.
            */}
            <ellipse
              cx="400"
              cy="200"
              rx="400"
              ry="200"
              fill="url(#blurGradient)"
              className="dark:block"
            />
          </svg>
        </div>

        
      {/* Content container remains constrained and centered */}
      <div className="max-w-6xl mx-auto text-center relative mb-20">
        
        {/* Header Content */}
        <div className={`mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className="text-lg mb-4 font-medium text-black dark:text-white">
            <span className='font-bold text-xl text-blue-800 '>A</span>ct <span className='font-bold text-xl text-blue-800'>T</span>hink <span className='font-bold text-xl text-blue-800'>O</span>vercome <span className='font-bold text-xl text-blue-800'>M</span>aintain
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-gray-900 via-blue-800 to-gray-800 bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-violet-600 dark:to-indigo-600 dark:bg-clip-text dark:text-transparent">
            Lets get started with ATOM
          </h1>
        </div>

        {/* Team Cards */}
        <div className="relative flex flex-wrap justify-center items-center gap-8 mb-12">
          
          {/* Card 1: AI Chatbot */}
          <div
            className={`relative transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-20"
            } sm:-rotate-12 sm:hover:rotate-0 sm:hover:scale-105`}
            style={{ transitionDelay: "400ms" }}
          >
            <div onClick={() => navigate('/Chatbot')} className="rounded-2xl p-6 pt-6 px-4 shadow-xl hover:shadow-2xl transition-all duration-500 backdrop-blur-md min-w-[180px] bg-white/40 border border-gray-200/50 dark:bg-gray-800 dark:border-gray-700">
              {/* Chatbot Icon */}
              <div className="w-20 h-auto  mx-auto mb-4 flex items-center justify-center rounded-xl transition-colors duration-500">
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-gray-600 dark:text-gray-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg> */}
                <img className='rounded-xl' src={chatIcon} alt="" />
              </div>
              {/* Card Title */}
              <h3 className="font-semibold text-lg mb-1 transition-colors duration-500 text-gray-900 dark:text-white">
                Chat with AI
              </h3>
              {/* Card Subtitle */}
              <p className="text-sm font-medium transition-colors duration-500 text-gray-600 dark:text-gray-300">
                Your Personal Assistant
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className={`relative transition-all duration-1000 ease-out ${ isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20' } sm:rotate-6 sm:hover:rotate-0 sm:hover:scale-105`}
            style={{ transitionDelay: '600ms' }}
          >
            <div onClick={() => navigate('/therapists')} className="rounded-2xl p-4 pt-6 shadow-xl hover:shadow-2xl transition-all duration-500 backdrop-blur-md min-w-[180px] bg-white/40 border border-gray-200/50 dark:bg-gray-800 dark:border-gray-700">
              <div className="w-auto h-24 mx-auto mb-2 pt-2 text-4xl flex items-center justify-center rounded-xl  transition-colors duration-500 ">
                <img className='w-auto h-26' src={therapist} alt="therapists" />
              </div>
              <h3 className="font-semibold text-lg mb-1 transition-colors duration-500 text-gray-900 dark:text-white">
                Connect with
              </h3>
              <p className="text-sm font-medium transition-colors duration-500 text-gray-600 dark:text-gray-300">
                Therapists
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div onClick={() => navigate('/Connect')}
            className={`relative transition-all duration-1000 ease-out ${ isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20' } sm:-rotate-6 sm:hover:rotate-0 sm:hover:scale-105`}
            style={{ transitionDelay: '800ms' }}
          >
            <div className="rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 backdrop-blur-md min-w-[180px] bg-white/40 border border-gray-200/50 dark:bg-gray-800 dark:border-gray-700">
              <div className="w-auto h-24 mx-auto text-4xl flex items-center justify-center rounded-full transition-colors duration-500">
                  <img className='w-auto h-32 ' src={people} alt="" />
              </div>
              <h3 className="font-semibold text-lg mb-1 transition-colors duration-500 text-gray-900 dark:text-white">
                Connect
              </h3>
              <p className="text-sm font-medium transition-colors duration-500 text-gray-600 dark:text-gray-300">
                check community
              </p>
            </div>
          </div>

          {/* Card 4 (Content updated inside original frame) */}
          <div
            className={`relative transition-all duration-1000 ease-out ${ isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20' } sm:rotate-12 sm:hover:rotate-0 sm:hover:scale-105`}
            style={{ transitionDelay: '1000ms' }}
          >
            <div className="rounded-2xl min-w-[180px] p-2 shadow-xl hover:shadow-2xl transition-all duration-500 backdrop-blur-md bg-white/40 border-2 border-dashed border-yellow-500 dark:border-gray-100 dark:bg-gradient-to-r dark:from-slate-900 dark:via-slate-800 to-slate-700 dark:text-white text-center font-sans">
                
                {/* Avatar Section */}
                <div className="relative flex justify-center items-center h-20 mb-2 -mx-2">
                    {/* Bottom Row Avatars */}
                    <div className="flex justify-center relative top-2">
                    <img
                        src={B}
                        alt="Avatar B"
                        className="w-15 h-15 bg-cover rounded-full border-4 border-white shadow-md z-10"
                        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/80x80/F9D4D5/333333?text=B'; }}
                    />
                    <img
                        src={C}
                        alt="Avatar C"
                        className="w-15 h-15 rounded-full border-4 border-white shadow-md -ml-4 z-10"
                        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/80x80/C9E5FF/333333?text=C'; }}
                    />
                    <img
                        src={D}
                        alt="Avatar D"
                        className="w-15 h-15 rounded-full border-4 border-white shadow-md -ml-4"
                        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/80x80/FFF5C1/333333?text=D'; }}
                    />
                    </div>
                </div>

                {/* Text Content Section */}
                <div className="text-gray-800 dark:text-white text-sm font-medium mb-3 ">
                    <div className="flex justify-center items-center gap-1 flex-wrap">
                    <span className="">We are</span>
                    <span className="">together,</span>
                    <span className="bg-blue-500 text-white text-xs shadow-xl font-bold px-2 py-0.5 rounded-md">
                        165K
                    </span>
                    </div>
                    <span className=" text-sm">and more are with us!</span>
                </div>

                {/* Action Button Section */}
                <button onClick={copyText} className="bg-blue-300/40 hover:bg-blue-400 hover:text-white text-blue-600 dark:text-white font-bold py-2 px-2 text-sm rounded-lg shadow-md transition-all duration-300">
                    Invite friends!
                </button>
            </div>
          </div>

        </div>

        {/* CTA Button */}
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ transitionDelay: '1200ms' }}>
          <Link to="/depression-test" className="group inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-blue-100/40 text-blue-800 border border-blue-300/10 dark:bg-gray-800/40 dark:border-gray-700/50 dark:text-white backdrop-blur-md">
            Start Your Journey
            <span className="group-hover:translate-x-1 transition-transform duration-200">
              →
            </span>
          </Link>
        </div>
      </div>


      <style jsx>{`
        @keyframes drawLine {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>

  {/* Chatbot feature section */}
  <div className='flex flex-col w-full md:flex-row justify-center items-center my-50'>
    <div className='bg-purple-50 h-96 w-full md:w-1/2 flex flex-col gap-2 items-center justify-center p-8'>
      <img className='h-100 -mt-30' src={ChatBotPhoneImg} alt="" />
      <h2 className="text-3xl font-bold text-purple-800 text-center">Your AI Companion</h2>
      <p className='font-bold text-gray-500'>Avalable 24/7</p>
    </div>
    <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8 bg-gray-100 dark:bg-gray-900 h-96">
      <p className="text-xl lg:text-2xl text-gray-700 font-semibold p-4 dark:text-gray-300 text-center">Engage in meaningful conversations, get support, and explore your thoughts in a safe space.</p>
      <Link to="/chatbot" className='bg-blue-100 font-semibold dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xl'>
        checkout→
      </Link>
    </div>
  </div>

    <div>
  {/* Testimonials Heading */}
  <h2 className="text-2xl lg:text-3xl mx-8 lg:mx-0 font-bold text-center text-gray-800 dark:text-gray-200 my-12">
    See what people say about us<span className='text-blue-300 font-extrabold p-1'>!</span>
  </h2>

  {/* Container for the cards */}
    <div className='flex flex-wrap gap-6 justify-center items-center mb-30'>
      <TestimonialCard 
        name="Abhishek"
        role="User"
        imageSrc="https://i.pinimg.com/736x/fd/81/18/fd8118ad8ccfdad677aa27a0a5abee57.jpg"
        quote="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, veniam voluptas accusamus pariatur modi nobis nesciunt sequi adipisci voluptatum."
        />
      <TestimonialCard 
        name="Aman"
        role="User"
        imageSrc="https://i.pinimg.com/736x/fd/81/18/fd8118ad8ccfdad677aa27a0a5abee57.jpg"
        quote="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, veniam voluptas accusamus pariatur modi nobis nesciunt sequi adipisci voluptatum."
        />
      <TestimonialCard 
        name="Namish"
        role="User"
        imageSrc="https://i.pinimg.com/736x/fd/81/18/fd8118ad8ccfdad677aa27a0a5abee57.jpg"
        quote="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, veniam voluptas accusamus pariatur modi nobis nesciunt sequi adipisci voluptatum."
        />
    </div>
  </div>

    {/* Contact form */}
    <div>
      <ContactForm/>
    </div>

    {/* Faq */}
    <div>
      <FaqComponent/>
    </div>
    </>

  );
}
