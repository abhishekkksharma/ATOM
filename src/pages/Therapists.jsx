// import React from 'react';
// import hero from '../assets/therapists/image.png';


// export default function Therapists() {
//   // const therapists = [
//   //   {
//   //     id: 1,
//   //     name: "Dr. Sarah Johnson",
//   //     specialization: "Clinical Psychologist",
//   //     experience: "15+ years",
//   //     rating: 4.9,
//   //     image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec0?w=150&h=150&fit=crop&crop=face",
//   //     availability: "Mon-Fri, 9AM-5PM",
//   //     languages: ["English", "Spanish"]
//   //   },
//   //   {
//   //     id: 2,
//   //     name: "Dr. Michael Chen",
//   //     specialization: "Cognitive Behavioral Therapist",
//   //     experience: "12+ years",
//   //     rating: 4.8,
//   //     image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face",
//   //     availability: "Mon-Sat, 10AM-7PM",
//   //     languages: ["English", "Mandarin"]
//   //   },
//   //   {
//   //     id: 3,
//   //     name: "Dr. Emily Rodriguez",
//   //     specialization: "Marriage & Family Therapist",
//   //     experience: "10+ years",
//   //     rating: 4.7,
//   //     image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=150&h=150&fit=crop&crop=face",
//   //     availability: "Tue-Sat, 11AM-8PM",
//   //     languages: ["English", "Portuguese"]
//   //   },
//   //   {
//   //     id: 4,
//   //     name: "Dr. James Wilson",
//   //     specialization: "Trauma Specialist",
//   //     experience: "18+ years",
//   //     rating: 4.9,
//   //     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
//   //     availability: "Mon-Fri, 8AM-4PM",
//   //     languages: ["English"]
//   //   }
//   // ];

//   return (
//     <>
//     <div className='flex justify-cente p-4 rounded-2xl  items-center flex-col dark:text-white'>
//       {/* <img className='max-w-[200px] sm:w-50 h-auto' src={hero} alt="" /> */}
//       <p className='font-bold text-2xl sm:text-3xl md:text-4xl text-center md:text-left'>
//       Connect with a Therapist near you !</p>    
//     </div>
//     </>
//     //   <div className='h-screen flex justify-center items-center'>
//     //   <h1 className='text-black font-bold text-4xl dark:text-white'>Therapist Page</h1>
//     // </div>

//     // <div className="space-y-8">
//     //   <div className="text-center">
//     //     <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
//     //       Find Your Perfect Therapist
//     //     </h1>
//     //     <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
//     //       Connect with licensed mental health professionals who can help you on your journey to better mental health.
//     //     </p>
//     //   </div>

//     //   <div className="flex flex-col sm:flex-row gap-4 mb-8">
//     //     <input
//     //       type="text"
//     //       placeholder="Search by name, specialization, or location..."
//     //       className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//     //     />
//     //     <select className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
//     //       <option value="">All Specializations</option>
//     //       <option value="clinical">Clinical Psychology</option>
//     //       <option value="cbt">Cognitive Behavioral Therapy</option>
//     //       <option value="family">Family Therapy</option>
//     //       <option value="trauma">Trauma Therapy</option>
//     //     </select>
//     //     <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200">
//     //       Search
//     //     </button>
//     //   </div>

//     //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//     //     {therapists.map((therapist) => (
//     //       <div key={therapist.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-shadow duration-300">
//     //         <div className="p-6">
//     //           <div className="flex items-start space-x-4 mb-4">
//     //             <img
//     //               src={therapist.image}
//     //               alt={therapist.name}
//     //               className="w-16 h-16 rounded-full object-cover"
//     //             />
//     //             <div className="flex-1">
//     //               <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-1">
//     //                 {therapist.name}
//     //               </h3>
//     //               <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
//     //                 {therapist.specialization}
//     //               </p>
//     //               <div className="flex items-center space-x-2">
//     //                 <div className="flex items-center">
//     //                   <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
//     //                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//     //                   </svg>
//     //                   <span className="ml-1 text-sm text-gray-600 dark:text-gray-400">
//     //                     {therapist.rating}
//     //                   </span>
//     //                 </div>
//     //                 <span className="text-sm text-gray-500 dark:text-gray-500">
//     //                   • {therapist.experience}
//     //                 </span>
//     //               </div>
//     //             </div>
//     //           </div>

