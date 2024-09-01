import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa'; // Importing the hamburger icon

const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (pathname) => router.pathname === pathname;

  return (
    <div className='w-full flex-col flex'>
      <header className='w-full h-[48px] flex justify-center items-center lg:px-8 bg-black'>
        <div className='w-full lg:w-[70vw] xl:w-1/2 flex justify-between items-center text-[#FAFAFA] text-[12px] md:text-[14px] px-4 md:px-0'>
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

      <nav className='w-full flex items-center justify-between py-4 px-4 md:px-0'>
        {/* Hamburger and Search (for mobile view) */}
        <div className='md:hidden flex justify-between w-full'>
          
          <div className='flex justify-center flex-grow'>
            <div className='flex gap-4 px-4 bg-[#F5F5F5] items-center w-full max-w-xs'>
              <input
                type="text"
                className='w-full py-1 bg-[#F5F5F5] focus:outline-none focus:ring-2 focus:ring-gray-400'
                placeholder='What are you looking for?'
              />
              <img
                src="/navbar/icon_search.png"
                className='cursor-pointer'
                alt="Search Icon"
              />
            </div>
          </div>
          <button onClick={toggleMenu} className='focus:outline-none'>
            <FaBars className='text-black w-6 h-6' />
          </button>
        </div>

        {/* Logo, Links, Search, and Icons (for larger screens) */}
        <div className='hidden md:flex justify-evenly items-center w-full'>
          <div className='flex items-center'>
            <h1 className='text-[20px] md:text-[24px] font-bold text-black'>Exclusive</h1>
          </div>

          <div className='flex items-center gap-16'>
            <ul className='flex flex-row gap-4 md:gap-16'>
              <li className={`text-[14px] md:text-[16px] pb-1 ${isActive('/') ? 'border-b-2 border-black' : ''}`}>
                <Link href="/" onClick={toggleMenu}>Home</Link>
              </li>
              <li className={`text-[14px] md:text-[16px] pb-1 ${isActive('/contact') ? 'border-b-2 border-black' : ''}`}>
                <Link href="/contact" onClick={toggleMenu}>Contact</Link>
              </li>
              <li className={`text-[14px] md:text-[16px] pb-1 ${isActive('/about') ? 'border-b-2 border-black' : ''}`}>
                <Link href="/about" onClick={toggleMenu}>About</Link>
              </li>
              <li className={`text-[14px] md:text-[16px] pb-1 ${isActive('/signup') ? 'border-b-2 border-black' : ''}`}>
                <Link href="/signup" onClick={toggleMenu}>Sign Up</Link>
              </li>
            </ul>

            <div className='flex justify-center flex-grow px-4'>
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

            <div className='flex items-center gap-4'>
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
              />
            </div>
          </div>
        </div>

        {/* Links for mobile view */}
        <div className={`${
          isOpen ? 'block' : 'hidden'
        } md:hidden`}>
          <ul className='flex flex-col gap-4 mt-4'>
            <li className={`text-[14px] md:text-[16px] pb-1 ${isActive('/') ? 'border-b-2 border-black' : ''}`}>
              <Link href="/" onClick={toggleMenu}>Home</Link>
            </li>
            <li className={`text-[14px] md:text-[16px] pb-1 ${isActive('/contact') ? 'border-b-2 border-black' : ''}`}>
              <Link href="/contact" onClick={toggleMenu}>Contact</Link>
            </li>
            <li className={`text-[14px] md:text-[16px] pb-1 ${isActive('/about') ? 'border-b-2 border-black' : ''}`}>
              <Link href="/about" onClick={toggleMenu}>About</Link>
            </li>
            <li className={`text-[14px] md:text-[16px] pb-1 ${isActive('/signup') ? 'border-b-2 border-black' : ''}`}>
              <Link href="/signup" onClick={toggleMenu}>Sign Up</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
