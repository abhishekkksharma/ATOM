import React, { useState } from 'react';
import MusicPlayer from './../components/musicplayer';
import mySong from '../assets/MusicPlayer/song.mp3';
import albumArt from '../assets/songcover.png';


export default function YourZone() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className='flex gap-4 flex-wrap justify-center items-center'>
      {/* <h1 className='dark:text-white'>Your zone</h1> */}
      <MusicPlayer 
      songSrc={mySong}
      songName="My Song"
      artistName="Weeknd" 
      albumArtUrl={albumArt}
      />
      <MusicPlayer 
      songSrc={mySong}
      songName="My Song"
      artistName="Namish" 
      albumArtUrl={albumArt}
      />
    </div>
  );
} 