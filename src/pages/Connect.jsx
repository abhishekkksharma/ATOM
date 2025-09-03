import React, { useState, useEffect, useCallback } from 'react';
import { createRoot } from 'react-dom/client';
import Comma from '../assets/Comma/image.png'

export default function Connect() {
  const [activeTab, setActiveTab] = useState('community');
  const [searchQuery, setSearchQuery] = useState('');

    const [city, setCity] = useState('');
  const [mapUrl, setMapUrl] = useState('');

  const popularCities = ['Chandigargh', 'Mumbai', 'Goa', 'Paris', 'Sydney'];

  // Update the map URL based on the city
  const updateMap = useCallback((cityName) => {
    if (cityName) {
      const encodedCity = encodeURIComponent(cityName);
      const url = `https://maps.google.com/maps?q=${encodedCity}&z=10&output=embed`;
      setMapUrl(url);
    }
  }, []);

  useEffect(() => {
    // Set a default city on initial load
    updateMap('Chandigargh');
  }, [updateMap]);

  const handleSearch = (e) => {
    e.preventDefault();
    updateMap(city);
  };


  return (
    <>
    <div className="min-h-screen p-4 sm:p-8 font-sans transition-colors duration-300">
      <div className="container mx-auto max-w-7xl rounded-3xl bg-white dark:bg-gray-900/50 backdrop-blur-sm shadow-2xl p-6 sm:p-10">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 dark:text-white">
            Explore People Around You
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Find and connect with people in any city.
          </p>
        </div>
      
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Left Section: Search and Popular Cities */}
          <div className="w-full lg:w-1/3 flex flex-col gap-8">
            
            {/* Search Form */}
            <form onSubmit={handleSearch} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Enter a city name..."
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full px-5 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all duration-300"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Search
              </button>
            </form>
      
            {/* Popular Cities Section */}
            <div>
              <h2 className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-4">Popular Cities</h2>
              <div className="flex flex-wrap gap-3">
                {popularCities.map((cityName) => (
                  <button
                    key={cityName}
                    onClick={() => updateMap(cityName)}
                    className="px-4 py-2 rounded-full bg-blue-100/60 dark:bg-gray-800 text-blue-800 dark:text-gray-200 hover:bg-blue-200/60 dark:hover:bg-gray-700 transition-colors duration-200 text-sm font-medium"
                  >
                    {cityName}
                  </button>
                ))}
              </div>
            </div>
          </div>
              
          {/* Right Section: Google Map */}
          <div className="w-full lg:w-2/3 h-[300px] lg:h-auto rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
            {mapUrl ? (
              <iframe
                title="Google Map"
                src={mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-50 dark:bg-gray-800/50 text-gray-500 dark:text-gray-400">
                <p>Map will be displayed here...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>

</>
  );
} 
// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(<App />);