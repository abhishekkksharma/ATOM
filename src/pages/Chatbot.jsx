import React from 'react';

export default function Chatbot() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          AI Mental Health Chatbot
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Get instant support and guidance through our AI-powered mental health chatbot. 
          Available 24/7 to help you through difficult times.
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200/50 dark:border-gray-700/50">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Start a Conversation</h2>
            <p className="text-gray-600 dark:text-gray-400">Your AI companion is ready to listen and help</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
            <p className="text-gray-700 dark:text-gray-300">
              "Hello! I'm here to support you. How are you feeling today?"
            </p>
          </div>
          
          <div className="flex space-x-3">
            <input
              type="text"
              placeholder="Type your message here..."
              className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200">
              Send
            </button>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">24/7 Available</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Get help whenever you need it</p>
          </div>
          
          <div className="text-center p-4">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Confidential</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Your privacy is our priority</p>
          </div>
          
          <div className="text-center p-4">
            <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-8 h-8 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Instant Support</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Quick responses and guidance</p>
          </div>
        </div>
      </div>
    </div>
  );
} 