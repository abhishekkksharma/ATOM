import React, { useState } from 'react';
import { icons } from './icons';
import NavLink from './NavLink';
import MobileNavLink from './MobileNavLink';
import ThemeToggle from './ThemeToggle';


export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Chatbot', icon: 'MessageSquare', href: '#' },
    { name: 'Therapists', icon: 'Users', href: '#' },
    { name: 'Depression Test', icon: 'ClipboardCheck', href: '#' },
    { name: 'Your Zone', icon: 'User', href: '#' },
    { name: 'Connect', icon: 'Link', href: '#' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-b from-white/70 to-transparent dark:from-black/70 dark:to-transparent backdrop-blur-lg/2">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <img 
                src="src/assets/logo2.png" 
                alt="ATOM Logo" 
                className="h-15 bg-transparent dark:invert" 
              />
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <NavLink key={link.name} {...link} />
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button className="hidden md:flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-300/50 dark:border-gray-700/50 h-10 px-6 py-2 bg-white/60 hover:bg-gray-100/60 dark:bg-black/60 dark:hover:bg-gray-800/60 text-gray-900 dark:text-gray-100">
              Login / Sign Up
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden inline-flex items-center justify-center rounded-full p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100/60 dark:hover:bg-gray-800/60 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? <icons.X className="text-gray-900 dark:text-gray-100" /> : <icons.Menu />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-black border-t border-gray-200/50 dark:border-gray-800/50">
          <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
            {navLinks.map((link) => (
              <MobileNavLink key={link.name} {...link} />
            ))}
          </div>
          <div className="border-t border-gray-200/50 dark:border-gray-800/50 px-4 py-3">
             <button className="w-full flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-300/50 h-10 px-4 py-2 bg-white/60 hover:bg-gray-100/60 dark:bg-black/60 dark:hover:bg-gray-800/60 text-gray-900 dark:text-gray-100">
              Login / Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
}