//     //           <div className="space-y-3 mb-4">
//     //             <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
//     //               <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//     //               </svg>
//     //               {therapist.availability}
//     //             </div>
//     //             <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
//     //               <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
//     //               </svg>
//     //               {therapist.languages.join(", ")}
//     //             </div>
//     //           </div>

//     //           <div className="flex space-x-3">
//     //             <button className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200">
//     //               Book Session
//     //             </button>
//     //             <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
//     //               View Profile
//     //             </button>
//     //           </div>
//     //         </div>
//     //       </div>
//     //     ))}
//     //   </div>

//     //   <div className="text-center mt-12">
//     //     <button className="px-8 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg transition-colors duration-200 border border-gray-300 dark:border-gray-600">
//     //       Load More Therapists
//     //     </button>
//     //   </div>
//     // </div>
//   );
// } 

import React, { useState } from 'react';

// NOTE FOR DARK MODE: 
// This component now supports dark mode. To enable it, add the `dark` class 
// to a parent element, like your `<html>` or `<body>` tag.
// e.g., <html class="dark">

// Data for therapists with updated avatar colors for dark mode
const therapistData = [
    {
        name: 'Dr. Sarah Johnson',
        title: 'Clinical Psychologist',
        rating: 4.9,
        experience: 8,
        initials: 'DSJ',
        avatarColors: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300',
        tags: ['Anxiety', 'Depression', 'Trauma'],
        description: 'Specialized in cognitive behavioral therapy with extensive experience in treating anxiety disorders.',
        location: 'New York, NY',
        price: 120,
        availability: 'Available Today',
        sessions: 2500,
    },
    {
        name: 'Dr. Michael Chen',
        title: 'Licensed Therapist',
        rating: 4.8,
        experience: 12,
        initials: 'DMC',
        avatarColors: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
        tags: ['Relationships', 'Family Therapy', 'LGBTQ+'],
        description: 'Compassionate approach to family dynamics and relationship counseling with multicultural sensitivity.',
        location: 'Los Angeles, CA',
        price: 150,
        availability: 'Next available: Tomorrow',
        sessions: 3200,
    },
    {
        name: 'Dr. Emily Rodriguez',
        title: 'Licensed Clinical Social Worker',
        rating: 4.7,
        experience: 6,
        initials: 'DER',
        avatarColors: 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300',
        tags: ['Addiction', 'Recovery', 'Mental Health'],
        description: 'Evidence-based treatment for substance abuse and dual diagnosis with a focus on holistic recovery.',
        location: 'Chicago, IL',
        price: 110,
        availability: 'Available Today',
        sessions: 1800,
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
                        <svg className="h-5 w-5 text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
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
                    <span>${price}/session</span>
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
                    <span>{sessions.toLocaleString()} sessions completed</span>
                </li>
            </ul>
        </div>
    );
};

// Main Page Component
const TherapistFinderPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [specialization, setSpecialization] = useState('All Specializations');
    
    const displayedTherapists = therapistData;

    return (
        // The parent div inherits the body background color (e.g. bg-slate-50 dark:bg-slate-900)
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            
            <header className="text-center mb-10">
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">Find Your Therapist</h1>
                <p className="mt-2 text-lg text-slate-600 dark:text-slate-300">Connect with licensed mental health professionals</p>
            </header>

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
                        <option>Trauma</option>
                        <option>Relationships</option>
                    </select>
                    
                    <select className="w-full p-3 bg-white dark:bg-slate-700 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
                        <option>All Locations</option>
                        <option>New York, NY</option>
                        <option>Los Angeles, CA</option>
                        <option>Chicago, IL</option>
                    </select>

                    <select className="w-full p-3 bg-white dark:bg-slate-700 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
                        <option>All Prices</option>
                        <option>$50 - $100</option>
                        <option>$100 - $150</option>
                        <option>$150 - $200</option>
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