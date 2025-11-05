import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { icons } from './icons';
import NavLink from './NavLink';
import MobileNavLink, { MobileLoginSection } from './MobileNavLink';
import ThemeToggle from './ThemeToggle';
import logo from '../../assets/logo2.png';
import LoginSignUpButton from '../LoginSignUpButton';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);
  const buttonRef = useRef(null);

  const navLinks = [
    { name: 'Home', icon: 'Home', href: '/' },
    { name: 'Chatbot', icon: 'MessageSquare', href: '/chatbot' },
    { name: 'Therapists', icon: 'Users', href: '/therapists' },
    { name: 'Depression Test', icon: 'ClipboardCheck', href: '/depression-test' },
    { name: 'Your Zone', icon: 'User', href: '/your-zone' },
    { name: 'Connect', icon: 'Link', href: '/connect' },
    { name: 'About', icon: 'Link', href: '/about' },
  ];

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // ✅ Fixed outside click listener (uses requestAnimationFrame)
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    let cleanup;
    const frame = requestAnimationFrame(() => {
      const handleOutsideClick = (e) => {
        if (
          navRef.current?.contains(e.target) ||
          buttonRef.current?.contains(e.target)
        )
          return;
        setIsMobileMenuOpen(false);
      };

      const handleInteraction = () => setIsMobileMenuOpen(false);

      document.addEventListener('mousedown', handleOutsideClick);
      document.addEventListener('touchstart', handleOutsideClick);
      document.addEventListener('scroll', handleInteraction, true);

      cleanup = () => {
        document.removeEventListener('mousedown', handleOutsideClick);
        document.removeEventListener('touchstart', handleOutsideClick);
        document.removeEventListener('scroll', handleInteraction, true);
      };
    });

    return () => {
      cancelAnimationFrame(frame);
      if (cleanup) cleanup();
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-b from-white/70 to-transparent dark:from-black/70 dark:to-transparent backdrop-blur-lg/2">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src={logo} 
                alt="ATOM Logo" 
                className="h-15 bg-transparent dark:invert" 
              />
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <NavLink key={link.name} {...link} isActive={location.pathname === link.href} />
            ))}
          </nav>

          {/* Theme + Auth + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <LoginSignUpButton />
            
            {/* Mobile Menu Toggle Button */}
            <button
              ref={buttonRef}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="md:hidden inline-flex items-center justify-center rounded-full p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100/60 dark:hover:bg-gray-800/60 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Toggle menu</span>
              {isMobileMenuOpen ? (
                <icons.X className="text-gray-900 dark:text-gray-100" />
              ) : (
                <icons.Menu />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Section */}
      {isMobileMenuOpen && (
        <div
          ref={navRef}
          className="md:hidden bg-white dark:bg-black border-t border-gray-200/50 dark:border-gray-800/50 transition-all duration-300 ease-in-out animate-slideDown"
        >
          <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
            {navLinks.map((link) => (
              <MobileNavLink
                key={link.name}
                {...link}
                isActive={location.pathname === link.href}
              />
            ))}
          </div>

          <div className="border-t border-gray-200/50 dark:border-gray-800/50 py-3">
            <MobileLoginSection onNavigate={closeMobileMenu} />
          </div>
        </div>
      )}
    </header>
  );
}
