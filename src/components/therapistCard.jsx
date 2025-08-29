import React from 'react';
import profileimg from './../assets/contactform/profileimg1.png';


// You can replace these with actual icon components from a library like lucide-react
const Icon = ({ children, className }) => (
  <div className={`w-6 h-6 ${className}`}>{children}</div>
);

const ChevronLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
  </svg>
);

const Heart = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg>
);

const Star = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.007z" clipRule="evenodd" />
    </svg>
);

const Phone = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-1.49 1.49c-1.824-1.02-3.296-2.492-4.316-4.316l1.49-1.49c.362-.362.527-.833.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z" />
    </svg>
);

const Video = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
    </svg>
);

const Chat = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193l-3.722.537V18h-4.5v-1.405l-3.722-.537A2.25 2.25 0 012.25 15v-4.286c0-.97.616-1.813 1.5-2.097m16.5 0a2.25 2.25 0 00-1.5-2.097l-3.722-.537V4.5h-4.5v1.405l-3.722.537A2.25 2.25 0 006 8.511m16.5 0l-3.722-.537m0 0A2.25 2.25 0 0016.5 6.25h-4.5a2.25 2.25 0 00-2.25 2.25m0 0l-3.722.537m0 0A2.25 2.25 0 002.25 10.5v4.286c0 .97.616 1.813 1.5 2.097l3.722.537m0 0v1.405h4.5v-1.405l3.722-.537m0 0a2.25 2.25 0 001.5-2.097v-4.286c0-.97-.616-1.813-1.5-2.097" />
    </svg>
);

const Clock = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const Users = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-4.67c.12-.241.252-.477.396-.702a.75.75 0 011.21-.224l2.17 2.17a.75.75 0 01.224 1.21c-.225.143-.46.274-.702.396a8.98 8.98 0 00-1.932 2.625zM16.5 18.75h-2.25a.75.75 0 000 1.5h2.25a.75.75 0 000-1.5zM12 12.75a.75.75 0 000-1.5h-2.25a.75.75 0 000 1.5h2.25zM12 15a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75zM12 17.25a.75.75 0 000-1.5h-2.25a.75.75 0 000 1.5h2.25zM12 9a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5A.75.75 0 0112 9z" />
    </svg>
);


const DoctorProfileCard = () => {
  return (
    <div className="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover">
      {/* Card container with reduced width and more rounded corners */}
      <div className="max-w-sm w-full mx-auto rounded-3xl overflow-hidden shadow-2xl">
        {/* Profile Image and Header */}
        <div 
          className="relative h-96 bg-cover bg-center" 
          style={{ backgroundImage: `url(${profileimg})` }}
        >
          {/* Header Icons */}
          <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center text-white">
            <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition">
              <Icon><ChevronLeft /></Icon>
            </button>
            <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition">
              <Icon><Heart /></Icon>
            </button>
          </div>

          {/* Doctor Info */}
          <div className="absolute bottom-24 left-4 text-black dark:text-white">
            <div className="flex items-center space-x-2 bg-black/20 backdrop-blur rounded-full px-3 py-1 w-fit">
              <div className="w-5 h-5 text-yellow-400"><Star /></div>
              <span className="font-semibold">4.6</span>
            </div>
            <h1 className="text-4xl font-bold mt-2  ">Sarah Johnson</h1>
            <p className="text-lg">MBBS, MD</p>
            <p className="text-lg">Medicine Specialist</p>
          </div>
        </div>

        {/* Action Buttons and Stats */}
        <div className="relative -mt-20 p-4">
            {/* Frosted Glass Container with enhanced blur and roundness */}
            <div className="bg-white/50 backdrop-blur-2xl p-4 rounded-3xl shadow-lg">
                {/* Action Buttons */}
                <div className="flex items-center justify-between">
                    <button className="bg-white/80 text-gray-800 font-semibold py-3 px-6 rounded-full flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                        <span>Details</span>
                    </button>
                    <div className="flex space-x-2">
                        <button className="p-3 bg-white/80 rounded-full text-gray-700"><Icon><Phone /></Icon></button>
                        <button className="p-3 bg-white/80 rounded-full text-gray-700"><Icon><Video /></Icon></button>
                        <button className="p-3 bg-white/80 rounded-full text-gray-700"><Icon><Chat /></Icon></button>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/50 my-4"></div>

                {/* Stats */}
                <div className="flex justify-around text-center text-gray-700">
                    <div>
                        <div className="w-6 h-6 mx-auto mb-1 opacity-70"><Clock /></div>
                        <p className="font-bold">8 Years</p>
                        <p className="text-sm">Experience</p>
                    </div>
                    <div>
                        <div className="w-6 h-6 mx-auto mb-1 opacity-70"><Users /></div>
                        <p className="font-bold">3.5k +</p>
                        <p className="text-sm">Patients</p>
                    </div>
                    <div>
                        <div className="w-6 h-6 mx-auto mb-1 text-yellow-500"><Star /></div>
                        <p className="font-bold">2.8k +</p>
                        <p className="text-sm">Reviews</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfileCard;
