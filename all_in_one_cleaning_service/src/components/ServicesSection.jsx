import React from 'react';
import Image from 'next/image';

const ServicesSection = () => {
  const services = [
    {
      title: "House Cleaning",
      description: "Efficient, Thorough House Cleaning For A Spotless Home.",
      image: "/first_cleaning.webp",
    },
    {
      title: "Office Cleaning",
      description: "Refresh Your Workspace With Expert Office Cleaning.",
      image: "/Second_Cleaning.jpg",
    },
    {
      title: "Car Cleaning",
      description: "Revitalize Your Ride: Professional Car Cleaning For A Gleaming Finish.",
      image: "/first_cleaning.webp",
    },
    {
      title: "Yard Maintenance",
      description: "Keep Your Outdoor Space Pristine With Professional Yard Maintenance.",
      image: "/Second_Cleaning.jpg",
    },
  ];

  return (
    <section className="bg-white py-20" id="services">
      <div className="container max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-yellow-600 text-sm font-bold mb-2">OUR SERVICES</h2>
        <h1 className="text-4xl font-bold text-gray-800 mb-12">WHAT WE ARE OFFERING</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 cursor-pointer">
          {services.map((service, index) => (
            <div key={index} className="group relative border border-yellow-400 p-6 rounded-lg hover:bg-yellow-400 transition-colors duration-300">
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-12 w-24 h-24">
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white">
                  <Image src={service.image} alt={service.title} layout="fill" objectFit="cover" className="rounded-full" />
                </div>
              </div>
              <div className="mt-16 pt-8">
                <h3 className="text-lg font-semibold text-yellow-600 group-hover:text-black">{service.title}</h3>
                <p className="text-gray-600 mt-4">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
