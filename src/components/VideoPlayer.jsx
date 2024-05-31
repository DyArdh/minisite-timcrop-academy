// PopUpVideo.js
import React, { useRef, useEffect } from 'react';

const PopUpVideo = ({ isOpen, togglePopUp, videoId }) => {
  const videoRef = useRef(null);

  const handleClickOutside = (event) => {
    if (videoRef.current && !videoRef.current.contains(event.target)) {
      togglePopUp();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [togglePopUp]);

  if (!isOpen) return null;

  return (
    <div className="fixed left-0 top-0 z-[99999999999] flex h-full w-full items-center justify-center bg-gray-800 bg-opacity-50">
      <div ref={videoRef} className="mx-h-lg rounded-lg bg-white" style={{ width: '960px', height: '540px' }}>
        <iframe
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          allowFullScreen></iframe>
      </div>
    </div>
  );
};

export default PopUpVideo;
