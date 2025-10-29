// ...existing code...
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider'; // use auth inside component

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
 * LoginSignUpButton Component
 * - If Navbar already passes isLoggedIn/userName/onLoginClick/onLogoutClick, those props are used.
 * - Otherwise the component reads auth state from useAuth() and uses internal handlers.
 */
function LoginSignUpButton({
  isLoggedIn: propIsLoggedIn,
  userName: propUserName,
  onLoginClick: propOnLogin,
  onLogoutClick: propOnLogout
}) {
  const { user, signOut } = useAuth(); // from AuthProvider
  const navigate = useNavigate();

  // If props are provided, respect them; otherwise derive from auth context
  const isLoggedIn = typeof propIsLoggedIn === 'boolean' ? propIsLoggedIn : !!user;
  const userName = propUserName || (user ? (user.user_metadata?.full_name || user.user_metadata?.name || user.email) : '');
  const onLoginClick = propOnLogin || (() => navigate('/auth'));
  const onLogoutClick = propOnLogout || (async () => { await signOut(); navigate('/'); });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside or pressing Escape
  useOutsideClick(dropdownRef, () => {
    if (isDropdownOpen) setIsDropdownOpen(false);
  });

  useEffect(() => {
    // close dropdown when login state changes (e.g., user logs out)
    setIsDropdownOpen(false);
  }, [isLoggedIn]);

  const getInitial = (name) => (name ? name.trim().charAt(0).toUpperCase() : '?');

  // Base button styles (adapted from your provided <Link> styles)
  const baseButtonStyles =
    "hidden md:flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-300/50 dark:border-gray-700/50 h-10 bg-white/60 hover:bg-gray-100/60 dark:bg-black/60 dark:hover:bg-gray-800/60 text-gray-900 dark:text-gray-100";

  if (isLoggedIn && userName) {
    // --- LOGGED IN STATE ---
    return (
      <div className="relative bg-gray-50 p-1 border-[0.3px] border-gray-200 rounded-full" ref={dropdownRef}>
        {/* Avatar Button */}
        <div className='flex items-center gap-1'>
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsDropdownOpen((s) => !s);
          }}
          aria-haspopup="menu"
          aria-expanded={isDropdownOpen}
          className={`${baseButtonStyles} w-10 px-0`}
          title={userName}
          type="button"
        >
          {getInitial(userName)}
        </button>
        <p className='hidden lg:flex text-md font-[Verdana]'>{userName}</p>
        </div>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div
            role="menu"
            aria-label="User menu"
            className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-300/50 dark:border-gray-700/50 rounded-lg shadow-lg py-1 z-10"
          >
            <div className="px-4 py-2 text-sm text-gray-700 dark:text-gray-200">
              Signed in as <br />
              <span className="font-medium block truncate">{userName}</span>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-700"></div>
            <button
              onClick={async (e) => {
                e.preventDefault();
                e.stopPropagation();
                try {
                  await onLogoutClick();
                } finally {
                  setIsDropdownOpen(false);
                }
              }}
              className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              role="menuitem"
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
    <button
      onClick={onLoginClick}
      className={`${baseButtonStyles} px-6 py-2`}
      type="button"
    >
      Login / Sign Up
    </button>
  );
}

export default LoginSignUpButton;
// ...existing code...