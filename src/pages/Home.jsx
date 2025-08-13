import React, { useState, useEffect } from 'react';

export default function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    // Main container is now the relative parent for the SVG
    <div className="lg:mt-20 sm:mt-10 bg-transparent transition-all pt-0 duration-500 flex items-center justify-center p-4 overflow-hidden relative">
      
      {/* Animated Background Line - MOVED OUTSIDE of max-w-6xl */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="w-full h-full opacity-30"
          viewBox="0 0 800 400"
          fill="none"
          preserveAspectRatio="none" // Add this attribute
        >
          <path
            d="M0,200 Q200,150 400,200 T800,200"
            strokeWidth="3"
            fill="none"
            className="stroke-blue-600 dark:stroke-blue-400 transition-all duration-3000 ease-out"
            style={{
              strokeDasharray: isVisible ? '0' : '1000',
              strokeDashoffset: isVisible ? '0' : '1000',
              animation: isVisible ? 'drawLine 2s ease-out forwards' : 'none'
            }}
          />
        </svg>
      </div>

      {/* Content container remains constrained and centered */}
      <div className="max-w-6xl mx-auto text-center relative">
        
        {/* Header Content */}
        <div className={`mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className="text-lg mb-4 font-medium text-black dark:text-white ">
            <span className='font-bold text-xl text-blue-800'>A</span>ct, <span className='font-bold text-xl text-blue-800'>T</span>hink, <span className='font-bold text-xl text-blue-800'>O</span>vercome, <span className='font-bold text-xl text-blue-800'>M</span>aintain
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-gray-900 via-blue-800 to-gray-800 bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-violet-600 dark:to-indigo-600 dark:bg-clip-text dark:text-transparent">
            Lets get started with ATOM
            <span className="block bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent dark:from-blue-400 dark:via-cyan-400 dark:to-blue-300">
              
            </span>
          </h1>
        </div>

        {/* Team Cards */}
        <div className="relative flex flex-wrap justify-center items-center gap-8 mb-12">
          
          {/* Card 1 */}
          <div
            className={`relative transition-all duration-1000 ease-out ${ isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20' } -rotate-12 hover:rotate-0 hover:scale-105`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 backdrop-blur-md min-w-[180px] bg-white/40 border border-gray-200/50 dark:bg-gray-800 dark:border-gray-700">
              <div className="w-16 h-16 mx-auto mb-4 text-4xl flex items-center justify-center rounded-full shadow-md transition-colors duration-500 bg-gray-50 dark:bg-gray-700">
                👩‍⚕️
              </div>
              <h3 className="font-semibold text-lg mb-1 transition-colors duration-500 text-gray-900 dark:text-white">
                Dr. Sarah Chen
              </h3>
              <p className="text-sm font-medium transition-colors duration-500 text-gray-600 dark:text-gray-300">
                Clinical Psychologist
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className={`relative transition-all duration-1000 ease-out ${ isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20' } rotate-6 hover:rotate-0 hover:scale-105`}
            style={{ transitionDelay: '600ms' }}
          >
            <div className="rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 backdrop-blur-md min-w-[180px] bg-white/40 border border-gray-200/50 dark:bg-gray-800 dark:border-gray-700">
              <div className="w-16 h-16 mx-auto mb-4 text-4xl flex items-center justify-center rounded-full shadow-md transition-colors duration-500 bg-gray-50 dark:bg-gray-700">
                👨‍💼
              </div>
              <h3 className="font-semibold text-lg mb-1 transition-colors duration-500 text-gray-900 dark:text-white">
                Michael Torres
              </h3>
              <p className="text-sm font-medium transition-colors duration-500 text-gray-600 dark:text-gray-300">
                Therapist
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className={`relative transition-all duration-1000 ease-out ${ isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20' } -rotate-6 hover:rotate-0 hover:scale-105`}
            style={{ transitionDelay: '800ms' }}
          >
            <div className="rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 backdrop-blur-md min-w-[180px] bg-white/40 border border-gray-200/50 dark:bg-gray-800 dark:border-gray-700">
              <div className="w-16 h-16 mx-auto mb-4 text-4xl flex items-center justify-center rounded-full shadow-md transition-colors duration-500 bg-gray-50 dark:bg-gray-700">
                👩‍🔬
              </div>
              <h3 className="font-semibold text-lg mb-1 transition-colors duration-500 text-gray-900 dark:text-white">
                Dr. Emily Watson
              </h3>
              <p className="text-sm font-medium transition-colors duration-500 text-gray-600 dark:text-gray-300">
                Psychiatrist
              </p>
            </div>
          </div>

          {/* Card 4 (Special) */}
          <div
            className={`relative transition-all duration-1000 ease-out ${ isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20' } rotate-12 hover:rotate-0 hover:scale-105`}
            style={{ transitionDelay: '1000ms' }}
          >
            <div className="rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 backdrop-blur-md min-w-[180px] border-2 border-dashed border-yellow-500 bg-white/40 dark:border-yellow-400 dark:bg-gray-800">
              <div className="w-16 h-16 mx-auto mb-4 text-4xl flex items-center justify-center rounded-full shadow-md transition-colors duration-500 bg-gray-50 dark:bg-gray-700">
                🌱
              </div>
              <h3 className="font-semibold text-lg mb-1 transition-colors duration-500 text-gray-900 dark:text-white">
                Begin Your Journey
              </h3>
              <p className="text-sm font-medium transition-colors duration-500 text-gray-600 dark:text-gray-300">
                Start Today
              </p>
              <div className="mt-3 text-xs italic transition-colors duration-500 text-gray-500 dark:text-gray-400">
                Let's Begin!
              </div>
            </div>
          </div>

        </div>

        {/* CTA Button */}
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ transitionDelay: '1200ms' }}>
          <button className="group inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-blue-100/40 text-blue-800 border border-blue-300/10 dark:bg-gray-800/40 dark:border-gray-700/50 dark:text-white backdrop-blur-md">
            Start Your Journey
            <span className="group-hover:translate-x-1 transition-transform duration-200">
              →
            </span>
          </button>
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
  );
}