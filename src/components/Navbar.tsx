import React from 'react';

function Navbar() {
  return (
    <div className='w-full md:w-[75%] h-max flex justify-between items-center md:mt-10 text-sm md:text-lg font-poppins self-start md:self-center'>
      
      {/* Logo Section */}
      <div className='flex justify-center items-center'>
        
        {/* Logo Icon */}
        <div className='flex justify-center items-center rounded-full bg-orange-500 md:h-16 md:w-16 h-8 w-8 md:mr-4 m-2 text-lg md:text-4xl font-corvetta font-thin overflow-hidden text-white dark:text-black'>
          mu
        </div>
        
        {/* Brand Name */}
        <div className='text-2xl md:text-4xl text-gray-600 dark:text-white'>
          <span className='font-bold text-black dark:text-white'>M</span>umair
        </div>
      </div>
      
      {/* Navigation Links */}
      <div className='md:w-[70%] w-max flex justify-between items-center p-2'>
        <div className='hidden md:flex'>Home</div>
        <div className='hidden md:flex'>About Me</div>
        <div className='hidden md:flex'>Services</div>
        <div className='hidden md:flex'>Projects</div>
        <div className='hidden md:flex'>Testimonials</div>
        <div className='hidden md:flex'>Contact</div>
        
        {/* Download CV Button */}
        <button className='bg-orange-500 text-white py-2 px-4 rounded-md'>
          Download CV
        </button>
      </div> 
    </div>
  );
}

export default Navbar;