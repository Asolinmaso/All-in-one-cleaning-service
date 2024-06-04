"use client";
import React from 'react';
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ServicesSection = () => {
  const services = [
    {
      title: "Sewage Cleaning",
      description: "Efficient, Thorough House Cleaning For A Spotless Home.",
      image: "/services/sewage cleaning.avif",
    },
    {
      title: "Toilet Cleaning",
      description: "Refresh Your Workspace With Expert Office Cleaning.",
      image: "/services/toilet-cleaning.jpg",
    },
    {
      title: "Septic Tank Cleaning",
      description: "Revitalize Your Ride: Professional Car Cleaning For A Gleaming Finish.",
      image: "/services/septic_cleaning.jpg",
    },
    {
      title: "Mechanised Water Tank Cleaning",
      description: "Keep Your Outdoor Space Pristine With Professional Yard Maintenance.",
      image: "/services/mechanized-water-tank-cleaning-service.jpg",
    },
  ];

  const stages_of_cleaning = [
    {
      title: "1",
      description: "Mechanised Dewatering",
      image: "/services/mechanized-dewatering.webp",
    },
    {
      title: "2",
      description: "Sludge Removal",
      image: "/services/sludge_removal.png",
    },
    {
      title: "3",
      description: "High Pressure Cleaning",
      image: "/services/HPC.jpg",
    },
    {
      title: "4",
      description: "Vaccum Cleaning",
      image: "/Second_Cleaning.jpg",
    },
    {
      title: "5",
      description: "Anti-Bacterial Spray",
      image: "/first_cleaning.webp",
    },
    {
      title: "6",
      description: "UV Disinfection",
      image: "/services/UV.jpg",
    },
  ];

  const special_services = [
    {
      title: "Ozone Cleaning",
      description: "Efficient, Thorough House Cleaning For A Spotless Home.",
      image: "/services/ozone-cleaning.jpeg",
    },
    {
      title: "Ozone water purifier",
      description: "Refresh Your Workspace With Expert Office Cleaning.",
      image: "/services/ozone-water-purifier.jpg",
    },
    {
      title: "Bacteria Cleaning",
      description: "Revitalize Your Ride: Professional Car Cleaning For A Gleaming Finish.",
      image: "/services/bacteria_cleaning.jpg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="py-20" id="services">
      <div className="container max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-yellow-600 text-md font-bold mb-2">OUR SERVICES</h2>
        <h1 className="text-4xl font-bold text-gray-800 mb-12">WHAT WE ARE OFFERING</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 cursor-pointer">
          {services.map((service, index) => (
            <div key={index} className="group relative border bg-white border-yellow-400 p-6 rounded-lg hover:bg-yellow-400 transition-colors duration-300">
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-12 w-24 h-24 z-10">
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

      <div className="container max-w-7xl mx-auto px-4 text-center mt-8">
        <h2 className="text-green-600 text-lg font-bold mb-2">Unique 6 Stages of Cleaning</h2>
        <Slider {...settings}>
          {stages_of_cleaning.map((service, index) => (
            <div key={index} className="px-2 pt-16 ">
              <div className="group relative border bg-white border-yellow-400 p-6 rounded-lg hover:bg-yellow-400 transition-colors duration-300 cursor-pointer">
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-16 w-32 h-32 z-10 ">
                  <div className="relative w-32 h-32 rounded-full border-4 border-white overflow-hidden">
                    <Image src={service.image} alt={service.title} layout="fill" objectFit="cover" />
                  </div>
                </div>
                <div className="mt-10 pt-8">
                  <h3 className="text-lg font-semibold text-yellow-600 group-hover:text-black">{service.title}</h3>
                  <p className="text-gray-600 mt-4">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="container max-w-7xl mx-auto px-4 text-center mt-16">
        <h2 className="text-yellow-900 text-md font-bold mb-2">OUR SPECIAL SERVICES</h2>
        <h1 className="text-4xl font-bold text-gray-800 mb-12">WHAT WE ARE OFFERING</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer">
          {special_services.map((service, index) => (
            <div key={index} className="group bg-white relative border border-yellow-400 p-6 rounded-lg hover:bg-yellow-400 transition-colors duration-300">
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-12 w-24 h-24 z-10">
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
