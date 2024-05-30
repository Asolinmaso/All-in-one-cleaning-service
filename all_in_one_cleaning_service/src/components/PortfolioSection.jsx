"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from 'next/image';

const PortfolioSection = () => {
  const portfolioItems = [
    {
      title: "Yard Cleaning",
      image: "/first_cleaning.webp",
      labelColor: "bg-green-500",
    },
    {
      title: "Corporate Vehicle Cleaning",
      image: "/Second_Cleaning.jpg",
      labelColor: "bg-lime-500",
    },
    {
      title: "Yard Cleaning",
      image: "/first_cleaning.webp",
      labelColor: "bg-green-500",
    },
    {
      title: "Home Car Cleaning",
      image: "/Second_Cleaning.jpg",
      labelColor: "bg-red-500",
    },
    {
      title: "Yard Cleaning",
      image: "/first_cleaning.webp",
      labelColor: "bg-green-500",
    },
    {
      title: "Corporate Vehicle Cleaning",
      image: "/Second_Cleaning.jpg",
      labelColor: "bg-lime-500",
    },
    {
      title: "Yard Cleaning",
      image: "/first_cleaning.webp",
      labelColor: "bg-green-500",
    },
    {
      title: "Home Car Cleaning",
      image: "/Second_Cleaning.jpg",
      labelColor: "bg-red-500",
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows:false,
    autoplay: true,
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
    <section className="bg-white py-20">
      <div className="container max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-yellow-600 text-sm font-bold mb-2">OUR PORTFOLIO</h2>
        <h1 className="text-4xl font-bold text-gray-800 mb-12">RECENT WORK SHOWCASE</h1>
        <Slider {...settings}>
          {portfolioItems.map((item, index) => (
            <div key={index} className="px-2">
              <div className="relative rounded-lg overflow-hidden h-72 w-full">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  layout="fill" 
                  objectFit="cover" 
                  className="rounded-lg"
                />
                <div className={`absolute bottom-4 left-4 px-4 py-2 text-white ${item.labelColor} rounded`}>
                  {item.title}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default PortfolioSection;
