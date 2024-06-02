"use client"
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
            An all-in-one cleaning service offered by a cleaning company provides comprehensive cleaning solutions for residential and commercial spaces.
          </p>
          <div className='flex gap-5 items-center mb-2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
              <path fill="green" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8z"/>
            </svg>
            <p>Best in class Equipments</p>
          </div>
          <div className='flex gap-5 items-center mb-2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
              <path fill="green" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8z"/>
            </svg>
            <p>Well Trained Professionals</p>
          </div>
          <div className='flex gap-5 items-center mb-2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
              <path fill="green" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8z"/>
            </svg>
            <p>Quick cleaning - less time without water</p>
          </div>
          <div className='flex gap-5 items-center mb-2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
              <path fill="green" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8z"/>
            </svg>
            <p>All Tank types - PVC, Concrete, Tiles, etc.</p>
          </div>
          <div className='flex gap-5 items-center mb-2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
              <path fill="green" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8z"/>
            </svg>
            <p>Proudly serving Since - 2009</p>
          </div>
        </div>
        <div className="lg:w-1/2 w-full grid grid-cols-2 grid-rows-2 items-center justify-center gap-4">
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
