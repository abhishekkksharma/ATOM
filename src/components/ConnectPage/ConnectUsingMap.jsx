import React, { useState, useEffect, useCallback } from 'react';
import { createRoot } from 'react-dom/client';
import ProfilePic from '../../assets/ProfilePic.png'
import { useLocation } from 'react-router-dom';

export default function ConnectUsingMap() {
  const [activeTab, setActiveTab] = useState('community');
  const [searchQuery, setSearchQuery] = useState('');

    const [city, setCity] = useState('');
  const [mapUrl, setMapUrl] = useState('');

  const popularCities = ['Chandigarh', 'Mumbai', 'Goa', 'Paris', 'Sydney'];

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
    updateMap('Chandigarh');
  }, [updateMap]);

  const handleSearch = (e) => {
    e.preventDefault();
    updateMap(city);
  };


  // SVG Icon for the verified badge
const VerifiedIcon = () => (
  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
  </svg>
);

// SVG Icon for the followers/connections
const ConnectionsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
);

// SVG Icon for the saved items/likes
const SavedIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
        <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>
    </svg>
);

// SVG Icon for the plus symbol
const PlusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="ml-1.5">
        <line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
);
const location = useLocation(); // 1. Get the location object

  // 2. Add this useEffect hook
  useEffect(() => {
    // Check if there is a hash in the URL (e.g., #shareStories)
    if (location.hash) {
      // Get the ID from the hash (remove the '#')
      const id = location.hash.substring(1);
      
      // Find the element on the page with that ID
      const element = document.getElementById(id);
      
      // If the element exists, scroll to it smoothly
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]); // 3. Re-run this effect if the location changes



  return (
    <>
    <div className="mb-10 p-4 sm:p-8 font-sans transition-colors duration-300">
      {/* <HappyStudents/> */}
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

<div className='font-bold text-2xl dark:text-white flex justify-center items-center'>
  <p>People around You !</p>
</div>
<div className='bg-gray-50 dark:bg-transparent px-4 py-8 lg:justify-center md:p-8 md:-mx-14 flex gap-8 flex-nowrap overflow-x-auto'>

  {/* Card 1 */}
  <div className="bg-white dark:bg-black dark:border dark:border-gray-600 rounded-3xl shadow-lg w-full max-w-[260px] flex-shrink-0 p-4">
    
    {/* Profile Image */}
    <div className="aspect-square mb-2">
      <img 
        className="w-full h-full object-cover rounded-2xl" 
        src={ProfilePic}
        alt="Rohan Mehra profile picture"
      />
    </div>
    
    {/* User Info */}
    <div className="text-left">
      <div className="flex items-center justify-start gap-2 mb-1">
        <h1 className="text-lg font-bold text-gray-800 dark:text-white">Rohan Mehra</h1>
        <VerifiedIcon />
      </div>
      <div>
      <p className="text-gray-500 text-sm leading-relaxed">
        Software Developer building scalable web applications.
      </p>
      <div className='flex gap-2 justify-center items-center m-2'>
        <p className="bg-blue-100 w-fit font-semibold dark:bg-blue-500 text-blue-800 dark:text-blue-50 px-2 rounded-full text-sm">
          Bengaluru
        </p>
        <p className="bg-green-100 w-fit font-semibold dark:bg-green-500 text-green-800 dark:text-green-50 px-2 rounded-full text-sm">
          Developer
        </p>
        <p className="bg-yellow-100 w-fit font-semibold dark:bg-yellow-500 text-yellow-800 dark:text-yellow-50 px-2 rounded-full text-sm">
          Active
        </p>
      </div>
      </div>
    </div>

    {/* Horizontal Line Separator and Stats/Follow Button */}
    <div className="mt-5">
        <div className="border-t border-gray-100 dark:border-gray-700 my-2"></div>
        <div className="flex items-center justify-between text-gray-600 dark:text-gray-300">
            {/* Stats */}
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                    <ConnectionsIcon />
                    <span className="font-semibold text-sm">450</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <SavedIcon />
                    <span className="font-semibold text-sm">102</span>
                </div>
            </div>

            {/* Follow Button */}
            <button className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors text-gray-800 dark:text-gray-200 font-semibold py-2 px-3 rounded-lg flex items-center text-sm">
                Follow
                <PlusIcon />
            </button>
        </div>
    </div>
  </div>

  {/* Card 2 */}
  <div className="bg-white dark:bg-black dark:border dark:border-gray-600 rounded-3xl shadow-lg w-full max-w-[260px] flex-shrink-0 p-4">
    
    {/* Profile Image */}
    <div className="aspect-square mb-2">
      <img 
        className="w-full h-full object-cover rounded-2xl" 
        src={ProfilePic}
        alt="Priya Singh profile picture"
      />
    </div>
    
    {/* User Info */}
    <div className="text-left">
      <div className="flex items-center justify-start gap-2 mb-1">
        <h1 className="text-lg font-bold text-gray-800 dark:text-white">Priya Singh</h1>
        <VerifiedIcon />
      </div>
      <div>
      <p className="text-gray-500 text-sm leading-relaxed">
        Marketing Manager passionate about brand storytelling.
      </p>
      <div className='flex gap-2 justify-center items-center m-2'>
        <p className="bg-blue-100 w-fit font-semibold dark:bg-blue-500 text-blue-800 dark:text-blue-50 px-2 rounded-full text-sm">
          Mumbai
        </p>
        <p className="bg-green-100 w-fit font-semibold dark:bg-green-500 text-green-800 dark:text-green-50 px-2 rounded-full text-sm">
          Marketing
        </p>
        <p className="bg-yellow-100 w-fit font-semibold dark:bg-yellow-500 text-yellow-800 dark:text-yellow-50 px-2 rounded-full text-sm">
          Online
        </p>
      </div>
      </div>
    </div>

    {/* Horizontal Line Separator and Stats/Follow Button */}
    <div className="mt-5">
        <div className="border-t border-gray-100 dark:border-gray-700 my-2"></div>
        <div className="flex items-center justify-between text-gray-600 dark:text-gray-300">
            {/* Stats */}
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                    <ConnectionsIcon />
                    <span className="font-semibold text-sm">890</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <SavedIcon />
                    <span className="font-semibold text-sm">215</span>
                </div>
            </div>

            {/* Follow Button */}
            <button className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors text-gray-800 dark:text-gray-200 font-semibold py-2 px-3 rounded-lg flex items-center text-sm">
                Follow
                <PlusIcon />
            </button>
        </div>
    </div>
  </div>

  {/* Card 3 */}
  <div className="bg-white dark:bg-black dark:border dark:border-gray-600 rounded-3xl shadow-lg w-full max-w-[260px] flex-shrink-0 p-4">
    
    {/* Profile Image */}
    <div className="aspect-square mb-2">
      <img 
        className="w-full h-full object-cover rounded-2xl" 
        src={ProfilePic}
        alt="Aarav Sharma profile picture"
      />
    </div>
    
    {/* User Info */}
    <div className="text-left">
      <div className="flex items-center justify-start gap-2 mb-1">
        <h1 className="text-lg font-bold text-gray-800 dark:text-white">Aarav Sharma</h1>
        <VerifiedIcon />
      </div>
      <div>
      <p className="text-gray-500 text-sm leading-relaxed">
        A doctor dedicated to providing compassionate patient care.
      </p>
      <div className='flex gap-2 justify-center items-center m-2'>
        <p className="bg-blue-100 w-fit font-semibold dark:bg-blue-500 text-blue-800 dark:text-blue-50 px-2 rounded-full text-sm">
          Delhi
        </p>
        <p className="bg-green-100 w-fit font-semibold dark:bg-green-500 text-green-800 dark:text-green-50 px-2 rounded-full text-sm">
          Doctor
        </p>
        <p className="bg-yellow-100 w-fit font-semibold dark:bg-yellow-500 text-yellow-800 dark:text-yellow-50 px-2 rounded-full text-sm">
          Available
        </p>
      </div>
      </div>
    </div>

    {/* Horizontal Line Separator and Stats/Follow Button */}
    <div className="mt-5">
        <div className="border-t border-gray-100 dark:border-gray-700 my-2"></div>
        <div className="flex items-center justify-between text-gray-600 dark:text-gray-300">
            {/* Stats */}
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                    <ConnectionsIcon />
                    <span className="font-semibold text-sm">1.2k</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <SavedIcon />
                    <span className="font-semibold text-sm">350</span>
                </div>
            </div>

            {/* Follow Button */}
            <button className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors text-gray-800 dark:text-gray-200 font-semibold py-2 px-3 rounded-lg flex items-center text-sm">
                Follow
                <PlusIcon />
            </button>
        </div>
    </div>
  </div>
  
  {/* Card 4 */}
  <div className="bg-white dark:bg-black dark:border dark:border-gray-600 rounded-3xl shadow-lg w-full max-w-[260px] flex-shrink-0 p-4">
    
    {/* Profile Image */}
    <div className="aspect-square mb-2">
      <img 
        className="w-full h-full object-cover rounded-2xl" 
        src={ProfilePic} 
        alt="Anika Gupta profile picture"
      />
    </div>
    
    {/* User Info */}
    <div className="text-left">
      <div className="flex items-center justify-start gap-2 mb-1">
        <h1 className="text-lg font-bold text-gray-800 dark:text-white">Anika Gupta</h1>
        <VerifiedIcon />
      </div>
      <div>
      <p className="text-gray-500 text-sm leading-relaxed">
        Graphic Designer creating visually compelling narratives.
      </p>
      <div className='flex gap-2 justify-center items-center m-2'>
        <p className="bg-blue-100 w-fit font-semibold dark:bg-blue-500 text-blue-800 dark:text-blue-50 px-2 rounded-full text-sm">
          Panchkula
        </p>
        <p className="bg-green-100 w-fit font-semibold dark:bg-green-500 text-green-800 dark:text-green-50 px-2 rounded-full text-sm">
          Designer
        </p>
        <p className="bg-yellow-100 w-fit font-semibold dark:bg-yellow-500 text-yellow-800 dark:text-yellow-50 px-2 rounded-full text-sm">
          Freelance
        </p>
      </div>
      </div>
    </div>

    {/* Horizontal Line Separator and Stats/Follow Button */}
    <div className="mt-5">
        <div className="border-t border-gray-100 dark:border-gray-700 my-2"></div>
        <div className="flex items-center justify-between text-gray-600 dark:text-gray-300">
            {/* Stats */}
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                    <ConnectionsIcon />
                    <span className="font-semibold text-sm">620</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <SavedIcon />
                    <span className="font-semibold text-sm">95</span>
                </div>
            </div>

            {/* Follow Button */}
            <button className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors text-gray-800 dark:text-gray-200 font-semibold py-2 px-3 rounded-lg flex items-center text-sm">
                Follow
                <PlusIcon />
            </button>
        </div>
    </div>
  </div>

</div>

</>
  );
} 
