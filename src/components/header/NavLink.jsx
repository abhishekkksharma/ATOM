import React from 'react';
import { Link } from 'react-router-dom';
import { icons } from './icons';

export default function NavLink({ name, icon, href, isActive }) {
  const IconComponent = icons[icon];

  return (
    <Link
      to={href}
      className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
        isActive
          ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
          : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100/60 dark:hover:bg-gray-800/60'
      }`}
    >
      {IconComponent && <IconComponent className="w-4 h-4" />}
      <span>{name}</span>
    </Link>
  );
}
