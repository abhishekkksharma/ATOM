import React, { useState, useEffect, useCallback } from 'react';
import { createRoot } from 'react-dom/client';
import Comma from '../assets/Comma/image.png'
import ProfilePic from '../assets/ProfilePic.png'
import HappyStudents from '../components/ConnectPage/herosection';
import Hero from '../components/ConnectPage/Hero';
import ShareStoriesPage from '../components/ShareStories';
import { useLocation } from 'react-router-dom';
import ConnectUsingMap from '../components/ConnectPage/ConnectUsingMap.jsx';

export default function Connect() {
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
      <Hero/>
      <ShareStoriesPage/>
      {/* <ConnectUsingMap/> */}
    </div>
</>
  );
} 
