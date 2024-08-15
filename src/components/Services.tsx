import React from 'react';
import Image from 'next/image';

/*
 * Services component that displays a section of services offered.
 * Each service is represented with an icon, title, and description.
 */
function Services() {
  return (
    <div className='h-auto md:h-[30rem] w-[90%] md:w-[75%] flex flex-col items-center mt-12 md:mt-0'>
      
      {/* Section Title */}
      <div className='text-4xl md:text-5xl font-bold text-center'>
        Services
      </div>
      
      {/* Section Description */}
      <div className='w-full md:w-[60%] text-sm md:text-lg text-center my-4 md:my-8'>
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium.
      </div>
      
      {/* Services Grid */}
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 mt-8 md:mt-4 w-full'>
        
        {/* Service 1: UI/UX */}
        <div className='flex flex-col items-center md:items-start justify-center bg-[#EDECEC] dark:bg-white dark:text-black p-4 rounded-lg'>
          <Image
            src='/Vector1.png'
            height={64}
            width={64}
            alt='UI/UX Icon'
            className='h-16 w-16'
          />
          <div className='text-xl md:text-2xl font-bold my-4 text-center md:text-left'>
            UI/UX
          </div>
          <div className='text-sm md:text-base text-center md:text-left'>
            Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum.
          </div>
        </div>

        {/* Service 2: Web Design */}
        <div className='flex flex-col items-center md:items-start justify-center bg-[#EDECEC] dark:bg-white dark:text-black p-4 rounded-lg'>
          <Image
            src='/Vector2.png'
            height={64}
            width={64}
            alt='Web Design Icon'
            className='h-16 w-16'
          />
          <div className='text-xl md:text-2xl font-bold my-4 text-center md:text-left'>
            Web Design
          </div>
          <div className='text-sm md:text-base text-center md:text-left'>
            Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum.
          </div>
        </div>

        {/* Service 3: App Design */}
        <div className='flex flex-col items-center md:items-start justify-center bg-[#EDECEC] dark:bg-white dark:text-black p-4 rounded-lg'>
          <Image
            src='/Vector3.png'
            height={64}
            width={64}
            alt='App Design Icon'
            className='h-16 w-16'
          />
          <div className='text-xl md:text-2xl font-bold my-4 text-center md:text-left'>
            App Design
          </div>
          <div className='text-sm md:text-base text-center md:text-left'>
            Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum.
          </div>
        </div>

        {/* Service 4: Graphic Design */}
        <div className='flex flex-col items-center md:items-start justify-center bg-[#EDECEC] dark:bg-white dark:text-black p-4 rounded-lg'>
          <Image
            src='/Vector4.png'
            height={64}
            width={64}
            alt='Graphic Design Icon'
            className='h-16 w-16'
          />
          <div className='text-xl md:text-2xl font-bold my-4 text-center md:text-left'>
            Graphic Design
          </div>
          <div className='text-sm md:text-base text-center md:text-left'>
            Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum.
          </div>
        </div>

      </div>
    </div>
  );
}

export default Services;
