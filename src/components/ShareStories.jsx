// src/pages/ShareStoriesPage.js
import React, { useState, useEffect } from 'react';
import { supabase } from '../../src/lib/supabaseClient';
import TestimonialCard from '../components/cardsss.jsx';

// --- Add Story Form Component (No Changes) ---
const AddStoryForm = ({ user, onStoryAdded, onClose }) => {
  const [name, setName] = useState('');
  const [story, setStory] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const maxChars = 400;
  const charsRemaining = maxChars - story.length;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError('You must be logged in to post a story.');
      return;
    }

    if (!name || !story) {
      setError('Please fill in all fields.');
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(null);

    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      setError('Your session expired. Please log in again.');
      setLoading(false);
      return;
    }

    const submitUsername = user.display_name || 'Anonymous';

    const { data, error: insertError } = await supabase
      .from('stories')
      .insert([
        {
          user_id: user.id,      // add this line 👈
          name: name,
          story: story,
          username: submitUsername
        }
      ])
      .select();

    setLoading(false);

    if (insertError) {
      console.error(insertError);
      setError('Sorry, we couldn\'t post your story. Please try again.');
    } else {
      setSuccess('Your story has been shared! Thank you.');
      setName('');
      setStory('');
      
      if (onStoryAdded) onStoryAdded(data[0]);

      setTimeout(() => {
        onClose();
      }, 1500);
    }
  };

  return (
    <div className="w-full md:w-150 lg:w-200 p-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg rounded-2xl border border-white/20 dark:border-gray-700">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Share Your Story</h2>
        <button 
          onClick={onClose} 
          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        {/* ...form content... */}
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
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState(null);
  // --- NEW ---
  // State to hold the story that the user clicks on
  const [selectedStory, setSelectedStory] = useState(null);
  // -----------

  // Fetch profile info (display name)
  const getFullUserData = async (authUser) => {
    if (!authUser) return null;

    let { data: profileData, error } = await supabase
      .from('profiles')
      .select('full_name')
      .eq('id', authUser.id)
      .single();

    if (error && error.code !== 'PGRST116') {
      console.error("Error fetching profile:", error.message);
    }

    return {
      ...authUser,
      display_name: profileData?.full_name || authUser.email || 'Anonymous'
    };
  };

  // Fetch stories (with caching)
  const fetchStories = async () => {
    const CACHE_DURATION_MS = 5 * 60 * 1000;
    const now = new Date().getTime();
    let hasSetFromCache = false;

    try {
      const cached = localStorage.getItem('cachedStories');
      if (cached) {
        const { timestamp, data } = JSON.parse(cached);
        if (now - timestamp < CACHE_DURATION_MS) {
          setStories(data);
          hasSetFromCache = true;
          setLoading(false);
        }
      }
    } catch (e) {
      console.error("Failed to parse story cache", e);
      localStorage.removeItem('cachedStories');
    }

    const { data, error } = await supabase
      .from('stories')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching stories:', error);
      if (!hasSetFromCache) setLoading(false);
    } else {
      setStories(data);
      localStorage.setItem('cachedStories', JSON.stringify({ timestamp: now, data }));
      if (!hasSetFromCache) setLoading(false);
    }
  };

  // Check logged in user
  const checkUser = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    const authUser = session?.user ?? null;
    const fullUser = await getFullUserData(authUser);
    setUser(fullUser);
  };

  useEffect(() => {
    Promise.all([
      checkUser(),
      fetchStories()
    ]);

    // Supabase auth listener (for login/logout)
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        const authUser = session?.user ?? null;
        const fullUser = await getFullUserData(authUser);
        setUser(fullUser);
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  // Add new story to cache + UI
  const handleStoryAdded = (newStory) => {
    const now = new Date().getTime();
    setStories(currentStories => {
      const updated = [newStory, ...currentStories];
      localStorage.setItem('cachedStories', JSON.stringify({ timestamp: now, data: updated }));
      return updated;
    });
  };

  return (
    <div className="min-h-screen p-8">
      <div className="container mx-auto">
        <div className="flex flex-col items-end mb-8">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-3 font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-all disabled:bg-gray-400 disabled:cursor-not-allowed"
            disabled={!user}
          >
            + Add Your Story
          </button>
          {!user && (
            <p className="text-sm text-gray-500 dark:text-gray-400 text-right mt-2">
              Please log in to add your story.
            </p>
          )}
        </div>

        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
          What Others Are Saying
        </h2>

        {loading ? (
          <p className="text-center text-gray-700 dark:text-gray-300">Loading stories...</p>
        ) : (
          <div className="flex flex-wrap justify-center gap-8">
            {/* --- MODIFIED --- */}
            {/* We wrap the card in a clickable div */}
            {stories.map((story) => (
              <div
                key={story.id} // The key moves to the outermost element in the map
                onClick={() => setSelectedStory(story)} // Set the selected story on click
                className="cursor-pointer transition-transform duration-200 hover:scale-105" // Add click/hover feedback
              >
              <TestimonialCard
                name={story.name}
                quote={story.story}
                role={story.username || 'User'}
              />
              </div>
            ))}
            {/* --- END MODIFICATION --- */}
          </div>
        )}
      </div>

      {/* 'Add Story' Modal (No Changes) */}
      {isModalOpen && user && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="fixed inset-0 bg-black/60 transition-opacity"
            onClick={() => setIsModalOpen(false)}
            aria-hidden="true"
          ></div>

          <div className="relative z-10">
            <AddStoryForm 
              user={user} 
              onStoryAdded={handleStoryAdded}
              onClose={() => setIsModalOpen(false)} 
            />
          </div>
        </div>
      )}

      {/* --- NEW: View Story Modal --- */}
      {/* This modal appears when 'selectedStory' is not null */}
      {selectedStory && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          aria-labelledby="story-modal-title"
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/60 transition-opacity"
            onClick={() => setSelectedStory(null)} // Close modal on backdrop click
            aria-hidden="true"
          ></div>

          {/* Modal Content */}
          <div className="relative z-10 w-full max-w-md p-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg rounded-2xl border border-white/20 dark:border-gray-700">
            <div className="flex justify-between items-start mb-4">
              <h3 id="story-modal-title" className="text-2xl font-semibold text-gray-900 dark:text-white">
                {selectedStory.name}'s Story
              </h3>
              <button 
                onClick={() => setSelectedStory(null)} // Close modal on 'X' click
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Scrollable Story Content */}
            <div className="max-h-[60vh] overflow-y-auto pr-2">
              <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                {selectedStory.story}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 italic">
                - {selectedStory.username || 'User'}
              </p>
            </div>
          </div>
    _     </div>
      )}
      {/* --- END NEW MODAL --- */}
    </div>
  );
};

export default ShareStoriesPage;