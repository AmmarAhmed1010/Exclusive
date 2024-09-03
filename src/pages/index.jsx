"use client"
import React from 'react'
import { FaMobileAlt, FaLaptop, FaWatch, FaCamera, FaHeadphones, FaGamepad } from 'react-icons/fa';

const Index = () => {
  return (
    <div className='w-full'>
      {/* section1 */}
      <section className='flex flex-col md:flex-row justify-center md:px-20  mb-20 px-4 items-center w-full'>
        <div className="wrapper flex flex-col md:flex-row w-full">
          <div className="left w-full md:w-[217px] flex flex-col justify-between pt-8 md:pt-10 border-r pb-4 border-gray-300 md:mr-10 gap-2">
            <div className='flex justify-between pr-4 cursor-pointer'>
              <h3 className='text-sm md:text-[16px] leading-6'>Womans Fashion</h3>
              <img src="/index/icon-arrow-black.png" className='w-4 md:w-6' alt="" />
            </div>
            <div className='flex justify-between pr-4 cursor-pointer'>
              <h3 className='text-sm md:text-[16px] leading-6'>Mens Fashion</h3>
              <img src="/index/icon-arrow-black.png" className='w-4 md:w-6' alt="" />
            </div>
            <h3 className='text-sm md:text-[16px] leading-6'>Electronics</h3>
            <h3 className='text-sm md:text-[16px] leading-6'>Home & Lifestyle</h3>
            <h3 className='text-sm md:text-[16px] leading-6'>Medicine</h3>
            <h3 className='text-sm md:text-[16px] leading-6'>Sports & Outdoor</h3>
            <h3 className='text-sm md:text-[16px] leading-6'>Babys & Toys</h3>
            <h3 className='text-sm md:text-[16px] leading-6'>Groceries & Pets</h3>
            <h3 className='text-sm md:text-[16px] leading-6'>Health & Beauty</h3>
          </div>
          <div className="right md:h-[344px] pt-8 md:pt-10 w-full md:w-full mt-10 md:mt-0">
            <div className='bg-black p-4 flex w-full h-full justify-between flex-col md:flex-row'>
              <div className="left flex flex-col justify-center px-4 md:px-16 h-full w-full text-white">
                <div className='flex items-center justify-start gap-2 md:gap-4'>
                  <img src="/index/icon-apple.png" className='w-[35px] h-[35px] md:w-[49px] md:h-[49px]' alt="" />
                  <h3 className='text-sm md:text-[14px]'>iPhone 14 Series</h3>
                </div>
                <h1 className='text-[24px] md:text-[48px] font-bold leading-none'>Up to 10%</h1>
                <h1 className='text-[24px] md:text-[48px] font-bold leading-none'>off Voucher</h1>
                <div className='flex gap-2 md:gap-4 cursor-pointer'>
                  <h3 className='underline text-xs md:text-sm'>Shop Now</h3>
                  <img src="/index/icon-arrow-right.png" className='w-4 md:w-6' alt="" />
                </div>
              </div>
              <div className="w-full flex pt-4 md:pt-16 h-full">
                <img src="/index/hero.png" alt="" className='w-full h-auto object-contain' />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main */}
      <div className='w-full px-4 md:px-28'>
        {/* section3 */}
        <section className='border-t border-b border-gray-300 py-12 md:py-16 my-16 md:my-20'>
          <div className='w-full flex items-center gap-2 md:gap-4'>
            <div className='w-[15px] h-[30px] md:w-[20px] md:h-[40px] rounded bg-[#DB4444]'></div>
            <h3 className='text-[#DB4444] text-sm md:text-lg'>Categories</h3>
          </div>
          <div className='w-full flex justify-between flex-col md:flex-row'>
            <h1 className='text-[24px] md:text-[36px] font-bold mb-6 md:mb-8'>Browse By Category</h1>
            <div className='hidden md:block'>
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
          </div>
          <div className='w-full h-auto flex flex-wrap justify-between gap-4'>
            <div className='flex flex-col w-full md:w-[170px] border cursor-pointer border-gray-300 rounded justify-center items-center gap-2 md:gap-3 py-4 md:py-6 hover:bg-[#DB4444] duration-200 hover:text-white'>
              <FaMobileAlt className='h-[48px] w-[48px] md:h-[56px] md:w-[56px]' />
              <h3 className='text-sm md:text-lg font-medium'>Phones</h3>
            </div>
            <div className='flex flex-col w-full md:w-[170px] border cursor-pointer border-gray-300 rounded justify-center items-center gap-2 md:gap-3 py-4 md:py-6 hover:bg-[#DB4444] duration-200 hover:text-white'>
              <FaLaptop className='h-[48px] w-[48px] md:h-[56px] md:w-[56px]' />
              <h3 className='text-sm md:text-lg font-medium'>Computers</h3>
            </div>
            <div className='flex flex-col w-full md:w-[170px] border cursor-pointer border-gray-300 rounded justify-center items-center gap-2 md:gap-3 py-4 md:py-6 hover:bg-[#DB4444] duration-200 hover:text-white'>
              <FaCamera className='h-[48px] w-[48px] md:h-[56px] md:w-[56px]' />
              <h3 className='text-sm md:text-lg font-medium'>Camera</h3>
            </div>
            <div className='flex flex-col w-full md:w-[170px] border cursor-pointer border-gray-300 rounded justify-center items-center gap-2 md:gap-3 py-4 md:py-6 hover:bg-[#DB4444] duration-200 hover:text-white'>
              <FaHeadphones className='h-[48px] w-[48px] md:h-[56px] md:w-[56px]' />
              <h3 className='text-sm md:text-lg font-medium'>Headphones</h3>
            </div>
            <div className='flex flex-col w-full md:w-[170px] border cursor-pointer border-gray-300 rounded justify-center items-center gap-2 md:gap-3 py-4 md:py-6 hover:bg-[#DB4444] duration-200 hover:text-white'>
              <FaGamepad className='h-[48px] w-[48px] md:h-[56px] md:w-[56px]' />
              <h3 className='text-sm md:text-lg font-medium'>Gaming</h3>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Index;
