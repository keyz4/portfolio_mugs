import React from 'react';
import Image from 'next/image';

function About() {
  // Skill values
  const uxValue = 90;
  const webDesignValue = 95;
  const appDesignValue = 80;
  const graphicDesignValue = 90;

  return (
    <div className='flex w-[90%] h-[60rem] md:h-[40rem] font-poppins md:flex-row flex-col'>
      {/* Left section with image and decoration */}
      <div className='h-full w-full md:w-[50%] flex relative items-center justify-center md:items-start md:justify-start mb-10 md:mb-0'>
        {/* Decorative overlay rectangle */}
        <div className="absolute bg-orange-500 opacity-60 h-16 w-[14rem] md:w-[18rem] md:ml-[14rem] mt-[-13rem] md:mt-[4rem] z-20"></div>

        {/* Background image positioned absolutely */}
        <div className='absolute h-[20rem] w-[20rem] md:h-[35rem] md:w-[35rem] md:ml-[5.5rem] mt-[-2rem] md:mt-[-1.8rem] z-10'>
          <Image
            src="/BackgroundTop.png" // Path to the top background image
            alt="Decorative background" // Description of the image
            width={600} // Image width
            height={400} // Image height
            quality={75} // Image quality
          />
        </div>

        {/* Main image with circular border */}
        <div className='rounded-full border-8 border-orange-500 h-[18rem] w-[18rem] md:h-[30rem] md:w-[30rem] mt-[2rem] md:mt-[4rem] md:ml-[8rem] flex justify-center items-center overflow-hidden'>
          <Image
            src="/BackgroundBottom.png" // Path to the bottom background image
            alt="Decorative foreground" // Description of the image
            width={600} // Image width
            height={400} // Image height
            quality={75} // Image quality
          />
        </div>
      </div>

      {/* Right section with text and skill sliders */}
      <div className='h-full w-full md:w-[40%] flex flex-col justify-center items-start'>
        {/* Heading */}
        <div className='text-3xl md:text-5xl font-bold mb-2'>About Me</div>

        {/* Description */}
        <div className='text-lg md:text-xl my-4'>
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra.
        </div>

        {/* Skill sliders */}
        <div className='slider h-[50%] w-full'>
          {/* UX Skill Slider */}
          <div className="mb-4">
            <label className="block text-md md:text-lg font-semibold mb-2">UX</label>
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={uxValue} 
              className="w-full h-2 bg-orange-500 rounded-full appearance-none slider-thumb" 
              style={{ '--value': `${uxValue}%` }} 
            />
          </div>

          {/* Website Design Skill Slider */}
          <div className="mb-4">
            <label className="block text-md md:text-lg font-semibold mb-2">Website Design</label>
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={webDesignValue} 
              className="w-full h-2 bg-orange-500 rounded-full appearance-none slider-thumb" 
              style={{ '--value': `${webDesignValue}%` }} 
            />
          </div>

          {/* App Design Skill Slider */}
          <div className="mb-4">
            <label className="block text-md md:text-lg font-semibold mb-2">App Design</label>
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={appDesignValue} 
              className="w-full h-2 bg-orange-500 rounded-full appearance-none slider-thumb" 
              style={{ '--value': `${appDesignValue}%` }} 
            />
          </div>

          {/* Graphic Design Skill Slider */}
          <div className="mb-4">
            <label className="block text-md md:text-lg font-semibold mb-2">Graphic Design</label>
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={graphicDesignValue} 
              className="w-full h-2 bg-orange-500 rounded-full appearance-none slider-thumb" 
              style={{ '--value': `${graphicDesignValue}%` }} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
