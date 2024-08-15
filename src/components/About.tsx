'use client'
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

function About() {
  const uxValue = 90;
  const webDesignValue = 85;
  const appDesignValue = 97;
  const graphicDesignValue = 90;

  const uxRef = useRef(null);
  const webDesignRef = useRef(null);
  const appDesignRef = useRef(null);
  const graphicDesignRef = useRef(null);

  useEffect(() => {
    if (uxRef.current) {
      uxRef.current.style.setProperty('--value', `${uxValue}%`);
    }
    if (webDesignRef.current) {
      webDesignRef.current.style.setProperty('--value', `${webDesignValue}%`);
    }
    if (appDesignRef.current) {
      appDesignRef.current.style.setProperty('--value', `${appDesignValue}%`);
    }
    if (graphicDesignRef.current) {
      graphicDesignRef.current.style.setProperty('--value', `${graphicDesignValue}%`);
    }
  }, [uxValue, webDesignValue, appDesignValue, graphicDesignValue]);

  return (
    <div className='flex w-[90%] h-[60rem] md:h-[40rem] font-poppins md:flex-row flex-col'>
      {/* Left section with image and decoration */}
      <div className='h-full w-full md:w-[50%] flex relative items-center justify-center md:items-start md:justify-start mb-10 md:mb-0'>
        {/* Decorative overlay rectangle */}
        <div className="absolute bg-orange-500 opacity-60 h-16 w-[14rem] md:w-[18rem] md:ml-[14rem] mt-[-13rem] md:mt-[4rem] z-20"></div>

        {/* Background image positioned absolutely */}
        <div className='absolute h-[20rem] w-[20rem] md:h-[35rem] md:w-[35rem] md:ml-[5.5rem] mt-[-2rem] md:mt-[-1.8rem] z-10'>
          <Image
            src="/BackgroundTop.png"
            alt="Decorative background"
            width={600}
            height={400}
            quality={75}
          />
        </div>

        {/* Main image with circular border */}
        <div className='rounded-full border-8 border-orange-500 h-[18rem] w-[18rem] md:h-[30rem] md:w-[30rem] mt-[2rem] md:mt-[4rem] md:ml-[8rem] flex justify-center items-center overflow-hidden'>
          <Image
            src="/BackgroundBottom.png"
            alt="Decorative foreground"
            width={600}
            height={400}
            quality={75}
          />
        </div>
      </div>

      {/* Right section with text and skill sliders */}
      <div className='h-full w-full md:w-[40%] flex flex-col justify-center items-start'>
        <div className='text-3xl md:text-5xl font-bold mb-2'>About Me</div>
        <div className='text-lg md:text-xl my-4'>
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra.
        </div>

        <div className='slider h-[50%] w-full'>
          <div className="mb-4">
            <label className="block text-md md:text-lg font-semibold mb-2">UX</label>
            <input
              ref={uxRef}
              type="range"
              min="0"
              max="100"
              value={uxValue}
              className="w-full h-2 bg-orange-500 rounded-full appearance-none slider-thumb"
            />
          </div>

          <div className="mb-4">
            <label className="block text-md md:text-lg font-semibold mb-2">Website Design</label>
            <input
              ref={webDesignRef}
              type="range"
              min="0"
              max="100"
              value={webDesignValue}
              className="w-full h-2 bg-orange-500 rounded-full appearance-none slider-thumb"
            />
          </div>

          <div className="mb-4">
            <label className="block text-md md:text-lg font-semibold mb-2">App Design</label>
            <input
              ref={appDesignRef}
              type="range"
              min="0"
              max="100"
              value={appDesignValue}
              className="w-full h-2 bg-orange-500 rounded-full appearance-none slider-thumb"
            />
          </div>

          <div className="mb-4">
            <label className="block text-md md:text-lg font-semibold mb-2">Graphic Design</label>
            <input
              ref={graphicDesignRef}
              type="range"
              min="0"
              max="100"
              value={graphicDesignValue}
              className="w-full h-2 bg-orange-500 rounded-full appearance-none slider-thumb"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
