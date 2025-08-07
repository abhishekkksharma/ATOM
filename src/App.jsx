import React from 'react';
import Navbar from './components/Navbar';
import Particles from './components/Particles';

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Welcome to ATOM</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">Your mental health companion. Use the theme toggle in the navbar to switch modes.</p>
        <div className="mt-12 space-y-8 text-gray-800 dark:text-gray-200">
          {Array.from({ length: 15 }).map((_, i) => (
            <div key={i} className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Section {i + 1}</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p>Phasellus vestibulum, quam id laoreet aliquam, mauris nunc scelerisque lectus, sit amet interdum turpis odio vitae quam. Integer eget ex vitae massa commodo consequat. Vivamus in efficitur nisi. Sed non dapibus dolor. Curabitur auctor, magna at fringilla tincidunt, nulla dolor pretium nisl, non tincidunt justo quam vel justo. Nullam ac urna at turpis consequat facilisis.</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
