import React from 'react';

function Contact() {
  return (
    <div className='flex flex-col items-center h-[25rem] w-[90%] md:w-[70%] mb-4 mt-20'>
      
      {/* Heading */}
      <div className='text-3xl md:text-5xl font-bold text-center'>
        Let&apos;s Design Together
      </div>

      {/* Description */}
      <div className='text-lg md:text-xl my-8 w-[90%] md:w-[70%] text-center'>
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium.
      </div>

      {/* Email input and button */}
      <div className='flex flex-col md:flex-row justify-between w-full md:w-[65%] mt-12'>
        
        {/* Email input field */}
        <input 
          type="text" 
          placeholder='Enter your email'
          className='h-[3.5rem] w-full md:w-[68%] rounded-xl p-8 text-xl bg-[#EDECEC] dark:bg-white mb-4 md:mb-0 text-black' 
        />

        {/* Submit button */}
        <button className='w-full md:w-auto px-10 py-2 bg-orange-500 text-white rounded-xl text-xl font-semibold'>
          Contact Me
        </button>
      </div>
    </div>
  );
}

export default Contact;
