import React from 'react';

export default function Home() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Welcome to ATOM</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">Your mental health companion. Use the theme toggle in the navbar to switch modes.</p>
      </div>
      
      <div className="space-y-8 text-gray-800 dark:text-gray-200">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Section {i + 1}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        ))}
      </div>
    </div>
  );
} 