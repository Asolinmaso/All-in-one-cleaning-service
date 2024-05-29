"use client"
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const router = useRouter();
  const pathname = usePathname();

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close menu on mobile after clicking
    }
  };

  const handleHomeClick = () => {
    if (pathname === '/') {
      handleScroll('home');
    } else {
      router.push('/');
    }
  };

  useEffect(() => {
    if (isOpen) {
      menuRef.current.style.height = `${menuRef.current.scrollHeight}px`;
    } else {
      menuRef.current.style.height = '0px';
    }
  }, [isOpen]);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Image src="/logo.jpeg" alt="Logo" width={50} height={50} />
        </div>
        <div className="hidden md:flex justify-center items-center space-x-10">
          <button onClick={handleHomeClick} className="text-black font-semibold hover:text-blue-500">
            HOME
          </button>
          <button onClick={() => handleScroll('about')} className="text-gray-500 hover:text-blue-500">
            ABOUT US
          </button>
          <button onClick={() => handleScroll('services')} className="text-gray-500 hover:text-blue-500">
            SERVICES
          </button>
          <Link href="/gallery">
            <div className="text-gray-500 hover:text-blue-500">GALLERY</div>
          </Link>
          <Link href="/contact">
            <div className="text-gray-500 hover:text-blue-500">CONTACT</div>
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
          <button onClick={handleHomeClick} className="block text-black font-semibold hover:text-blue-500">
            HOME
          </button>
          <button onClick={() => handleScroll('about')} className="block text-gray-500 hover:text-blue-500">
            ABOUT US
          </button>
          <button onClick={() => handleScroll('services')} className="block text-gray-500 hover:text-blue-500">
            SERVICES
          </button>
          <Link href="/blog">
            <div className="block text-gray-500 hover:text-blue-500">BLOG</div>
          </Link>
          <Link href="/booking">
            <div className="block text-gray-500 hover:text-blue-500">CONTACT</div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
