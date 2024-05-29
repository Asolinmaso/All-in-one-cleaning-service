'use client'
import React from 'react';
import Image from 'next/image';
import useMobileView from '@/utils/customhooks';
import BookingForm from './BookingForm';

const testimonials = [
  {
    name: "Stella",
    position: "President Of Sales",
    feedback: "Absolutely Thrilled With The Service Provided By ShineBright Cleaning! Highly Recommend ShineBright Cleaning To Anyone Looking For Top-Notch Cleaning Services!",
    image: "/first_cleaning.webp",
    rating: 5,
  },
  {
    name: "Emily",
    position: "Interior Designer",
    feedback: "Exceptional Service From SparkleClean! They Transformed My Space Into A Spotless Haven. From The Meticulous Attention To Detail To The Use Of Eco-Friendly Products, I Was Thoroughly Impressed. Will Definitely Be Using Their Services Again!",
    image: "/first_cleaning.webp",
    rating: 5,
  },
  {
    name: "Saheera",
    position: "Managing Director",
    feedback: "Top-Notch Service From All In One Service Cleaning Elite! As A Managing Director, Time Is Of The Essence, And All In One Service Cleaning Elite Delivered Beyond My Expectations. Their Efficient And Thorough Approach Ensured Our Office Space Was Immaculate In No Time.",
    image: "/first_cleaning.webp",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const isMobile = useMobileView();

  return (
    <section className="bg-white py-20">
      <div className="container max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-yellow-600 text-xl font-bold mb-2">HAPPY CUSTOMERS</h2>
        <h1 className="text-4xl font-bold text-gray-800 mb-12">WHAT OUR CUSTOMERS SAY</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative bg-white shadow-lg rounded-lg p-8">
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-12 w-24 h-24">
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white">
                  <Image src={testimonial.image} alt={testimonial.name} layout="fill" objectFit="cover" />
                </div>
              </div>
              <div className="pt-8">
                <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
                <p className="text-gray-500">{testimonial.position}</p>
                <p className="text-gray-600 mt-4">{testimonial.feedback}</p>
                <div className="flex justify-center mt-4">
                  {Array.from({ length: testimonial.rating }, (_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927C9.269 2.28 9.731 2.28 9.951 2.927l1.287 3.965h4.167c.53 0 .75.65.324.96l-3.45 2.5 1.287 3.965c.219.648-.564.648-.783 0l-3.45-2.5-3.45 2.5c-.219.648-1.002.648-1.221 0l1.287-3.965-3.45-2.5c-.426-.31-.206-.96.324-.96h4.167L9.049 2.927z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isMobile && <BookingForm />}
    </section>
  );
};

export default TestimonialsSection;
