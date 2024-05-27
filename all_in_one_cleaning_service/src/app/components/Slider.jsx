'use client'
import { useState } from 'react';

const slides = [
  {
    name: 'Floor cleaning',
    description: 'Spotless Floors, Every Time! Shine Brighter with Clean Floors! Transform Your Floors with Our Cleaning Services! A Fresh Start for Your Floors! Experience the Magic of Clean Floors!',
    image: '/first_cleaning.webp'
  },
  {
    name: 'Home cleaning',
    description: 'Experience the joy of a spotless home with our top-to-bottom cleaning services. From kitchens to bathrooms, and everything in between, we’ve got you covered.',
    image: '/first_cleaning.webp'
  },
  {
    name: 'Hospital cleaning',
    description: 'Regular Disinfection: We disinfect all surfaces multiple times a day. Hand Hygiene: Hand sanitizers are available throughout the facility.',
    image: '/images1/hospital_cleaning.png'
  },
  {
    name: 'Office cleaning',
    description: 'Dusting & Surface Cleaning, Vacuuming & Carpet Care, Trash Removal & Recycling, Sanitizing Restrooms & Kitchens, Window & Glass Cleaning',
    image: '/images1/office_cleaning.png'
  },
  {
    name: 'Restaurant cleaning',
    description: 'Our dedicated team works tirelessly to maintain impeccable hygiene standards in every corner of our kitchen. From spotless surfaces to sanitized utensils, we leave no stone unturned in ensuring your safety and satisfaction.',
    image: '/images1/restaurant_cleaning.png'
  },
  {
    name: 'Vacuum cleaning',
    description: 'Experience the ultimate clean with our powerful vacuum cleaners. Say goodbye to dust, dirt, and allergens as our advanced technology effortlessly removes debris from every surface. Transform your home into a pristine sanctuary with ease.',
    image: '/images1/vaccuming.png'
  }
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative my-12 w-full flex justify-center items-center overflow-hidden" style={{ height: '60vh' }}>
      <div className="relative w-3/4 h-full flex overflow-hidden">
        {slides.map((slide, index) => (
          <div key={index} className={`absolute top-0 left-0 w-full h-full transition-all duration-700 ease-in-out ${index === current ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="absolute bottom-5 left-5 bg-black bg-opacity-60 p-4 rounded-lg text-white max-w-xs md:max-w-sm lg:max-w-md">
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold">{slide.name}</h2>
              <p className="mt-2 text-sm md:text-base lg:text-lg">{slide.description}</p>
              <button className="mt-3 py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white rounded">See more</button>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-5 w-full flex justify-center space-x-4">
        <button onClick={prevSlide} className="bg-gray-700 text-white rounded-full shadow-md hover:bg-gray-800 p-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 64 64"><circle cx="32" cy="32" r="30" fill="#4fd1d9"/><path fill="#fff" d="M30.3 16L15 32l15.3 16V37.4H49V27.1H30.3z"/></svg>
        </button>
        <button onClick={nextSlide} className="bg-gray-700 text-white rounded-full shadow-md hover:bg-gray-800 p-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 64 64"><circle cx="32" cy="32" r="30" fill="#4fd1d9"/><path fill="#fff" d="M33.7 16L49 32L33.7 48V37.4H15V27.1h18.7z"/></svg>
        </button>
      </div>
    </div>
  );
};

export default Slider;
