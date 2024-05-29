'use client'
import React from 'react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    '/first_cleaning.webp',
    '/Second_Cleaning.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="bg-white">
      <div className="container max-w-7xl mx-auto px-4 py-10 md:py-20 flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 lg:w-1/3 max-w-md mb-8 md:mb-0">
          <h2 className="text-gray-800 text-xl font-semibold mb-2">HIGHLY PROFESSIONAL CLEANING</h2>
          <h1 className="text-3xl md:text-4xl font-bold text-yellow-600 mb-4">Unleash the power of Cleanliness</h1>
          <p className="text-gray-700 mb-8">
            Say goodbye to dirt and grime with our comprehensive cleaning packages. From routine maintenance to deep cleaning missions, our team of cleaning superheroes ensures your space shines like never before. With Clean and Clear, victory over mess is guaranteed!
          </p>
          <div className="text-center">
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-2/3">
          <div className="relative w-full h-64 md:h-96 lg:h-[500px]">
            <Image 
              src={images[currentImageIndex]} 
              alt="Cleaning Image" 
              layout="fill" 
              objectFit="cover" 
              className="rounded-lg shadow-lg" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;