import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useRef, useEffect } from 'react';
import { FaBars, FaTimes, FaSignOutAlt, FaStar } from 'react-icons/fa'; // Importing necessary icons
import { motion } from 'framer-motion'; // Importing framer-motion for animations
import { CiUser } from "react-icons/ci";
import { MdOutlineCancel } from "react-icons/md";
const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to manage the dropdown visibility
  const dropdownRef = useRef(null); // Ref to the dropdown

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    // Add event listener to detect clicks outside the dropdown
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const isActive = (pathname) => router.pathname === pathname;

  return (
    <div className='w-full flex-col flex'>
      <header className='w-full h-[48px] flex justify-center items-center bg-black px-4 md:px-8'>
        <div className='w-full max-w-screen-lg flex justify-between items-center text-[#FAFAFA] text-[10px] md:text-[14px]'>
          <div className='flex gap-2 md:gap-4'>
            <h3 className='text-[#FAFAFA]'>
              Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            </h3>
            <a href="#" className='cursor-pointer text-white font-bold underline'>
              Shop Now
            </a>
          </div>
          <div className='flex gap-2 items-center'>
            <h3>English</h3>
            <img
              src="/navbar/icon_dropdown.png"
              className='cursor-pointer'
              alt="Dropdown Icon"
            />
          </div>
        </div>
      </header>

      <nav className='w-full flex items-center justify-between py-4 px-4 md:px-8'>
        {/* Hamburger and Search (for mobile view) */}
        <div className='md:hidden flex items-center justify-between w-full max-w-[500px] mx-auto'>
          <div className='flex-grow flex items-center justify-start'>
            <Link href="/">
              <h1 className='font-bold text-2xl font-serif cursor-pointer'>Exclusive</h1>
            </Link>
          </div>

          <div className='relative flex gap-3 items-center'>
            <img
              src="/navbar/icon_heart.png"
              className='w-5 h-5 cursor-pointer'
              alt="Wishlist Icon"
            />
            <img
              src="/navbar/icon_cart.png"
              className='w-6 h-6 cursor-pointer'
              alt="Cart Icon"
            />
            <img
              src="/navbar/icon_user.png"
              className='w-6 h-6 cursor-pointer'
              alt="User Icon"
              onClick={toggleDropdown} // Toggle dropdown visibility on click
            />
            <button onClick={toggleMenu} className='focus:outline-none'>
              <FaBars className='text-black w-6 h-6' />
            </button>
            {/* User Dropdown */}
            {isDropdownOpen && (
              <div
                ref={dropdownRef}
                className="absolute right-0 flex flex-col gap-3 top-6 bg-black mt-2 w-56 shadow-lg rounded-lg p-4"
              >
                <div className="flex items-center cursor-pointer gap-3">
                  <CiUser style={{ color: "#FAFAFA" }} className="w-[24px] h-[24px]" />
                  <h1 className="text-[#FAFAFA] text-[14px] font-normal">Manage My Account</h1>
                </div>
                <div className="flex items-center cursor-pointer gap-3">
                  <img src="/navbar/icon-mallbag.png" className="w-[24px] h-[24px]" alt="" />
                  <h1 className="text-[#FAFAFA] text-[14px] font-normal">My Order</h1>
                </div>
                <div className="flex items-center cursor-pointer gap-3">
                  <MdOutlineCancel style={{ color: "#FAFAFA" }} className="w-[24px] h-[24px]" />
                  <h1 className="text-[#FAFAFA] text-[14px] font-normal">My Cancellations</h1>
                </div>
                <div className="flex items-center cursor-pointer gap-3">
                  <FaStar style={{ color: "#FAFAFA" }} className="w-[24px] h-[24px]" />
                  <h1 className="text-[#FAFAFA] text-[14px] font-normal">My Reviews</h1>
                </div>
                <div className="flex items-center cursor-pointer gap-3">
                  <FaSignOutAlt style={{ color: "#FAFAFA" }} className="w-[24px] h-[24px]" />
                  <h1 className="text-[#FAFAFA] text-[14px] font-normal">Logout</h1>
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Logo, Links, Search, and Icons (for larger screens) */}
        <div className='hidden md:flex items-center justify-evenly w-full'>

          <Link href="/">
            <h1 className='font-bold text-2xl font-serif cursor-pointer'>Exclusive</h1>
          </Link>


          <div className='flex items-center gap-8'>
            <ul className='flex flex-row gap-8'>
              <li className={`text-[14px] md:text-[16px] pb-1 ${isActive('/') ? 'border-b-2 border-black' : ''}`}>
                <Link href="/">Home</Link>
              </li>
              <li className={`text-[14px] md:text-[16px] pb-1 ${isActive('/contact') ? 'border-b-2 border-black' : ''}`}>
                <Link href="/contact">Contact</Link>
              </li>
              <li className={`text-[14px] md:text-[16px] pb-1 ${isActive('/about') ? 'border-b-2 border-black' : ''}`}>
                <Link href="/about">About</Link>
              </li>
              <li className={`text-[14px] md:text-[16px] pb-1 ${isActive('/signup') ? 'border-b-2 border-black' : ''}`}>
                <Link href="/signup">Sign Up</Link>
              </li>
            </ul>

            <div className='flex-grow flex justify-center px-4'>
              <div className='flex gap-4 px-4 bg-[#F5F5F5] items-center w-full max-w-md'>
                <input
                  type="text"
                  className='w-full py-1 bg-[#F5F5F5] focus:outline-none placeholder:text-sm focus:ring-2 focus:ring-gray-400'
                  placeholder='What are you looking for?'
                />
                <img
                  src="/navbar/icon_search.png"
                  className='cursor-pointer'
                  alt="Search Icon"
                />
              </div>
            </div>

            <div className='relative flex items-center gap-4'>
              <img
                src="/navbar/icon_heart.png"
                className='w-5 cursor-pointer'
                alt="Wishlist Icon"
              />
              <img
                src="/navbar/icon_cart.png"
                className='w-6 cursor-pointer'
                alt="Cart Icon"
              />
              <img
                src="/navbar/icon_user.png"
                className='w-6 cursor-pointer'
                alt="User Icon"
                onClick={toggleDropdown} // Toggle dropdown visibility on click
              />
              {/* User Dropdown for larger screens */}
              {isDropdownOpen && (
                <div
                  ref={dropdownRef}
                  className="absolute right-0 flex flex-col gap-3 top-6 bg-black mt-2 w-56 shadow-lg rounded-lg p-4"
                >
                  <div className="flex items-center cursor-pointer gap-3">
                    <CiUser style={{ color: "#FAFAFA" }} className="w-[24px] h-[24px]" />
                    <h1 className="text-[#FAFAFA] text-[14px] font-normal">Manage My Account</h1>
                  </div>
                  <div className="flex items-center cursor-pointer gap-3">
                    <img src="/navbar/icon-mallbag.png" className="w-[24px] h-[24px]" alt="" />
                    <h1 className="text-[#FAFAFA] text-[14px] font-normal">My Order</h1>
                  </div>
                  <div className="flex items-center cursor-pointer gap-3">
                    <MdOutlineCancel style={{ color: "#FAFAFA" }} className="w-[24px] h-[24px]" />
                    <h1 className="text-[#FAFAFA] text-[14px] font-normal">My Cancellations</h1>
                  </div>
                  <div className="flex items-center cursor-pointer gap-3">
                    <FaStar style={{ color: "#FAFAFA" }} className="w-[24px] h-[24px]" />
                    <h1 className="text-[#FAFAFA] text-[14px] font-normal">My Reviews</h1>
                  </div>
                  <div className="flex items-center cursor-pointer gap-3">
                    <FaSignOutAlt style={{ color: "#FAFAFA" }} className="w-[24px] h-[24px]" />
                    <h1 className="text-[#FAFAFA] text-[14px] font-normal">Logout</h1>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>

        {/* Mobile Menu Pop-Up */}
        <motion.div
          className={`fixed top-0 right-0 w-full h-full bg-white shadow-lg z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'
            } transition-transform duration-300 ease-in-out`}
          initial={{ translateX: '100%' }}
          animate={{ translateX: isOpen ? '0%' : '100%' }}
          exit={{ translateX: '100%' }}
        >
          <div className='flex flex-col h-full p-4'>
            <button
              onClick={toggleMenu}
              className='self-end text-2xl text-black'
            >
              <FaTimes />
            </button>
            <h1 className='text-center text-3xl font-extrabold font-serif'>Exclusive</h1>
            <div className='flex-grow flex flex-col gap-4 items-center justify-center'>
              <div className='flex gap-2 px-2 bg-[#F5F5F5] items-center w-full max-w-s'>
                <input
                  type="text"
                  className='w-full py-1 h-[50px] bg-[#F5F5F5] focus:outline-none focus:ring-2 focus:ring-gray-400 placeholder:text-xs'
                  placeholder='Search'
                />
                <img
                  src="/navbar/icon_search.png"
                  className='cursor-pointer'
                  alt="Search Icon"
                />
              </div>
              <ul className='flex flex-col items-center gap-8'>
                <li className={`text-[20px] md:text-[16px] pb-1 ${isActive('/') ? 'border-b-2 border-black' : ''}`}>
                  <Link href="/" onClick={toggleMenu}>Home</Link>
                </li>
                <li className={`text-[20px] md:text-[16px] pb-1 ${isActive('/contact') ? 'border-b-2 border-black' : ''}`}>
                  <Link href="/contact" onClick={toggleMenu}>Contact</Link>
                </li>
                <li className={`text-[20px] md:text-[16px] pb-1 ${isActive('/about') ? 'border-b-2 border-black' : ''}`}>
                  <Link href="/about" onClick={toggleMenu}>About</Link>
                </li>
                <li className={`text-[20px] md:text-[16px] pb-1 ${isActive('/signup') ? 'border-b-2 border-black' : ''}`}>
                  <Link href="/signup" onClick={toggleMenu}>Sign Up</Link>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </nav>
    </div>
  );
};

export default Navbar;
