import React from 'react';
import ContactForm from './../components/ContactForm';
import TherapistCard from './../components/therapistCard';
import Face1 from '../assets/homepageIcons/New folder/B.png'
import Face2 from '../assets/homepageIcons/New folder/C.png'
import Face3 from '../assets/homepageIcons/New folder/D.png'

export default function Chatbot() {
  return (
    <div >
      <div className='flex justify-center items-center flex-col p-5 rounded-4xl gap-4 text-black dark:text-white'>
        <div className='flex '>
          <img className='w-20 z-10 -mx-4 h-20 border-4 border-gray-300 rounded-full' src={Face1} alt="" />
          <img className='w-20 z-20 h-20 border-4 border-gray-300 rounded-full' src={Face2} alt="" />
          <img className='w-20 z-10 -mx-4 h-20 border-4 border-gray-200 rounded-full' src={Face3} alt="" />
        </div>
        <div className='flex items-center flex-wrap justify-center'>
          <p className='font-bold lg:text-3xl sm:text-2xl'>
            Get familiar with Atom, What we do?
          </p>
        </div>
      </div>
      <section className="py-12 px-6 bg-gray-50 dark:bg-transparent">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                The Problem We're Solving
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Mental health support is fragmented, expensive, and often stigmatized. People struggle with:
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  Hesitation due to stigma
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  Lack of awareness
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  Finding affordable professionals
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  Social isolation
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Our Solution: Complete Care
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                ATOM transforms fragmented solutions into a complete ecosystem with verified professionals, 
                peer support, and personal wellness tools all in one place.
              </p>
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-lg text-white">
                <p className="font-medium">
                  "Mental health is not a destination, but a process. It's about how you drive, not where you're going."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Different */}
      {/* <section className="py-12 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Why ATOM is Different
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl text-center">
              <Shield className="w-8 h-8 text-blue-500 mx-auto mb-3" />
              <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Holistic Approach</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Complete ecosystem instead of fragmented solutions
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl text-center">
              <Brain className="w-8 h-8 text-purple-500 mx-auto mb-3" />
              <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Science-Backed</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Validated assessments based on research
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Mission */}
      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Our Mission</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            We believe mental health support shouldn't be fragmented, expensive, or stigmatized. 
            ATOM creates a comprehensive ecosystem where individuals can assess their mental health, 
            connect with professionals, find peer support, and access wellness tools—all in one place.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
              Accessible
            </span>
            <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">
              Comprehensive
            </span>
            <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">
              Community-Driven
            </span>
            <span className="bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 px-3 py-1 rounded-full text-sm">
              Evidence-Based
            </span>
          </div>
        </div>
      </section>


      {/* className='h-screen flex justify-center items-center font-bold text-4xl' */}
      {/* <div>
        <div className='font bold text-4xl flex justify-center items-center font-bold'>
      <h1 className='dark:text-white'>About</h1>
        </div>
      </div> */}
      <div>
      <ContactForm/>
      </div>

    </div>
  );
} 