"use client"
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      menuRef.current.style.height = `${menuRef.current.scrollHeight}px`;
    } else {
      menuRef.current.style.height = '0px';
    }
  }, [isOpen]);

  return (
    <nav className="bg-white shadow-md">
      <div className="container max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Image src="/background.jpg" alt="Logo" width={50} height={50} />
        </div>
        <div className="hidden md:flex justify-center items-center space-x-10">
          <Link href="/" className="text-black font-semibold hover:text-blue-500">
            HOME
          </Link>
          <Link href="/about" className="text-gray-500 hover:text-blue-500">
            ABOUT US
          </Link>
          <Link href="/services" className="text-gray-500 hover:text-blue-500">
            SERVICES
          </Link>
          <Link href="/gallery" className="text-gray-500 hover:text-blue-500">
            GALLERY
          </Link>
          <Link href="/booking" className="text-gray-500 hover:text-blue-500">
            CONTACT
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-500 hover:text-blue-500 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
            </svg>
          </button>
        </div>
      </div>
      <div
        ref={menuRef}
        className="md:hidden overflow-hidden transition-all duration-300 ease-in-out"
        style={{ height: '0px' }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/" className="block text-black font-semibold hover:text-blue-500">
            HOME
          </Link>
          <Link href="/about" className="block text-gray-500 hover:text-blue-500">
            ABOUT US
          </Link>
          <Link href="/services" className="block text-gray-500 hover:text-blue-500">
            SERVICES
          </Link>
          <Link href="/blog" className="block text-gray-500 hover:text-blue-500">
            BLOG
          </Link>
          <Link href="/contact" className="block text-gray-500 hover:text-blue-500">
            CONTACT
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
