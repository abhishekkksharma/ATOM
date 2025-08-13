import React, { useState, useEffect } from 'react';

const MentalHealthHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Clinical Psychologist",
      image: "👩‍⚕️",
      tilt: "-rotate-12"
    },
    {
      name: "Michael Torres",
      role: "Therapist", 
      image: "👨‍💼",
      tilt: "rotate-6"
    },
    {
      name: "Dr. Emily Watson",
      role: "Psychiatrist",
      image: "👩‍🔬",
      tilt: "-rotate-6"
    },
    {
      name: "Begin Your Journey",
      role: "Start Today",
      image: "🌱",
      tilt: "rotate-12",
      isSpecial: true
    }
  ];

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`min-h-screen transition-all duration-500 flex items-center justify-center p-4 overflow-hidden relative ${
      isDark 
        ? 'bg-gray-900' 
        : 'bg-gray-50'
    }`}>
      
      {/* Circular Blue Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large central blur */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl opacity-30 ${
          isDark ? 'bg-blue-600' : 'bg-blue-400'
        }`} />
        
        {/* Top right blur */}
        <div className={`absolute -top-20 -right-20 w-80 h-80 rounded-full blur-3xl opacity-20 ${
          isDark ? 'bg-cyan-500' : 'bg-cyan-400'
        }`} />
        
        {/* Bottom left blur */}
        <div className={`absolute -bottom-32 -left-32 w-72 h-72 rounded-full blur-3xl opacity-25 ${
          isDark ? 'bg-blue-700' : 'bg-blue-500'
        }`} />
        
        {/* Additional accent blurs */}
        <div className={`absolute top-20 left-1/4 w-40 h-40 rounded-full blur-2xl opacity-15 ${
          isDark ? 'bg-purple-600' : 'bg-purple-400'
        }`} />
        
        <div className={`absolute bottom-20 right-1/4 w-48 h-48 rounded-full blur-2xl opacity-20 ${
          isDark ? 'bg-indigo-600' : 'bg-indigo-400'
        }`} />
      </div>
      
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className={`fixed top-6 right-6 z-50 p-3 rounded-full transition-all duration-300 shadow-lg hover:scale-110 ${
          isDark 
            ? 'bg-white text-gray-900 hover:bg-gray-100' 
            : 'bg-gray-900 text-white hover:bg-gray-800'
        }`}
      >
        {isDark ? '☀️' : '🌙'}
      </button>

      <div className="max-w-6xl mx-auto text-center relative">
        
        {/* Animated Background Line */}
        <div className="absolute inset-0 pointer-events-none">
          <svg 
            className="w-full h-full opacity-30" 
            viewBox="0 0 800 400" 
            fill="none"
          >
            <path
              d="M0,200 Q200,150 400,200 T800,200"
              stroke={isDark ? "#60A5FA" : "#3B82F6"}
              strokeWidth="3"
              fill="none"
              className={`transition-all duration-3000 ease-out`}
              style={{
                strokeDasharray: isVisible ? '0' : '1000',
                strokeDashoffset: isVisible ? '0' : '1000',
                animation: isVisible ? 'drawLine 2s ease-out forwards' : 'none'
              }}
            />
          </svg>
        </div>

        {/* Header Content */}
        <div className={`mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className={`text-lg mb-4 font-medium transition-all duration-500 ${
            isDark 
              ? 'bg-gradient-to-r from-blue-300 via-cyan-300 to-purple-300 bg-clip-text text-transparent'
              : 'bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent'
          }`}>
            Meet the Caring Professionals
          </p>
          <h1 className={`text-4xl md:text-5xl font-bold leading-tight transition-all duration-500 ${
            isDark 
              ? 'bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent'
              : 'bg-gradient-to-r from-gray-900 via-blue-800 to-gray-800 bg-clip-text text-transparent'
          }`}>
            Your Mental Health
            <span className={`block transition-all duration-500 ${
              isDark 
                ? 'bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent'
                : 'bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent'
            }`}>
              Support Team
            </span>
          </h1>
        </div>

        {/* Team Cards */}
        <div className="relative flex flex-wrap justify-center items-center gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`relative transition-all duration-1000 ease-out ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 -translate-y-20'
              } ${member.tilt} hover:rotate-0 hover:scale-105`}
              style={{
                transitionDelay: `${index * 200 + 400}ms`
              }}
            >
              {/* Card */}
              <div className={`
                rounded-2xl p-6 shadow-xl hover:shadow-2xl 
                transition-all duration-500 backdrop-blur-md
                ${member.isSpecial 
                  ? `border-2 border-dashed ${isDark ? 'border-yellow-400 bg-gray-800/40' : 'border-yellow-500 bg-white/40'}` 
                  : isDark ? 'bg-gray-800/40 border border-gray-700/50' : 'bg-white/40 border border-gray-200/50'
                }
                min-w-[180px]
              `}>
                {/* Avatar */}
                <div className={`w-16 h-16 mx-auto mb-4 text-4xl flex items-center justify-center rounded-full shadow-md transition-colors duration-500 ${
                  isDark ? 'bg-gray-700' : 'bg-gray-50'
                }`}>
                  {member.image}
                </div>
                
                {/* Content */}
                <h3 className={`font-semibold text-lg mb-1 transition-colors duration-500 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {member.name}
                </h3>
                <p className={`text-sm font-medium transition-colors duration-500 ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {member.role}
                </p>
                
                {member.isSpecial && (
                  <div className={`mt-3 text-xs italic transition-colors duration-500 ${
                    isDark ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    Let's Begin!
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ transitionDelay: '1200ms' }}>
          <button className={`group inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 ${
            isDark 
              ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-500 hover:to-cyan-500'
              : 'bg-gradient-to-r from-gray-900 to-gray-700 text-white hover:from-gray-800 hover:to-gray-600'
          }`}>
            Start Your Journey
            <span className="group-hover:translate-x-1 transition-transform duration-200">
              →
            </span>
          </button>
        </div>

        {/* Decorative Elements - Removed */}
        
      </div>

      <style jsx>{`
        @keyframes drawLine {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default MentalHealthHero;