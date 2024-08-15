import React from 'react';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Hero() {
  return (
    <div className='flex flex-col md:flex-row w-full h-auto md:w-[70%] md:h-[45rem] font-poppins'>
      
      {/* Left section with text content */}
      <div className='flex flex-col w-full md:w-[55%] h-full mt-10 md:mt-40 px-4 md:px-0'>
        
        {/* Introduction */}
        <div className='font-semibold text-lg md:text-xl'>Hi, I am</div>
        <div className='font-semibold text-xl md:text-2xl text-orange-500 tracking-wide'>
          Muhammad Umair
        </div>

        {/* Main Title */}
        <div className='font-bold text-3xl md:text-[5rem] h-max w-max tracking-wide leading-tight'>
          UI & UX
        </div>
        <div className='h-max font-bold text-3xl md:text-[5rem] w-full flex md:justify-end leading-[0.5]'>
          Designer
        </div>

        {/* Description */}
        <div className='mt-6 md:mt-12 text-base md:text-lg tracking-wide'>
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra.
        </div>

        {/* Hire Me Button */}
        <button className='my-4 rounded-md px-6 py-2 text-white bg-orange-500 w-max'>
          Hire Me
        </button>
      </div>

      {/* Right section with images and social icons */}
      <div className='h-full w-full md:w-max flex flex-col items-center md:items-end relative md:relative md:ml-20'>
        
        {/* Decorative background rectangle */}
        <div className="absolute bg-orange-500 opacity-60 h-10 md:h-16 w-[10rem] md:w-[18rem] mt-8 md:mt-[9rem] z-20 md:mr-14"></div>

        {/* Top Layer Image */}
        <div className='absolute ml-4 md:ml-[1rem] mt-6 md:mt-[5rem] h-[20.8rem] md:h-[25rem] w-[20.8rem] md:w-[25rem] z-10'>
          <Image
            src="/layer0top.png" // Path to the top layer image
            alt="Top Layer" // Description of the image
            width={600} // Image width
            height={400} // Image height
            quality={75} // Image quality
            className='mt-[-3.5rem] md:mt-0 md:ml-2'
          />
        </div>

        {/* Main Image with Circular Border */}
        <div className='rounded-full border-6 md:border-8 border-orange-500 h-[20rem] md:h-[25rem] w-[20rem] md:w-[25rem] mt-10 md:mt-40 flex justify-center items-center overflow-hidden'>
          <Image
            src="/layer0bottom.png" // Path to the bottom layer image
            alt="Bottom Layer" // Description of the image
            width={600} // Image width
            height={400} // Image height
            quality={75} // Image quality
          />
        </div>

        {/* Social Media Icons */}
        <div className='flex justify-between mt-4 md:mt-4 text-xl md:text-3xl w-[40%] md:w-[40%] text-black dark:text-white self-center'>
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
          <FaLinkedin />
        </div>
      </div>
    </div>
  );
}

export default Hero;
