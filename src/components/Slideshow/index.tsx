"use client"; // This line marks the component as a client component

import React, { useState, useEffect } from 'react';
import './styles.css'; // Import CSS for styling

const PhotoSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const photos = [
    '/images/slideshow/education.png',
    '/images/slideshow/healthcare.png',
    '/images/slideshow/software.png',
    '/images/slideshow/agri.png'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 5000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [photos.length]); // Dependency array

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + photos.length) % photos.length
    );
  };

  return (
    <section id="slideshow" className="py-16">
      <div className="container relative">
        <div className="slideshow-container">
          <img
            src={photos[currentIndex]}
            alt={`Slideshow photo ${currentIndex + 1}`}
            className="w-full h-auto object-cover rounded-lg"
          />
          <button onClick={handlePrevious} className="slide-control left">
            &#10094;
          </button>
          <button onClick={handleNext} className="slide-control right">
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
};

export default PhotoSlideshow;
