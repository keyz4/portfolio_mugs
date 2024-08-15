'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '10%',
    autoplay: true,
    autoplaySpeed: 2000,
    focusOnSelect: true,
    beforeChange: (current: number, next: number) => setCurrentSlide(next),
    customPaging: (i: number) => (
      <div
        className={`w-12 h-4 bg-gray-200 rounded-lg cursor-pointer mt-[8rem] ${i === currentSlide ? 'bg-orange-500' : ''}`}
        data-index={i}
      />
    ),
    dotsClass: "slick-dots flex mt-40 h-[5rem]",
    arrows: false,
  };

  return (
    <section className="w-[80%] h-[45rem] bg-white text-black dark:bg-[#1E1E1E] dark:text-white flex flex-col items-center">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold mb-8 tracking-[0.25rem]">Testimonials</h2>
        <div className="mb-20 text-black dark:text-white text-lg w-full md:w-[50%] mx-auto">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium
        </div>
        <Slider {...settings} className='w-full'>
          {[0, 1, 2, 3].map(index => (
            <div
              key={index}
              className={`bg-[#EDECEC] dark:bg-white rounded-lg shadow-lg flex items-center justify-start md:mx-8 transition-opacity duration-500 h-[22rem] ${
                currentSlide === index ? 'opacity-100' : 'md:opacity-60 opacity-0'
              }`}
            >
              <div className="flex items-center justify-center w-full h-full">
                <Image
                  src="/Ellipse2.png"
                  alt="Person"
                  width={120}
                  height={120}
                  className="rounded-full w-[15rem] aspect-square ml-10 border-2"
                />
                <div className="text-left w-[38rem] pr-8 flex flex-col justify-center">
                  <div className="flex items-start">
                    <div className='text-orange-500 text-4xl italic mr-2'>&quot;</div>
                    <p className="text-black text-lg leading-relaxed">
                      Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.
                      <span className='text-orange-500 text-4xl italic'>&quot;</span>
                    </p>
                  </div>
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
