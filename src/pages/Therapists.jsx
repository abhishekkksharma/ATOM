import React, { useState } from 'react';
import TherapistsHeroSection from '../components/TherapistsHeroSection';

// NOTE FOR DARK MODE: 
// This component now supports dark mode. To enable it, add the `dark` class 
// to a parent element, like your `<html>` or `<body>` tag.
// e.g., <html class="dark">

// Data for therapists localized for India
const therapistData = [
    {
        name: 'Dr. Priya Sharma',
        title: 'Clinical Psychologist',
        rating: 4.9,
        experience: 10,
        initials: 'DPS',
        avatarColors: 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300',
        tags: ['Anxiety', 'Depression', 'Stress Management'],
        description: 'Specialized in cognitive behavioral therapy with extensive experience in treating mood and anxiety disorders.',
        location: 'Mumbai, MH',
        price: 2500,
        availability: 'Available Today',
        sessions: 3100,
    },
    {
        name: 'Dr. Arjun Kumar',
        title: 'Licensed Therapist',
        rating: 4.8,
        experience: 12,
        initials: 'DAK',
        avatarColors: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300',
        tags: ['Relationships', 'Family Therapy', 'Couples Counseling'],
        description: 'A compassionate approach to family dynamics and relationship counseling with multicultural sensitivity.',
        location: 'Delhi, DL',
        price: 3000,
        availability: 'Next available: Tomorrow',
        sessions: 4500,
    },
    {
        name: 'Dr. Ananya Reddy',
        title: 'Licensed Clinical Social Worker',
        rating: 4.7,
        experience: 8,
        initials: 'DAR',
        avatarColors: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300',
        tags: ['Addiction', 'Recovery', 'Mental Wellness'],
        description: 'Evidence-based treatment for substance abuse and dual diagnosis with a focus on holistic recovery.',
        location: 'Bengaluru, KA',
        price: 2200,
        availability: 'Available Today',
        sessions: 2800,
    },
];

