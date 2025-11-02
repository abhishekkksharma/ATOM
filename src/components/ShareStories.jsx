// src/pages/ShareStoriesPage.js
import React, { useState, useEffect } from 'react';
import { supabase } from '../../src/lib/supabaseClient'; // Import your client
import TestimonialCard from '../components/cardsss.jsx';

// --- Add Story Form Component (Now part of the page) ---
const AddStoryForm = ({ user, onStoryAdded, onClose }) => {
  const [name, setName] = useState(''); // <-- Kept 'name'
  // const [role, setRole] = useState(''); // <-- Removed 'role'
  const [story, setStory] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const maxChars = 200;
  const charsRemaining = maxChars - story.length;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError('You must be logged in to post a story.');
      return;
    }

    if (!name || !story) { // <-- Check for name and story
      setError('Please fill in all fields.');
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(null);

    // Get username from user object (e.g., email or full_name)
    // Use the display_name we fetched from the profiles table
    // --- LOGIC CHANGE: Added fallback to 'Anonymous' ---
    const submitUsername = user.display_name || 'Anonymous'; 

    const { data, error: insertError } = await supabase
      .from('stories')
      .insert([
        { 
          name: name, // <-- from form
          story: story, // <-- from form
          username: submitUsername // <-- from auth profile full_name, email, or fallback
        }
      ]) 
      .select()

    setLoading(false);

    if (insertError) {
      setError('Sorry, we couldn\'t post your story. Please try again.');
      console.error(insertError);
    } else {
      setSuccess('Your story has been shared! Thank you.');
      setName('');
      // setRole(''); // <-- Removed
      setStory('');
      
      if (onStoryAdded) {
        onStoryAdded(data[0]);
      }
      
      // Close the modal after a short delay
      setTimeout(() => {
        onClose();
      }, 1500); 
    }
  };

  return (
    // --- STYLING CHANGE HERE ---
    <div className="w-full md:w-150 lg:w-200 p-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg rounded-2xl border border-white/20 dark:border-gray-700">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Share Your Story</h2>
        <button 
          onClick={onClose} 
          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
        >
          {/* Close Icon */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        
        {/* --- NAME FIELD --- */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            placeholder="What should we call you?"
            required
          />
        </div>
        
        {/* --- ROLE FIELD REMOVED --- */}

        {/* --- STORY FIELD --- */}
        <div className="mb-4">
          <label htmlFor="story" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Story</label>
          <textarea
            id="story"
            value={story}
            onChange={(e) => setStory(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md h-32 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            placeholder="Share your experience..."
            maxLength={maxChars}
            required
          />
          <p className={`text-sm mt-1 ${charsRemaining < 0 ? 'text-red-500' : 'text-gray-500'}`}>
            {charsRemaining} characters remaining
          </p>
        </div>
        
        <button
          type="submit"
          disabled={loading}
          className="w-full px-4 py-3 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 disabled:bg-gray-400"
        >
          {loading ? 'Sharing...' : 'Share My Story'}
        </button>
        
        {error && <p className="mt-4 text-sm text-center text-red-500">{error}</p>}
        {success && <p className="mt-4 text-sm text-center text-green-500">{success}</p>}
      </form>
    </div>
  );
};


// --- Main Page Component ---
const ShareStoriesPage = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true); // <-- Start with loading true
  const [isModalOpen, setIsModalOpen] =useState(false);
  const [user, setUser] = useState(null); 

  useEffect(() => {
    // --- CACHING LOGIC ---
    const CACHE_DURATION_MS = 5 * 60 * 1000; // 5 minutes cache

    // --- Function to fetch profile and combine with auth user ---
    const getFullUserData = async (authUser) => {
      if (!authUser) return null;

      let { data: profileData, error } = await supabase
        .from('profiles') // Fetch from profiles table
        .select('full_name')
        .eq('id', authUser.id) // Match user ID
        .single();

      if (error && error.code !== 'PGRST116') { // PGERST116: no rows found, which is fine
        console.error("Error fetching profile:", error.message);
      }

      // Return a combined user object
      return {
        ...authUser,
        // Use profile full_name, or fallback to email, or fallback to 'Anonymous'
        display_name: profileData?.full_name || authUser.email || 'Anonymous'
      };
    };
    
    // --- MODIFIED fetchStories with Caching ---
    const fetchStories = async () => {
      const now = new Date().getTime();
      let hasSetDataFromCache = false;

      // 1. Try to load from cache
      try {
        const cached = localStorage.getItem('cachedStories');
        if (cached) {
          const { timestamp, data } = JSON.parse(cached);
          if (now - timestamp < CACHE_DURATION_MS) {
            setStories(data);
            setLoading(false); // We have data, stop loading screen
            hasSetDataFromCache = true;
          }
        }
      } catch (e) {
        console.error("Failed to parse story cache", e);
        localStorage.removeItem('cachedStories');
      }

      // 2. Fetch from Supabase (always)
      const { data, error } = await supabase
        .from('stories')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching stories:', error);
        if (!hasSetDataFromCache) setLoading(false); // Stop loading on error if cache didn't load
      } else {
        // 3. Update state and cache
        setStories(data);
        localStorage.setItem('cachedStories', JSON.stringify({ timestamp: now, data }));
        if (!hasSetDataFromCache) setLoading(false); // Stop loading now
      }
    };
    
    // --- MODIFIED checkUser with Caching ---
    const checkUser = async () => {
      const now = new Date().getTime();
      
      // 1. Try to load from cache
      try {
        const cached = localStorage.getItem('cachedUser');
        if (cached) {
          const { timestamp, user } = JSON.parse(cached);
          if (now - timestamp < CACHE_DURATION_MS && user) {
            setUser(user);
          }
        }
      } catch (e) {
        console.error("Failed to parse user cache", e);
        localStorage.removeItem('cachedUser');
      }

      // 2. Fetch from Supabase
      const { data: { session } } = await supabase.auth.getSession();
      const authUser = session?.user ?? null;
      const fullUser = await getFullUserData(authUser); // Get profile
      
      // 3. Update state and cache
      setUser(fullUser);
      if (fullUser) {
        localStorage.setItem('cachedUser', JSON.stringify({ timestamp: now, user: fullUser }));
      } else {
        localStorage.removeItem('cachedUser'); // Logged out, clear cache
      }
    };

    // --- Run user check and story fetch in parallel ---
    Promise.all([
        checkUser(),
        fetchStories()
    ]);

    // Set up auth listener to update user and cache
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        const now = new Date().getTime();
        const authUser = session?.user ?? null;
        const fullUser = await getFullUserData(authUser); // Get profile on change
        setUser(fullUser);
        
        if (fullUser) {
          localStorage.setItem('cachedUser', JSON.stringify({ timestamp: now, user: fullUser }));
        } else {
          localStorage.removeItem('cachedUser');
        }
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  // --- MODIFIED handleStoryAdded to update cache ---
  const handleStoryAdded = (newStory) => {
    const now = new Date().getTime();
    
    // Update state
    setStories(currentStories => {
      const updatedStories = [newStory, ...currentStories];
      
      // Update cache
      try {
        localStorage.setItem('cachedStories', JSON.stringify({ timestamp: now, data: updatedStories }));
      } catch (e) {
        console.error("Failed to update story cache", e);
      }
      
      return updatedStories;
    });
  };

  return (
    <div className="min-h-screen p-8">
      <div className="container mx-auto">
        
        {/* --- Add Story Button --- */}
        <div className="flex flex-col items-end mb-8">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-3 font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-all disabled:bg-gray-400 disabled:cursor-not-allowed"
            disabled={!user} // <-- Disable button if not logged in
          >
            + Add Your Story
          </button>
          {!user && (
            <p className="text-sm text-gray-500 dark:text-gray-400 text-right mt-2">
              Please log in to add your story.
            </p>
          )}
        </div>

        {/* --- Stories Grid --- */}
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">What Others Are Saying</h2>
        
        {loading ? (
          <p className="text-center text-gray-700 dark:text-gray-300">Loading stories...</p>
        ) : (
          <div className="flex flex-wrap justify-center gap-8">
            {stories.map((story) => (
              <TestimonialCard
                key={story.id}
                name={story.name} // <-- This is from the form input
                quote={story.story}
                role={story.username || 'User'} // <-- This is the auth full_name (or email)
              />
            ))}
          </div>
        )}

      </div>

      {/* --- Modal --- */}
      {isModalOpen && user && ( // <-- Only open modal if user is logged in
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop --- STYLING CHANGE HERE --- */}
          <div 
            className="fixed inset-0 bg-black/60 transition-opacity"
            onClick={() => setIsModalOpen(false)}
            aria-hidden="true"
          ></div>

          {/* Modal Content */}
          <div className="relative z-10">
            <AddStoryForm 
              user={user} 
              onStoryAdded={handleStoryAdded}
              onClose={() => setIsModalOpen(false)} 
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ShareStoriesPage;

