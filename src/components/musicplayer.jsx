import React, { useState, useRef, useEffect } from 'react';

// SVG Icons
const PlayIcon = () => (
  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
  </svg>
);

const PauseIcon = () => (
  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
  </svg>
);

const SkipBackIcon = () => (
  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
    <path d="M8.445 14.832A1 1 0 0010 14v-2.798l5.445 3.63A1 1 0 0017 14V6a1 1 0 00-1.555-.832L10 8.798V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z" />
  </svg>
);

const SkipForwardIcon = () => (
  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
    <path d="M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798l-5.445-3.63z" />
  </svg>
);

const ShareIcon = () => (
  <svg className="w-5 h-5 text-white/80 hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
  </svg>
);

const HeartIcon = ({ filled = false }) => (
  <svg className={`w-5 h-5 ${filled ? 'text-red-500' : 'text-white/80 hover:text-red-400'} transition-colors`} fill={filled ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

// Custom Progress Bar Component
const ProgressBar = ({ value, max, onChange, className }) => {
  const percentage = max > 0 ? (value / max) * 100 : 0;
  
  return (
    <div className={`relative ${className}`}>
      <input
        type="range"
        min="0"
        max={max}
        value={value}
        onChange={onChange}
        className="w-full h-1 bg-white/20 rounded-full appearance-none cursor-pointer slider"
        style={{
          background: `linear-gradient(to right, #ffffff ${percentage}%, rgba(255,255,255,0.2) ${percentage}%)`
        }}
      />
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #ffffff;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 6px rgba(0,0,0,0.3);
        }
        .slider::-moz-range-thumb {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #ffffff;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 6px rgba(0,0,0,0.3);
        }
      `}</style>
    </div>
  );
};

// Main Music Player Component
const MusicPlayer = ({ 
  songSrc, 
  songName = "Unknown Song", 
  artistName = "Unknown Artist", 
  albumArtUrl = "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop&crop=center"
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const audioPlayer = useRef();
  const animationRef = useRef();

  useEffect(() => {
    if (songSrc && audioPlayer.current) {
      const audio = audioPlayer.current;
      
      const setAudioData = () => {
        const seconds = Math.floor(audio.duration);
        setDuration(seconds);
      };
      
      const updateTime = () => {
        setCurrentTime(Math.floor(audio.currentTime));
      };

      audio.addEventListener('loadedmetadata', setAudioData);
      audio.addEventListener('timeupdate', updateTime);
      audio.addEventListener('ended', () => setIsPlaying(false));
      
      // Reset state for new song
      setIsPlaying(false);
      setCurrentTime(0);
      
      return () => {
        audio.removeEventListener('loadedmetadata', setAudioData);
        audio.removeEventListener('timeupdate', updateTime);
        audio.removeEventListener('ended', () => setIsPlaying(false));
      };
    }
  }, [songSrc]);

  const formatTime = (seconds) => {
    if (!seconds || isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const togglePlayPause = () => {
    if (!songSrc || !audioPlayer.current) return;
    
    if (isPlaying) {
      audioPlayer.current.pause();
    } else {
      audioPlayer.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleProgressChange = (e) => {
    const newTime = parseInt(e.target.value);
    if (audioPlayer.current) {
      audioPlayer.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const skipBackward = () => {
    if (audioPlayer.current) {
      audioPlayer.current.currentTime = Math.max(0, audioPlayer.current.currentTime - 10);
    }
  };

  const skipForward = () => {
    if (audioPlayer.current) {
      audioPlayer.current.currentTime = Math.min(duration, audioPlayer.current.currentTime + 10);
    }
  };

  return (
    <div className="w-80 h-80 rounded-3xl relative overflow-hidden shadow-2xl">
      <audio ref={audioPlayer} src={songSrc} preload="metadata" />
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${albumArtUrl})` }}
      />
      
      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]">
        <div className="p-6 h-full flex flex-col justify-between">
          
          {/* Header */}
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-3 bg-gray-200/20 pl-2 pr-3 rounded-full">
              <img 
                src={albumArtUrl} 
                alt={artistName} 
                className="w-12 h-12 rounded-full object-cover border-2 border-white/20"
              />
              <div className="flex-1 min-w-0">
                <h2 className="font-semibold text-white text-lg truncate">{artistName}</h2>
                <p className="text-white/80 text-sm truncate">@{artistName.toLowerCase().replace(' ', '')}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => navigator.share && navigator.share({ title: songName, text: `Listening to ${songName} by ${artistName}` })}
                className="focus:outline-none transition-transform hover:scale-110"
              >
                <ShareIcon />
              </button>
              <button 
                onClick={() => setIsLiked(!isLiked)}
                className="focus:outline-none transition-transform hover:scale-110"
              >
                <HeartIcon filled={isLiked} />
              </button>
            </div>
          </div>

          {/* Song Title (if different from artist) */}
          {songName !== artistName && (
            <div className="text-center">
              <h3 className="text-white font-medium text-lg truncate">{songName}</h3>
            </div>
          )}

          {/* Bottom Controls */}
          <div className="space-y-4">
            {/* Progress Bar */}
            <div className="space-y-2">
              <ProgressBar
                value={currentTime}
                max={duration}
                onChange={handleProgressChange}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-white/80 font-mono">
                <span>{formatTime(currentTime)}</span>
                <span>{duration ? `+${formatTime(duration - currentTime)}` : "+0:00"}</span>
              </div>
            </div>

            {/* Control Buttons */}
            <div className="flex items-center justify-center space-x-8">
              <button 
                onClick={skipBackward}
                className="p-2 rounded-full hover:bg-white/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                <SkipBackIcon />
              </button>
              
              <button 
                onClick={togglePlayPause}
                className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/30 backdrop-blur-sm"
                disabled={!songSrc}
              >
                {isPlaying ? <PauseIcon /> : <PlayIcon />}
              </button>
              
              <button 
                onClick={skipForward}
                className="p-2 rounded-full hover:bg-white/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                <SkipForwardIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;