// Reusable TherapistCard component
const TherapistCard = ({ therapist }) => {
    const { 
        name, title, rating, experience, initials, avatarColors, 
        tags, description, location, price, availability, sessions 
    } = therapist;

    const DetailIcon = ({ children }) => (
        <div className="h-5 w-5 text-slate-400 dark:text-slate-500">{children}</div>
    );

    return (
        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-md p-6 flex flex-col space-y-4 transition hover:shadow-lg hover:-translate-y-1">
            {/* Card Header */}
            <div className="flex items-center space-x-4">
                <div 
                    className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold ${avatarColors}`}
                >
                    {initials}
                </div>
                <div className="flex-1">
                    <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">{name}</h2>
                    <p className="text-slate-500 dark:text-slate-400">{title}</p>
                    <div className="flex items-center space-x-2 mt-1 text-sm">
                        <svg className="h-5 w-5 text-yellow-500" xmlns="http://www.w.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="font-semibold text-slate-700 dark:text-slate-200">{rating}</span>
                        <span className="text-slate-400 dark:text-slate-500">•</span>
                        <span className="text-slate-500 dark:text-slate-400">{experience} years</span>
                    </div>
                </div>
            </div>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                    <span key={index} className="bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-200 px-3 py-1 rounded-full text-sm font-medium">
                        {tag}
                    </span>
                ))}
            </div>

            {/* Description */}
            <p className="text-slate-600 dark:text-slate-300 text-sm">{description}</p>
            
            {/* Details List */}
            <ul className="space-y-3 text-sm border-t border-slate-200 dark:border-slate-700 pt-4">
                <li className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                    <DetailIcon>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.1.4-.223.654-.369.254-.145.532-.31.82-.492l.012-.007.004-.002.001-.001a.75.75 0 00.704-1.249l-2.21-3.682a.75.75 0 00-1.248-.001l-2.211 3.684a.75.75 0 00.705 1.248l.001.001.004.002.012.007a12.02 12.02 0 00.82.492c.288.182.566.347.82.492.254.146.468.269.654.369a5.745 5.745 0 00.28.14l.019.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clipRule="evenodd" /><path d="M10 2a.75.75 0 01.75.75v.518c.968.125 1.88.412 2.712.832a.75.75 0 01-.522 1.394c-.76-.386-1.6-.65-2.44-.76V5.5a.75.75 0 01-1.5 0v-.606c-.84.11-1.68.374-2.44.76a.75.75 0 01-.522-1.394c.832-.42 1.744-.707 2.712-.832V2.75A.75.75 0 0110 2z" /></svg>
                    </DetailIcon>
                    <span>{location}</span>
                </li>
                <li className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                    <DetailIcon>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M10 8a2 2 0 100-4 2 2 0 000 4z" /><path fillRule="evenodd" d="M2.5 10a.75.75 0 000 1.5h15a.75.75 0 000-1.5h-15z" clipRule="evenodd" /></svg>
                    </DetailIcon>
                    <span>₹{price.toLocaleString('en-IN')}/session</span>
                </li>
                <li className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                    <DetailIcon>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z" clipRule="evenodd" /></svg>
                    </DetailIcon>
                    <span>{availability}</span>
                </li>
                 <li className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                    <DetailIcon>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M7 8a3 3 0 100-6 3 3 0 000 6zM14.5 9a.75.75 0 01.75.75v2.5a.75.75 0 01-1.5 0v-2.5a.75.75 0 01.75-.75zM10 8a.75.75 0 01.75.75v2.5a.75.75 0 01-1.5 0v-2.5A.75.75 0 0110 8zM7 9.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5zM4.376 12.19c-.395.23-.624.67-.624 1.122V15.5a.75.75 0 00.75.75h11.25a.75.75 0 00.75-.75v-2.188c0-.452-.23-.892-.624-1.122l-1.61-2.414a.75.75 0 00-1.202-.01l-1.41 2.114a.75.75 0 01-1.112 0L8.25 9.764a.75.75 0 00-1.202.01L5.986 12.19z" /></svg>
                    </DetailIcon>
                    <span>{sessions.toLocaleString('en-IN')} sessions completed</span>
                </li>
            </ul>
        </div>
    );
};

// Main Page Component
const TherapistFinderPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [specialization, setSpecialization] = useState('All Specializations');
    
    // In a real app, you would filter this data based on state
    const displayedTherapists = therapistData;

    return (
        // The parent div inherits the body background color (e.g. bg-slate-50 dark:bg-slate-900)
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div>
                <TherapistsHeroSection/>
            </div>

            
            {/* <header className="text-center mb-10">
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">Find Your Therapist</h1>
                <p className="mt-2 text-lg text-slate-600 dark:text-slate-300">Connect with licensed mental health professionals in India</p>
            </header> */}

            <div className="space-y-6">
                <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                        <svg className="h-5 w-5 text-slate-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <input 
                        type="text" 
                        placeholder="Search by name or specialization..." 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-11 pr-4 py-3 bg-white dark:bg-slate-700 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                    <select 
                        value={specialization}
                        onChange={(e) => setSpecialization(e.target.value)}
                        className="w-full p-3 bg-white dark:bg-slate-700 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        <option>All Specializations</option>
                        <option>Anxiety</option>
                        <option>Depression</option>
                        <option>Stress Management</option>
                        <option>Relationships</option>
                    </select>
                    
                    <select className="w-full p-3 bg-white dark:bg-slate-700 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
                        <option>All Locations</option>
                        <option>Mumbai, MH</option>
                        <option>Delhi, DL</option>
                        <option>Bengaluru, KA</option>
                    </select>

                    <select className="w-full p-3 bg-white dark:bg-slate-700 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
                        <option>All Prices</option>
                        <option>₹1500 - ₹2500</option>
                        <option>₹2500 - ₹3500</option>
                        <option>₹3500+</option>
                    </select>

                    <button className="flex items-center justify-center gap-2 w-full p-3 bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-600 rounded-lg shadow-sm hover:bg-slate-100 dark:hover:bg-slate-600 transition duration-150 ease-in-out">
                        <svg className="h-5 w-5 text-slate-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.572a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
                        </svg>
                        <span className="font-medium">Clear Filters</span>
                    </button>
                </div>
            </div>

            <div className="mt-10 mb-6">
                <p className="text-slate-600 dark:text-slate-400">Showing {displayedTherapists.length} of {therapistData.length} therapists</p>
            </div>

            <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayedTherapists.map((therapist) => (
                    <TherapistCard key={therapist.name} therapist={therapist} />
                ))}
            </main>
        </div>
    );
};

export default TherapistFinderPage;