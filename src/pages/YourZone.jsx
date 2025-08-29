import React, { useState } from 'react';
import MusicPlayer from './../components/musicplayer';
import Nature from '../assets/MusicPlayer/songs/Nature.mp3';
import Freq528Hz from '../assets/MusicPlayer/songs/528Hz.mp3'
import albumArt1 from '../assets/MusicPlayer/albumcovers/songcovernature.png';
import albumArt2 from '../assets/MusicPlayer/albumcovers/songcover2.png';
import albumArt3 from '../assets/MusicPlayer/albumcovers/songcover3.png';


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
    <div className='flex gap-6 flex-wrap justify-center items-center'>
      {/* <h1 className='dark:text-white'>Your zone</h1> */}
      <MusicPlayer 
      songSrc={Nature}
      songName="Nature calling"
      artistName="Mediatation" 
      albumArtUrl={albumArt1}
      />
      <MusicPlayer 
      songSrc={Freq528Hz}
      songName="Freq 528Hz"
      artistName="Instrumental" 
      albumArtUrl={albumArt2}
      />
      <MusicPlayer 
      songSrc={Nature}
      songName="My Song"
      artistName="Relaxing" 
      albumArtUrl={albumArt3}
      />
    </div>
    </>
  );
} 