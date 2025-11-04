import React from 'react'
import AtomBotImg from "../../assets/homepageIcons/atombot.png"
import Person from "../../assets/homepageIcons/person.png"
import Conversation from "../../assets/homepageIcons/Conversation.png"
import { Link } from 'react-router-dom';


function DepressionTestSample() {
  return (
    <>
    {/* <div className='bg-gray-0 h-auto w-fit p-2 m-8 rounded-4xl justify-center items-center'>
        <div className='flex bg-gray-50 rounded-4xl w-fit p-4 justify-center items-center'>
        <img className='h-30 w-auto rounded-2xl' src={AtomBotImg} alt="" />
        <img className='h-15 w-auto rounded-full ' src={Conversation} alt="" />
        <img className='h-30 w-auto rounded-2xl' src={Person} alt="" />
        </div>
    </div> */}

    <div className="flex justify-center items-center flex-col mb-40 space-y-6 text-center">
      <div className="relative group">
        <div className="absolute inset-0 rounded-full blur-xl bg-gradient-to-r from-blue-200 via-pink-200 to-purple-200 opacity-90 transition-all duration-500 group-hover:opacity-90 group-hover:blur-2xl"></div>
        <img
          className="h-60 w-60 object-cover rounded-full relative z-10 border-4 border-none shadow- transition-transform duration-500 ease-in-out group-hover:scale-105"
          src={AtomBotImg}
          alt="Atom Bot"
        />
      </div>

      <div className="flex flex-col items-center justify-center space-y-2">
        <p className="font-bold text-3xl text-gray-900 tracking-tight">
          Let Your Thoughts Flow Freely
        </p>
        <p className="font-medium text-lg text-gray-500">
          Start a kind and mindful conversation 🌿
        </p>
      </div>
     <Link to="/chatbot" className="group inline-flex items-center gap-2 px-6 py-2 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-blue-100/40 text-blue-800 border border-blue-300/10 dark:bg-gray-800/40 dark:border-gray-700/50 dark:text-white backdrop-blur-md">
            Start a Conversation
            <span className="group-hover:translate-x-1 transition-transform duration-200">
              →
            </span>
      </Link>

    </div>
    </>
  )
}

export default DepressionTestSample