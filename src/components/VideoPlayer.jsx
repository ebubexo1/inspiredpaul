import React, { useRef } from 'react';

const VideoPlayer = ({ videoSrc, posterSrc }) => {
  const videoRef = useRef(null);

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.currentTime >= 60) {
      videoRef.current.pause();
      videoRef.current.currentTime = 60;
    }
  };

  return (
    <div className="relative max-w-5xl mx-auto bg-unilag-maroon p-1 rounded-[2.5rem] shadow-2xl overflow-hidden group">
      <div className="relative aspect-video rounded-[2.2rem] overflow-hidden bg-black">
        <video 
          ref={videoRef}
          onTimeUpdate={handleTimeUpdate}
          className="w-full h-full object-cover"
          controls
          poster={posterSrc}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        
        {/* Quality Tag Overlay */}
        <div className="absolute top-6 left-6 pointer-events-none">
          <span className="bg-unilag-gold text-unilag-maroon text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-[0.2em] shadow-lg">
            4K Motion Graphic
          </span>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;