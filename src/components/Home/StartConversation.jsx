import React from 'react'
import AtomBotImg from "../../assets/homepageIcons/atombot.png"
import { Link } from 'react-router-dom'

function StartConversation() {
  return (
    <>
      <div className="flex justify-center items-center flex-col mb-40 space-y-6 text-center">
        <div className="relative group">
          <div className="absolute inset-0 rounded-full blur-xl bg-gradient-to-r 
              from-blue-200 via-pink-200 to-purple-200 
              dark:from-blue-900 dark:via-purple-900 dark:to-indigo-800 
              opacity-90 transition-all duration-500 
              group-hover:opacity-95 group-hover:blur-2xl">
          </div>

          <img
            className="h-60 w-60 object-cover rounded-full relative z-10 border-4 
              border-transparent transition-transform duration-500 ease-in-out 
              group-hover:scale-105 dark:shadow-[0_0_25px_rgba(100,100,255,0.4)]"
            src={AtomBotImg}
            alt="Atom Bot"
          />
        </div>

        <div className="flex flex-col items-center justify-center space-y-2">
          <p className="font-bold text-3xl text-gray-900 dark:text-gray-100 tracking-tight">
            Let Your Thoughts Flow Freely
          </p>
          <p className="font-medium text-lg text-gray-500 dark:text-gray-400">
            Start a kind and mindful conversation 🌿
          </p>
        </div>

        <Link
          to="/chatbot"
          className="group inline-flex items-center gap-2 px-6 py-2 rounded-full 
            font-semibold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 
            hover:scale-105 bg-blue-100/60 text-blue-800 border border-blue-300/30 
            dark:bg-gradient-to-r dark:from-indigo-700/30 dark:to-purple-700/30 
            dark:text-white dark:border-gray-700/50 dark:hover:shadow-[0_0_20px_rgba(120,120,255,0.4)] 
            backdrop-blur-md"
        >
          Start a Conversation
          <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
        </Link>
      </div>
    </>
  )
}

export default StartConversation
