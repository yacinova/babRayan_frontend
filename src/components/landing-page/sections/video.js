import React, { useRef, useEffect } from 'react';
import Vd from '../../../assets/videos/video.mp4';
import './sections.css';

export default function VideoComponent() {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Check if the video is allowed to play
          if (videoElement.paused && videoElement.readyState >= 2) {
            videoElement.currentTime = 4; // Start at 2 seconds
            videoElement.play().catch((error) => {
              console.log('Autoplay failed: ', error);
              // Handle the error if needed
            });
          }
        } else {
          if (!videoElement.paused) {
            videoElement.pause();
            videoElement.currentTime = 4; // Reset to 2 seconds when paused
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, []);

  return (
    <section className="w-100 video_section">
      <div className="row w-100 d-flex align-items-center justify-content-center">
        <div className="col-8">
          <video ref={videoRef} src={Vd} loop muted autoPlay={true} />

        </div>

      </div>
    </section>
  );
}
