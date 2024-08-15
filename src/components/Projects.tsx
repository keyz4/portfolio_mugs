import React from 'react';
import Image from 'next/image';

function Projects() {
  return (
    <div className='h-auto w-[90%] md:w-[75%] flex flex-col items-center mt-20 mb-40 md:mb-20 md:mt-40'>
      
      {/* Section Title */}
      <div className='text-4xl md:text-6xl font-bold text-center'>My Projects</div>
      
      {/* Section Description */}
      <div className='w-full md:w-[60%] text-sm md:text-lg text-center my-4 md:my-8'>
        Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus. Phasellus consequat urna tellus.
      </div>
      
      {/* Category Buttons */}
      <div className='w-full md:w-[60%] flex justify-between text-xs md:text-xl text-black mt-8 md:mt-12 space-x-2 md:space-x-0'>
        <button className='bg-[#EDECEC] dark:bg-white rounded-lg w-full md:w-max p-2 md:p-2 px-2 md:px-4 border-2 border-gray-400'>
          All
        </button>
        <button className='bg-[#EDECEC] dark:bg-white rounded-lg w-full md:w-max p-2 md:p-2 px-2 md:px-4 border-2 border-gray-400'>
          UI/UX
        </button>
        <button className='bg-orange-500 rounded-lg w-full md:w-max p-2 md:p-2 px-2 md:px-4 border-2 border-gray-400 text-white font-medium'>
          Web Design
        </button>
        <button className='bg-[#EDECEC] dark:bg-white rounded-lg w-full md:w-max p-2 md:p-2 px-2 md:px-4 border-2 border-gray-400'>
          App Design
        </button>
        <button className='bg-[#EDECEC] dark:bg-white rounded-lg w-full md:w-max p-2 md:p-2 px-2 md:px-4 border-2 border-gray-400'>
          Graphic Design
        </button>
      </div>
      
      {/* Projects Grid */}
      <div className='grid grid-cols-1 gap-8 md:grid-cols-3 mt-12 md:mt-20 w-full'>
        
        {/* Project 1 */}
        <div className='h-full w-full'>
          <div className='relative'>
            {/* Background Image */}
            <Image
              src='/Rectangle.png'
              height={600}
              width={400}
              alt='Background'
              className='relative z-1 h-full w-full'
            />
            {/* Back Layer */}
            <Image
              src='/WebDesigns1back.png'
              height={600}
              width={400}
              alt='Back Layer'
              className='absolute z-3 top-0 h-full w-[60%] right-0 mr-8'
            />
            {/* Front Layer */}
            <Image
              src='/WebDesigns1front.png'
              height={600}
              width={400}
              alt='Front Layer'
              className='absolute z-5 h-[85%] w-[60%] bottom-0 left-0 ml-8'
            />
          </div>
          <div className='text-orange-500 mt-6 mb-2 text-center md:text-left'>Web Design</div>
          <div className='text-lg md:text-xl font-bold w-full text-center md:text-left'>AirCalling Landing Page Design</div>
        </div>

        {/* Project 2 */}
        <div className='h-full w-full'>
          <div className='relative'>
            <Image
              src='/Rectangle.png'
              height={600}
              width={400}
              alt='Background'
              className='relative z-1 h-full w-full'
            />
            <Image
              src='/WebDesigns2back.png'
              height={600}
              width={400}
              alt='Back Layer'
              className='absolute z-3 top-0 h-full w-[60%] right-0 mr-8'
            />
            <Image
              src='/WebDesigns2front.png'
              height={600}
              width={400}
              alt='Front Layer'
              className='absolute z-5 h-[85%] w-[60%] bottom-0 left-0 ml-8'
            />
          </div>
          <div className='text-orange-500 mt-6 mb-2 text-center md:text-left'>Web Design</div>
          <div className='text-lg md:text-xl font-bold w-full text-center md:text-left'>Business Landing Page Design</div>
        </div>

        {/* Project 3 */}
        <div className='h-full w-full'>
          <div className='relative'>
            <Image
              src='/Rectangle.png'
              height={600}
              width={400}
              alt='Background'
              className='relative z-1 h-full w-full'
            />
            <Image
              src='/WebDesigns3back.png'
              height={600}
              width={400}
              alt='Back Layer'
              className='absolute z-3 top-0 h-full w-[60%] right-0 mr-8'
            />
            <Image
              src='/WebDesigns3front.png'
              height={600}
              width={400}
              alt='Front Layer'
              className='absolute z-5 h-[85%] w-[60%] bottom-0 left-0 ml-8'
            />
          </div>
          <div className='text-orange-500 mt-6 mb-2 text-center md:text-left'>Web Design</div>
          <div className='text-lg md:text-xl font-bold w-full text-center md:text-left'>Ecom Web Page Design</div>
        </div>

      </div>
    </div>
  );
}

export default Projects;
