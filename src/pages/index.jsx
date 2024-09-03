"use client"
import { FaMobileAlt, FaLaptop, FaWatch, FaCamera, FaHeadphones, FaGamepad } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';
import { FaChevronRight } from 'react-icons/fa';
const Index = () => {

  const [isOpen, setIsOpen] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-container')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='w-full'>
      {/* PC View */}
      <div className='hidden md:block'>
        {/* section1 */}
        <section className='flex justify-center px-20 mb-20 items-center w-full'>
          <div className="wrapper flex">
            <div className="left w-[217px] flex flex-col justify-between pt-10 border-r pb-4 border-gray-300 mr-10 gap-2">
              <div className='flex justify-between pr-4 cursor-pointer'>
                <h3 className='text-[16px] leading-6'>Womans Fashion</h3>
                <img src="/index/icon-arrow-black.png" className='w-6' alt="" />
              </div>
              <div className='flex justify-between pr-4 cursor-pointer'>
                <h3 className='text-[16px] leading-6'>Mens Fashion</h3>
                <img src="/index/icon-arrow-black.png" className='w-6' alt="" />
              </div>
              <h3 className='text-[16px] leading-6'>Electronics</h3>
              <h3 className='text-[16px] leading-6'>Home & Lifestyle</h3>
              <h3 className='text-[16px] leading-6'>Medicine</h3>
              <h3 className='text-[16px] leading-6'>Sports & Outdoor</h3>
              <h3 className='text-[16px] leading-6'>Babys & Toys</h3>
              <h3 className='text-[16px] leading-6'>Groceries & Pets</h3>
              <h3 className='text-[16px] leading-6'>Health & Beauty</h3>
            </div>
            <div className="right h-[344px] pt-10 w-[892px]">
              <div className='bg-black flex w-full h-full justify-between'>
                <div className="left flex flex-col justify-center px-16 h-full w-full text-white">
                  <div className='flex items-center justify-start gap-4'>
                    <img src="/index/icon-apple.png" className='w-[49px] h-[49px]' alt="" />
                    <h3 className='text-[14px]'>iPhone 14 Series</h3>
                  </div>
                  <h1 className='text-[48px] font-bold'>Up to 10%</h1>
                  <h1 className='text-[48px] font-bold'>off Voucher</h1>
                  <div className='flex gap-4 cursor-pointer'>
                    <h3 className='underline text-sm'>Shop Now</h3>
                    <img src="/index/icon-arrow-right.png" className='w-6' alt="" />
                  </div>
                </div>
                <div className="w-full flex pt-16 h-full">
                  <img src="/index/hero.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* section3 */}
        <section className='border-t border-b px-32 border-gray-300 py-16 my-20'>
          <div className='w-full flex items-center gap-4'>
            <div className='w-[20px] h-[40px] rounded bg-[#DB4444]'></div>
            <h3 className='text-[#DB4444] text-lg'>Categories</h3>
          </div>
          <div className='w-full flex justify-between'>
            <h1 className='text-[36px] font-bold mb-8'>Browse By Category</h1>
            <div>
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
          </div>
          <div className='w-full h-[145px] flex justify-between'>
            <div className='flex flex-col w-[170px] border cursor-pointer border-gray-300 rounded justify-center items-center gap-3 hover:bg-[#DB4444] duration-200 hover:text-white'>
              <FaMobileAlt className='h-[56px] w-[56px]' />
              <h3 className='text-lg font-medium'>Phones</h3>
            </div>
            <div className='flex flex-col w-[170px] border cursor-pointer border-gray-300 rounded justify-center items-center gap-3 hover:bg-[#DB4444] duration-200 hover:text-white'>
              <FaLaptop className='h-[56px] w-[56px]' />
              <h3 className='text-lg font-medium'>Computers</h3>
            </div>
            <div className='flex flex-col w-[170px] border cursor-pointer border-gray-300 rounded justify-center items-center gap-3 hover:bg-[#DB4444] duration-200 hover:text-white'>
              <FaCamera className='h-[56px] w-[56px]' />
              <h3 className='text-lg font-medium'>Camera</h3>
            </div>
            <div className='flex flex-col w-[170px] border cursor-pointer border-gray-300 rounded justify-center items-center gap-3 hover:bg-[#DB4444] duration-200 hover:text-white'>
              <FaHeadphones className='h-[56px] w-[56px]' />
              <h3 className='text-lg font-medium'>Headphones</h3>
            </div>
            <div className='flex flex-col w-[170px] border cursor-pointer border-gray-300 rounded justify-center items-center gap-3 hover:bg-[#DB4444] duration-200 hover:text-white'>
              <FaGamepad className='h-[56px] w-[56px]' />
              <h3 className='text-lg font-medium'>Gaming</h3>
            </div>
          </div>
        </section>
      </div>

      {/* Mobile View */}
      <div className='md:hidden'>
        {/* section1 */}
        <section className='flex px-6 w-full'>
          <div className="wrapper flex-col flex">


            {/* categories */}
            <div className="dropdown-container relative mt-6 w-full">
      <div 
        className="flex justify-between items-center w-full cursor-pointer bg-white border border-gray-300 p-4 rounded-md" 
        onClick={toggleDropdown}
      >
        <h3 className='text-[16px] leading-6'>Categories</h3>
        <FaChevronRight 
          className={`w-5 h-5 transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
        />
      </div>
      
      {/* Dropdown Menu */}
      <div className={`absolute left-0 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-md transition-all duration-300 ease-in-out origin-top ${isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'} transform`}>
        <div className="flex flex-col p-4">
          <div className='flex justify-between cursor-pointer'>
            <h3 className='text-[16px] leading-6'>Womans Fashion</h3>
          </div>
          <div className='flex justify-between cursor-pointer'>
            <h3 className='text-[16px] leading-6'>Mens Fashion</h3>
          </div>
          <h3 className='text-[16px] leading-6 cursor-pointer'>Electronics</h3>
          <h3 className='text-[16px] leading-6 cursor-pointer'>Home & Lifestyle</h3>
          <h3 className='text-[16px] leading-6 cursor-pointer'>Medicine</h3>
          <h3 className='text-[16px] leading-6 cursor-pointer'>Sports & Outdoor</h3>
          <h3 className='text-[16px] leading-6 cursor-pointer'>Babys & Toys</h3>
          <h3 className='text-[16px] leading-6 cursor-pointer'>Groceries & Pets</h3>
          <h3 className='text-[16px] leading-6 cursor-pointer'>Health & Beauty</h3>
        </div>
      </div>
    </div>
            {/* categories closes */}
            <div className="right pt-10 w-full">
              <div className='bg-black flex-col py-8 flex w-full h-full justify-between'>
                <div className="left flex flex-col justify-center px-16 h-full w-full text-white">
                  <div className='flex items-center justify-start gap-4'>
                    <img src="/index/icon-apple.png" className='w-[49px] h-[49px]' alt="" />
                    <h3 className='text-[14px]'>iPhone 14 Series</h3>
                  </div>
                  <h1 className='text-[20px] font-bold'>Up to 10%</h1>
                  <h1 className='text-[20px] font-bold'>off Voucher</h1>
                  <div className='flex gap-4 cursor-pointer'>
                    <h3 className='underline text-sm'>Shop Now</h3>
                    <img src="/index/icon-arrow-right.png" className='w-6' alt="" />
                  </div>
                </div>
                <div className="w-full flex pt-16 h-full">
                  <img src="/index/hero.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* section3 */}
        <section className='border-t border-b border-gray-300  px-6 py-16 my-20'>
          <div className='w-full flex items-center gap-4'>
            <div className='w-[20px] h-[40px] rounded bg-[#DB4444]'></div>
            <h3 className='text-[#DB4444] text-lg'>Categories</h3>
          </div>
          <div className='w-full flex justify-between'>
            <h1 className='text-[20px] font-bold mb-8'>Browse By Category</h1>
            <div>
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
          </div>
          <div className='w-full flex flex-col justify-center items-center gap-8'>
            <div className='flex flex-col  w-[170px] py-6 border cursor-pointer border-gray-300 rounded justify-center items-center gap-3 hover:bg-[#DB4444] duration-200 hover:text-white'>
              <FaMobileAlt className='h-[56px] w-[56px]' />
              <h3 className='text-lg font-medium'>Phones</h3>
            </div>
            <div className='flex flex-col w-[170px] py-6 border cursor-pointer border-gray-300 rounded justify-center items-center gap-3 hover:bg-[#DB4444] duration-200 hover:text-white'>
              <FaLaptop className='h-[56px] w-[56px]' />
              <h3 className='text-lg font-medium'>Computers</h3>
            </div>
            <div className='flex flex-col w-[170px] py-6 border cursor-pointer border-gray-300 rounded justify-center items-center gap-3 hover:bg-[#DB4444] duration-200 hover:text-white'>
              <FaCamera className='h-[56px] w-[56px]' />
              <h3 className='text-lg font-medium'>Camera</h3>
            </div>
            <div className='flex flex-col w-[170px] py-6 border cursor-pointer border-gray-300 rounded justify-center items-center gap-3 hover:bg-[#DB4444] duration-200 hover:text-white'>
              <FaHeadphones className='h-[56px] w-[56px]' />
              <h3 className='text-lg font-medium'>Headphones</h3>
            </div>
            <div className='flex flex-col w-[170px] py-6 border cursor-pointer border-gray-300 rounded justify-center items-center gap-3 hover:bg-[#DB4444] duration-200 hover:text-white'>
              <FaGamepad className='h-[56px] w-[56px]' />
              <h3 className='text-lg font-medium'>Gaming</h3>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
