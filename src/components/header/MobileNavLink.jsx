import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider';
import { icons } from './icons';

/**
 * Custom hook: Detects clicks outside of a referenced element
 */
const useOutsideClick = (ref, callback) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    const handleEsc = (e) => {
      if (e.key === 'Escape') callback();
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEsc);
    };
  }, [ref, callback]);
};

/**
 * MobileLoginSection Component
 * Shows login button or user profile in mobile nav
 */
function MobileLoginSection({ onNavigate }) {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const isLoggedIn = !!user;
  const userName = user ? (user.user_metadata?.full_name || user.user_metadata?.name || user.email) : '';

  // Close dropdown when clicking outside or pressing Escape
  useOutsideClick(dropdownRef, () => {
    if (isDropdownOpen) setIsDropdownOpen(false);
  });

  useEffect(() => {
    setIsDropdownOpen(false);
  }, [isLoggedIn]);

  const getInitial = (name) => (name ? name.trim().charAt(0).toUpperCase() : '?');

  const handleLogout = async () => {
    try {
      await signOut();
      navigate('/');
      if (onNavigate) onNavigate(); // Close mobile menu
    } finally {
      setIsDropdownOpen(false);
    }
  };

  const handleLoginClick = () => {
    navigate('/auth');
    if (onNavigate) onNavigate(); // Close mobile menu
  };

  if (isLoggedIn && userName) {
    // --- LOGGED IN STATE ---
    return (
      <div className="px-3 py-2" ref={dropdownRef}>
        {/* User Profile Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsDropdownOpen((s) => !s);
          }}
          className="flex items-center space-x-3 w-full px-3 py-2 rounded-lg text-base font-medium transition-colors duration-200 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100/60 dark:hover:bg-gray-800/60"
          type="button"
        >
          {/* Avatar Circle */}
          <div className="w-8 h-8 rounded-full bg-blue-600 dark:bg-blue-500 text-white flex items-center justify-center font-semibold text-sm">
            {getInitial(userName)}
          </div>
          <span className="flex-1 text-left truncate">{userName}</span>
          {/* Chevron Icon */}
          <svg
            className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="mt-2 ml-3 bg-white dark:bg-gray-800 border border-gray-300/50 dark:border-gray-700/50 rounded-lg shadow-lg overflow-hidden">
            <div className="px-4 py-3 text-sm text-gray-700 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700">
              <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Signed in as</div>
              <div className="font-medium truncate">{userName}</div>
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleLogout();
              }}
              className="w-full text-left px-4 py-3 text-base text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              type="button"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    );
  }

  // --- LOGGED OUT STATE ---
  return (
    <div className="px-3 py-2">
      <button
        onClick={handleLoginClick}
        className="flex items-center justify-center w-full px-3 py-2 rounded-lg text-base font-medium transition-colors duration-200 bg-blue-600 hover:bg-blue-700 text-white"
        type="button"
      >
        Login / Sign Up
      </button>
    </div>
  );
}

/**
 * MobileNavLink Component (unchanged)
 */
export default function MobileNavLink({ name, icon, href, isActive }) {
  const IconComponent = icons[icon];

  return (
    <Link
      to={href}
      className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-base font-medium transition-colors duration-200 ${
        isActive
          ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
          : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100/60 dark:hover:bg-gray-800/60'
      }`}
    >
      {IconComponent && <IconComponent className="w-5 h-5" />}
      <span>{name}</span>
    </Link>
  );
}

// Export the MobileLoginSection for use in your mobile menu
export { MobileLoginSection };