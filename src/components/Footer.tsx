import React from 'react';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full h-max bg-[#EDECEC] text-black dark:bg-[#1E1E1E] dark:text-white font-poppins">
      <div className="container mx-auto mt-20">
        {/* Logo and navigation */}
        <div className="flex flex-col items-center">
          {/* Logo */}
          <div className='flex items-center justify-center' >
          <div className='flex justify-center items-center rounded-full bg-orange-500 h-14 w-14 mr-4 text-3xl font-corvetta font-thin overflow-hidden text-white dark:text-black'>mu</div>
            <div className='text-4xl text-gray-600 dark:text-white' ><span className='font-bold text-black dark:text-white' >M</span>umair</div>
          </div>
          {/* Navigation links */}
          <nav className="my-14 text-lg font-normal">
            <ul className="flex flex-col md:flex-row md:space-x-6 space-y-2 items-center">
              <li><a href="#home" className="hover:text-orange-500">Home</a></li>
              <li><a href="#about" className="hover:text-orange-500">About Me</a></li>
              <li><a href="#services" className="hover:text-orange-500">Services</a></li>
              <li><a href="#projects" className="hover:text-orange-500">Projects</a></li>
              <li><a href="#testimonials" className="hover:text-orange-500">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-orange-500">Contact</a></li>
            </ul>
          </nav>
          {/* Social icons */}
          <div className="flex space-x-4 mt-6 text-3xl">
            <a href="https://facebook.com" aria-label="Facebook" className="hover:text-orange-500">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" aria-label="Twitter" className="hover:text-orange-500">
              <FaTwitter/>
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className="hover:text-orange-500">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-orange-500">
              <FaLinkedin/>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex justify-center items-center py-4 mt-12 bg-[#545454] dark:bg-black text-white dark:text-gray-300 text-lg">
          <p className="text-center">
            &copy; 2023 <span className="text-orange-500 font-bold">Mumair</span> All Rights Reserved, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
