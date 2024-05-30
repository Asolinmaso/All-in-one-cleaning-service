"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import useMobileView from "@/utils/customhooks";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const router = useRouter();
  const pathname = usePathname();

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close menu on mobile after clicking
    }
  };

  const handleHomeClick = () => {
    if (pathname === "/") {
      handleScroll("home");
    } else {
      router.push("/");
    }
  };

  useEffect(() => {
    if (isOpen) {
      menuRef.current.style.height = `${menuRef.current.scrollHeight}px`;
    } else {
      menuRef.current.style.height = "0px";
    }
  }, [isOpen]);
  const isMobile = useMobileView();
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Image src="/logo.jpeg" alt="Logo" width={50} height={50} />
        </div>
        {isMobile&&<div className="flex space-x-4 mt-4 items-center">
          <a
            href="https://wa.me/8825539047"
            aria-label="Whatsapp"
            className="text-white hover:text-gray-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 256 258"
            >
              <defs>
                <linearGradient
                  id="logosWhatsappIcon0"
                  x1="50%"
                  x2="50%"
                  y1="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#1faf38" />
                  <stop offset="100%" stopColor="#60d669" />
                </linearGradient>
                <linearGradient
                  id="logosWhatsappIcon1"
                  x1="50%"
                  x2="50%"
                  y1="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#f9f9f9" />
                  <stop offset="100%" stopColor="#fff" />
                </linearGradient>
              </defs>
              <path
                fill="url(#logosWhatsappIcon0)"
                d="M5.463 127.456c-.006 21.677 5.658 42.843 16.428 61.499L4.433 252.697l65.232-17.104a122.994 122.994 0 0 0 58.8 14.97h.054c67.815 0 123.018-55.183 123.047-123.01c.013-32.867-12.775-63.773-36.009-87.025c-23.23-23.25-54.125-36.061-87.043-36.076c-67.823 0-123.022 55.18-123.05 123.004"
              />
              <path
                fill="url(#logosWhatsappIcon1)"
                d="M1.07 127.416c-.007 22.457 5.86 44.38 17.014 63.704L0 257.147l67.571-17.717c18.618 10.151 39.58 15.503 60.91 15.511h.055c70.248 0 127.434-57.168 127.464-127.423c.012-34.048-13.236-66.065-37.3-90.15C194.633 13.286 162.633.014 128.536 0C58.276 0 1.099 57.16 1.071 127.416m40.24 60.376l-2.523-4.005c-10.606-16.864-16.204-36.352-16.196-56.363C22.614 69.029 70.138 21.52 128.576 21.52c28.3.012 54.896 11.044 74.9 31.06c20.003 20.018 31.01 46.628 31.003 74.93c-.026 58.395-47.551 105.91-105.943 105.91h-.042c-19.013-.01-37.66-5.116-53.922-14.765l-3.87-2.295l-40.098 10.513z"
              />
              <path
                fill="#fff"
                d="M96.678 74.148c-2.386-5.303-4.897-5.41-7.166-5.503c-1.858-.08-3.982-.074-6.104-.074c-2.124 0-5.575.799-8.492 3.984c-2.92 3.188-11.148 10.892-11.148 26.561c0 15.67 11.413 30.813 13.004 32.94c1.593 2.123 22.033 35.307 54.405 48.073c26.904 10.609 32.379 8.499 38.218 7.967c5.84-.53 18.844-7.702 21.497-15.139c2.655-7.436 2.655-13.81 1.859-15.142c-.796-1.327-2.92-2.124-6.105-3.716c-3.186-1.593-18.844-9.298-21.763-10.361c-2.92-1.062-5.043-1.592-7.167 1.597c-2.124 3.184-8.223 10.356-10.082 12.48c-1.857 2.129-3.716 2.394-6.9.801c-3.187-1.598-13.444-4.957-25.613-15.806c-9.468-8.442-15.86-18.867-17.718-22.056c-1.858-3.184-.199-4.91 1.398-6.497c1.431-1.427 3.186-3.719 4.78-5.578c1.588-1.86 2.118-3.187 3.18-5.311c1.063-2.126.531-3.986-.264-5.579c-.798-1.593-6.987-17.343-9.819-23.64"
              />
            </svg>
          </a>
          <a
            href="tel:8825539047"
            aria-label="Call"
            className="text-white hover:text-gray-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="green"
                d="m16.052 1.787l.966.261a7 7 0 0 1 4.93 4.934l.26.965l-1.93.521l-.261-.965a5 5 0 0 0-3.522-3.524l-.965-.262zM1 2h8.58l1.487 6.69l-1.86 1.86a14.08 14.08 0 0 0 4.243 4.242l1.86-1.859L22 14.42V23h-1a19.91 19.91 0 0 1-10.85-3.196a20.102 20.102 0 0 1-5.954-5.954A19.911 19.911 0 0 1 1 3zm2.027 2a17.894 17.894 0 0 0 2.849 8.764a18.102 18.102 0 0 0 5.36 5.36A17.892 17.892 0 0 0 20 20.973v-4.949l-4.053-.9l-2.174 2.175l-.663-.377a16.073 16.073 0 0 1-6.032-6.032l-.377-.663l2.175-2.174L7.976 4zm12.111 1.165l.966.261a3.5 3.5 0 0 1 2.465 2.467l.26.965l-1.93.521l-.261-.965a1.5 1.5 0 0 0-1.057-1.057l-.965-.261z"
              />
            </svg>{" "}
          </a>
        </div>}
        <div className="hidden md:flex justify-center items-center space-x-10">
          <button
            onClick={handleHomeClick}
            className={`${
              pathname === "/" ? "text-black font-semibold" : "text-gray-500"
            }  hover:text-blue-500`}
          >
            HOME
          </button>
          {pathname === "/"&&<button
            onClick={() => handleScroll("about")}
            className="text-gray-500 hover:text-blue-500"
          >
            ABOUT US
          </button>}
          {pathname === "/"&&<button
            onClick={() => handleScroll("services")}
            className="text-gray-500 hover:text-blue-500"
          >
            SERVICES
          </button>}
          <Link href="/gallery">
            <div
              className={`${
                pathname === "/gallery"
                  ? "text-black font-semibold"
                  : "text-gray-500"
              }  hover:text-blue-500`}
            >
              GALLERY
            </div>
          </Link>
          <Link href="/booking">
            <div
              className={`${
                pathname === "/booking"
                  ? "text-black font-semibold"
                  : "text-gray-500"
              }  hover:text-blue-500`}
            >
              CONTACT
            </div>
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-500 hover:text-blue-500 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div
        ref={menuRef}
        className="md:hidden overflow-hidden transition-all duration-300 ease-in-out"
        style={{ height: "0px" }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <button
            onClick={handleHomeClick}
            className="block text-black font-semibold hover:text-blue-500"
          >
            HOME
          </button>
                    
          {pathname === "/"&&<div><button
            onClick={() => handleScroll("about")}
            className="block text-gray-500 hover:text-blue-500"
          >
            ABOUT US
          </button>
          <button
            onClick={() => handleScroll("services")}
            className="block text-gray-500 hover:text-blue-500"
          >
            SERVICES
          </button></div>}
          <Link href="/gallery">
            <div className="block text-gray-500 hover:text-blue-500">BLOG</div>
          </Link>
          {!isMobile && (
            <Link href="/booking">
              <div className="block text-gray-500 hover:text-blue-500">
                CONTACT
              </div>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
