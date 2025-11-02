import React from 'react';
import BGImage from "../../assets/bgimage.png"
/**
 * A component to display a "happy students" testimonial section
 * with scattered avatar images.
 */
const HappyStudents = () => {
  return (
    <section className="bg-white ">
      <div className="container mx-auto px-4">
        
        {/* This is the "canvas" for the avatars and testimonial.
          It's a relative container with a fixed height, allowing
          absolute positioning of children inside it.
        */}
        <div className="relative h-96 mb-12">
          
          {/* Testimonial Bubble */}
          {/* Centered using the absolute + translate trick */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-64 sm:w-80">
            <div className="bg-slate-50 rounded-lg shadow-lg p-5">
              <p className="text-gray-600 text-sm italic text-center">
                "Great experience. I was nervous about the SATs but then I found Quizzle"
              </p>
            </div>
          </div>

          {/* Absolutely Positioned Avatars
            Each image is positioned relative to the "canvas" div.
            I've used placeholder images from Unsplash.
          */}
          <img 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" 
            alt="Happy student" 
            className="rounded-full w-12 h-12 absolute top-10 left-1/4 shadow-md" 
          />
          <img 
            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&h=200&fit=crop" 
            alt="Happy student" 
            className="rounded-full w-24 h-24 absolute top-32 left-8 shadow-lg" 
          />
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" 
            alt="Happy student" 
            className="rounded-full w-16 h-16 absolute top-2 left-1/3 shadow-md" 
          />
          <img 
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=160&h=160&fit=crop" 
            alt="Happy student" 
            className="rounded-full w-20 h-20 absolute top-4 right-1/2 shadow-lg" 
          />
          <img 
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=160&h=160&fit=crop" 
            alt="Happy student" 
            className="rounded-full w-20 h-20 absolute top-56 left-1/3 shadow-md" 
          />
          <img 
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&fit=crop" 
            alt="Happy student" 
            className="rounded-full w-24 h-24 absolute top-48 right-16 shadow-lg" 
          />
          <img 
            src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop" 
            alt="Happy student" 
            className="rounded-full w-14 h-14 absolute top-8 right-1/4 shadow-md" 
          />

          <img 
            src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop" 
            alt="Happy student" 
            className="rounded-full bottom-0 w-14 h-14 absolute shadow-md" 
          />
        </div>

        {/* Text Content */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            A lot of happy students
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
            We're happy to see more than a thousand happy students that have used Quizzle to practice before important exams. Are you next?
          </p>
        </div>
      </div>
    </section>
  );
};

export default HappyStudents;