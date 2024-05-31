import React from 'react';
import Image from 'next/image';

const AboutUsSection = () => {
  const images = [
    '/aboutus/bathroom_cleaning.webp',
    '/aboutus/cleaning.png',
    '/aboutus/home-cleaning-service-vacuuming.webp',
    '/aboutus/tools.jpg'
  ];

  return (
    <section className="bg-white py-20" id="about">
      <div className="container max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-start">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h2 className="text-yellow-600 text-sm font-bold mb-4">ABOUT US</h2>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Complete Clean: Your All-in-One Solution for Comprehensive Cleaning Services</h1>
          <p className="text-gray-600 mb-6">
            An all-in-one cleaning service offered by a cleaning company provides comprehensive cleaning solutions for residential and commercial spaces. It typically includes regular cleaning tasks like dusting and vacuuming, as well as deep cleaning for thorough sanitation. Specialized services such as carpet and upholstery cleaning may also be offered.
          </p>
          <a href="#" className="inline-block bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition duration-300">
            Read & Share
          </a>
        </div>
        <div className="lg:w-1/2 w-full grid grid-cols-2 grid-rows-2 gap-4">
          {images.map((src, index) => (
            <div key={index} className="w-full h-48 relative">
              <Image src={src} alt={`Image ${index + 1}`} layout="fill" objectFit="cover" className="rounded-lg shadow-lg" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
