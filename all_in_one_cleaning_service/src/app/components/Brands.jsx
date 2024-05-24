import React from 'react';

const BrandSection = () => {
  const brands = ["YAMAHA", "BLOOM HOSPITAL", "KIA", "HYUNDAI", "MARUTI SUZUKI"];

  return (
    <section className="bg-white py-12">
      <div className="container max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-yellow-600 text-sm font-bold mb-2">TRUSTED PARTNERS</h2>
        <h1 className="text-4xl font-bold text-gray-800 mb-8">BRANDS WHO TRUST US</h1>
      </div>
      <div className="bg-yellow-300 py-4 overflow-hidden">
        <div className="marquee flex space-x-8 items-center justify-center whitespace-nowrap">
          {brands.map((brand, index) => (
            <span key={index} className="text-gray-700 text-lg font-semibold mx-4">
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
