'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const Testimonials = () => {
  // State to track the current slide index
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slider settings configuration
  const settings = {
    dots: true, // Enable dots navigation
    infinite: true, // Allow infinite scrolling
    speed: 500, // Transition speed in milliseconds
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    centerMode: true, // Center the current slide
    centerPadding: '10%', // Add padding on the sides of the centered slide
    autoplay: true, // Automatically play slides
    autoplaySpeed: 2000, // Duration between each slide in autoplay mode
    focusOnSelect: true, // Focus slide on click
    beforeChange: (current, next) => setCurrentSlide(next), // Update current slide index before slide changes
    customPaging: i => (
      <div
        className={`w-12 h-4 bg-gray-200 rounded-lg cursor-pointer mt-[8rem] ${i === currentSlide ? 'bg-orange-500' : ''}`}
        data-index={i}
      />
    ), // Custom dot styling with condition for the active slide
    dotsClass: "slick-dots flex mt-40 h-[5rem]", // Custom class for dots container
    arrows: false, // Remove navigation arrows
  };

  return (
    <section className="w-[80%] h-[45rem] bg-white text-black dark:bg-[#1E1E1E] dark:text-white flex flex-col items-center">
      {/* Main container for the testimonials section */}
      <div className="container mx-auto text-center">
        
        {/* Section title */}
        <h2 className="text-5xl font-bold mb-8 tracking-[0.25rem]">Testimonials</h2>
        
        {/* Section description */}
        <div className="mb-20 text-black dark:text-white text-lg w-full md:w-[50%] mx-auto">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium
        </div>
        
        {/* Slider for testimonials */}
        <Slider {...settings} className='w-full'>
          {[0, 1, 2, 3].map(index => (
            <div
              key={index}
              className={`bg-[#EDECEC] dark:bg-white rounded-lg shadow-lg flex items-center justify-start md:mx-8 transition-opacity duration-500 h-[22rem] ${
                currentSlide === index ? 'opacity-100' : 'md:opacity-60 opacity-0'
              }`}
            >
              <div className="flex items-center justify-center w-full h-full">
                {/* Image container */}
                <Image
                  src="/Ellipse2.png"
                  alt="Person"
                  width={120}
                  height={120}
                  className="rounded-full w-[15rem] aspect-square ml-10 border-2" // Adjusted image size and added border
                />
                
                {/* Testimonial text container */}
                <div className="text-left w-[38rem] pr-8 flex flex-col justify-center">
                  {/* Ensure the text content is centered vertically */}
                  <div className="flex items-start">
                    <div className='text-orange-500 text-4xl italic mr-2'>"</div>
                    <p className="text-black text-lg leading-relaxed">
                      Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.
                      <span className='text-orange-500 text-4xl italic'>"</span>
                    </p>
                  </div>
                  
                  {/* Testimonial author details */}
                  <h4 className="font-semibold mt-4 ml-6 text-black text-xl">
                    {index === 0 ? 'Name' : index === 1 ? 'Name' : 'Name'}
                  </h4>
                  <p className="text-md ml-6 text-black">
                    CEO
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
