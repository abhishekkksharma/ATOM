import React, { useState } from 'react';

const Card = ({ 
  id,
  name = "Unknown User",
  bio = "No bio available",
  avatar = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  tags = [],
  connections = 0,
  likes = 0,
  verified = false,
  onConnect
}) => {
  const [isConnected, setIsConnected] = useState(false);

  const handleConnect = () => {
    setIsConnected(!isConnected);
    onConnect?.(id, !isConnected);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-700 max-w-sm mx-auto">
      {/* Profile Image */}
      <div className="flex justify-center mb-6">
        <div className="relative">
          <img
            src={avatar}
            alt={name}
            className="w-24 h-24 rounded-3xl object-cover"
          />
          {verified && (
            <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-green-500 rounded-full flex items-center justify-center border-2 border-white">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          )}
        </div>
      </div>

      {/* User Info */}
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-2 mb-2">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {name}
          </h3>
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
          {bio}
        </p>
      </div>

      {/* Filter Tags */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 justify-center mb-6">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Stats */}
      <div className="flex items-center justify-center gap-8 mb-6">
        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
          </svg>
          <span className="font-medium">{connections}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
          </svg>
          <span className="font-medium">{likes}</span>
        </div>
      </div>

      {/* Connect Button */}
      <button
        onClick={handleConnect}
        className={`w-full py-3 px-6 rounded-2xl font-semibold text-sm transition-all duration-300 ${
          isConnected
            ? 'bg-green-500 hover:bg-green-600 text-white'
            : 'bg-gray-900 hover:bg-gray-800 text-white dark:bg-gray-700 dark:hover:bg-gray-600'
        }`}
      >
        {isConnected ? 'Connected' : 'Connect +'}
      </button>
    </div>
  );
};

export default Card;