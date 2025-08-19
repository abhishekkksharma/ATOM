import React from 'react';
import hero from '../assets/therapists/image.png';


export default function Therapists() {
  // const therapists = [
  //   {
  //     id: 1,
  //     name: "Dr. Sarah Johnson",
  //     specialization: "Clinical Psychologist",
  //     experience: "15+ years",
  //     rating: 4.9,
  //     image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec0?w=150&h=150&fit=crop&crop=face",
  //     availability: "Mon-Fri, 9AM-5PM",
  //     languages: ["English", "Spanish"]
  //   },
  //   {
  //     id: 2,
  //     name: "Dr. Michael Chen",
  //     specialization: "Cognitive Behavioral Therapist",
  //     experience: "12+ years",
  //     rating: 4.8,
  //     image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face",
  //     availability: "Mon-Sat, 10AM-7PM",
  //     languages: ["English", "Mandarin"]
  //   },
  //   {
  //     id: 3,
  //     name: "Dr. Emily Rodriguez",
  //     specialization: "Marriage & Family Therapist",
  //     experience: "10+ years",
  //     rating: 4.7,
  //     image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=150&h=150&fit=crop&crop=face",
  //     availability: "Tue-Sat, 11AM-8PM",
  //     languages: ["English", "Portuguese"]
  //   },
  //   {
  //     id: 4,
  //     name: "Dr. James Wilson",
  //     specialization: "Trauma Specialist",
  //     experience: "18+ years",
  //     rating: 4.9,
  //     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  //     availability: "Mon-Fri, 8AM-4PM",
  //     languages: ["English"]
  //   }
  // ];

  return (
    <>
    <div className='flex justify-cente p-4 rounded-2xl  items-center flex-col dark:text-white'>
      {/* <img className='max-w-[200px] sm:w-50 h-auto' src={hero} alt="" /> */}
      <p className='font-bold text-2xl sm:text-3xl md:text-4xl text-center md:text-left'>
      Connect with a Therapist near you !</p>    
    </div>
    </>
    //   <div className='h-screen flex justify-center items-center'>
    //   <h1 className='text-black font-bold text-4xl dark:text-white'>Therapist Page</h1>
    // </div>

    // <div className="space-y-8">
    //   <div className="text-center">
    //     <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
    //       Find Your Perfect Therapist
    //     </h1>
    //     <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
    //       Connect with licensed mental health professionals who can help you on your journey to better mental health.
    //     </p>
    //   </div>

    //   <div className="flex flex-col sm:flex-row gap-4 mb-8">
    //     <input
    //       type="text"
    //       placeholder="Search by name, specialization, or location..."
    //       className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    //     />
    //     <select className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
    //       <option value="">All Specializations</option>
    //       <option value="clinical">Clinical Psychology</option>
    //       <option value="cbt">Cognitive Behavioral Therapy</option>
    //       <option value="family">Family Therapy</option>
    //       <option value="trauma">Trauma Therapy</option>
    //     </select>
    //     <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200">
    //       Search
    //     </button>
    //   </div>

    //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    //     {therapists.map((therapist) => (
    //       <div key={therapist.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-shadow duration-300">
    //         <div className="p-6">
    //           <div className="flex items-start space-x-4 mb-4">
    //             <img
    //               src={therapist.image}
    //               alt={therapist.name}
    //               className="w-16 h-16 rounded-full object-cover"
    //             />
    //             <div className="flex-1">
    //               <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-1">
    //                 {therapist.name}
    //               </h3>
    //               <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
    //                 {therapist.specialization}
    //               </p>
    //               <div className="flex items-center space-x-2">
    //                 <div className="flex items-center">
    //                   <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
    //                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    //                   </svg>
    //                   <span className="ml-1 text-sm text-gray-600 dark:text-gray-400">
    //                     {therapist.rating}
    //                   </span>
    //                 </div>
    //                 <span className="text-sm text-gray-500 dark:text-gray-500">
    //                   • {therapist.experience}
    //                 </span>
    //               </div>
    //             </div>
    //           </div>

    //           <div className="space-y-3 mb-4">
    //             <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
    //               <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    //               </svg>
    //               {therapist.availability}
    //             </div>
    //             <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
    //               <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
    //               </svg>
    //               {therapist.languages.join(", ")}
    //             </div>
    //           </div>

    //           <div className="flex space-x-3">
    //             <button className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200">
    //               Book Session
    //             </button>
    //             <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
    //               View Profile
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>

    //   <div className="text-center mt-12">
    //     <button className="px-8 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg transition-colors duration-200 border border-gray-300 dark:border-gray-600">
    //       Load More Therapists
    //     </button>
    //   </div>
    // </div>
  );
} 