import React, { useState } from 'react';
import MusicPlayer from './../components/musicplayer';
import Nature from '../assets/MusicPlayer/songs/Nature.mp3';
import Freq528Hz from '../assets/MusicPlayer/songs/528Hz.mp3'
import albumArt1 from '../assets/MusicPlayer/albumcovers/songcovernature.png';
import albumArt2 from '../assets/MusicPlayer/albumcovers/songcover2.png';
import albumArt3 from '../assets/MusicPlayer/albumcovers/songcover3.png';
import BreatheIn from  '../assets/Yourzone/BreathIn.png'
import Hold from  '../assets/Yourzone/hold.png'
import out from  '../assets/Yourzone/breathout.png'
import RepeatIcon from  '../assets/Yourzone/Repeaticon.png'


export default function YourZone() {
  const [activeTab, setActiveTab] = useState('overview');
  


  return (
    <>
    <div className='text-black dark:text-white flex flex-col justify-center items-center mb-10'>
      <div className='mb-2'>
        <p className='px-3 py-1 text-black dark:text-gray-100 bg-gray-300/30 rounded-2xl font-semibold'>Explore music</p>
      </div>
      <div className="flex justify-center items-center">
        <h1 className="font-bold text-2xl text-center sm:text-left bg-gradient-to-r from-[#150195] via-[#471396] to-[#B13BFF] bg-clip-text text-transparent">Deep Dive into Music that calms down !</h1>
      </div>
    </div>
    
    <div className='flex gap-6 flex-wrap justify-center items-center mb-10'>
      {/* <h1 className='dark:text-white'>Your zone</h1> */}
      <MusicPlayer 
      songSrc={Nature}
      songName="Nature calling"
      artistName="Mediatation" 
      albumArtUrl={albumArt3}
      />
      <MusicPlayer 
      songSrc={Freq528Hz}
      songName="Freq 528Hz"
      artistName="Instrumental" 
      albumArtUrl={albumArt3}
      />
      <MusicPlayer 
      songSrc={Nature}
      songName="My Song"
      artistName="Relaxing" 
      albumArtUrl={albumArt3}
      />
    </div>

    <div className='text-black dark:text-white flex flex-col justify-center items-center mt-40'>
      <div className='mb-2'>
        <p className='px-3 py-1 text-black dark:text-gray-100 bg-gray-300/30 rounded-2xl font-semibold'>Breathing Techniques</p>
      </div>
      <div className="flex justify-center items-center">
        <h1 className="font-bold text-2xl text-center sm:text-left text-black dark:text-white">Best Practices to quickly calm down</h1>
      </div>
      <div className='flex flex-wrap gap-6 justify-center items-center py-10'>
        {/* step1 */}
        <div className='bg-black/10 dark:bg-white/10 rounded-4xl h-auto justify-center items-center text-black dark:text-white p-4'>
          <div className='flex justify-center items-center'>
              <img className='rounded-3xl w-60 h-auto' src={BreatheIn} alt="" />
          </div>
          <div className='flex justify-center items-center mt-5 flex-wrap flex-col'>
            <p className='font-semibold text-gray-400'>Step 1</p>
            <p className='font-bold text-md'>Breathe in for 4 seconds</p>
          </div>
        </div>

        {/* step 2 */}
        <div className='bg-black/10 dark:bg-white/10 rounded-4xl h-auto justify-center items-center text-black dark:text-white p-4'>
          <div className='flex justify-center items-center'>
              <img className='rounded-3xl w-60 h-auto' src={Hold} alt="" />
          </div>
          <div className='flex justify-center items-center mt-5 flex-wrap flex-col'>
            <p className='font-semibold text-gray-400'>Step 2</p>
            <p className='font-bold text-md'>Hold the Breath for 7 seconds</p>
          </div>
        </div>

        {/* step 3 */}
        <div className='bg-black/10 dark:bg-white/10 rounded-4xl h-auto justify-center items-center text-black dark:text-white p-4'>
          <div className='flex justify-center items-center'>
              <img className='rounded-3xl w-60 h-auto' src={out} alt="" />
          </div>
          <div className='flex justify-center items-center mt-5 flex-wrap flex-col'>
            <p className='font-semibold text-gray-400'>Step 3</p>
            <p className='font-bold text-md'>Breathe out for 8 seconds</p>
          </div>
        </div>
      </div>

      <div className='flex gap-2 opacity-80 justify-center items-center'>
        <img className='w-8 h-auto dark:invert ' src={RepeatIcon} alt="" />
        <h1 className='font-bold text-2xl'>Repeat</h1>
      </div>
      
    </div>

    </>
  );
} 