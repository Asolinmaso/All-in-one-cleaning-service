import React from 'react';
import Image from 'next/image';

const BrandSection = () => {
  const brands = [
    { name: "YAMAHA", src: "/first_cleaning.webp" },
    { name: "BLOOM HOSPITAL", src: "/first_cleaning.webp" },
    { name: "KIA", src: "/first_cleaning.webp" },
    { name: "HYUNDAI", src: "/first_cleaning.webp" },
    { name: "MARUTI SUZUKI", src: "/first_cleaning.webp" }
  ];

  return (
    <section className="bg-white py-12">
      <div className="container max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-yellow-600 text-sm font-bold mb-2">TRUSTED PARTNERS</h2>
        <h1 className="text-4xl font-bold text-gray-800 mb-8">BRANDS WHO TRUST US</h1>
      </div>
      <div className="bg-yellow-300 py-4 overflow-hidden">
        <div className="flex space-x-8 items-center justify-center whitespace-nowrap">
          {brands.map((brand, index) => (
            <div key={index} className="flex flex-col items-center mx-4">
              <div className="w-24 h-24 relative">
                <Image 
                  src={brand.src} 
                  alt={brand.name} 
                  layout="fill" 
                  objectFit="cover" 
                  className="rounded-full" 
                />
              </div>
              <span className="text-gray-700 text-lg font-semibold mt-2">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
