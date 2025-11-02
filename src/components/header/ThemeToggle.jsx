import React, { useState, useEffect, useRef } from 'react';
import { icons } from './icons';
import ThemeMenuItem from './ThemeMenuItem';


export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme');
    }
    return 'light';
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const root = window.document.documentElement;
    const isDark =
      theme === 'dark' ||
      (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    root.classList.toggle('dark', isDark);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300/50 dark:border-gray-700/50 bg-white/60 hover:bg-gray-100/60 dark:bg-black/60 dark:hover:bg-gray-800/60"
      >
        <span className="dark:hidden"><icons.Sun /></span>
        <span className="hidden dark:inline text-white"><icons.Moon /></span>
        <span className="sr-only">Toggle theme</span>
      </button>

      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-32 origin-top-right rounded-xl bg-white dark:bg-black shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-1 dark:ring-gray-700 focus:outline-none">
          <div className="py-1">
            <ThemeMenuItem icon="Sun" label="Light" onClick={() => handleThemeChange('light')} />
            <ThemeMenuItem icon="Moon" label="Dark" onClick={() => handleThemeChange('dark')} />
            <ThemeMenuItem icon="Laptop" label="System" onClick={() => handleThemeChange('system')} />
          </div>
        </div>
      )}
    </div>
  );
}
