"use client"
import { FaMobileAlt, FaLaptop, FaWatch, FaCamera, FaHeadphones, FaGamepad } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import ProductCard from '@/components/ProductCard';
import productsData from '@/productsData';
import newproductsData from '@/newproductsData';
import Link from 'next/link';
const Index = () => {

  // const products = [
  //   {
  //     image: "/index/item1.png",
  //     title: "The North Coat",
  //     price: 260,
  //     originalPrice: 360,
  //     rating: 5,
  //     reviews: 65,
  //   },
  //   {
  //     image: "/index/item2.png",
  //     title: "Another Product",
  //     price: 180,
  //     originalPrice: 250,
  //     rating: 4,
  //     reviews: 48,
  //   },
  //   // Add more products as needed
  // ];

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

        {/* section4 */}
        <section className='px-32 py-16'>
          <div className='w-full flex items-center gap-4'>
            <div className='w-[20px] h-[40px] rounded bg-[#DB4444]'></div>
            <h3 className='text-[#DB4444] text-lg'>This Month</h3>
          </div>
          <div className='w-full mt-2 flex justify-between'>
            <h1 className='text-[36px] font-bold mb-8'>Best Selling Products</h1>
            <div>
              <button className='bg-[#DB4444] rounded'>
                <h4 className='text-white text-lg font-medium px-10 py-4'>View All</h4>
              </button>

            </div>

          </div>

          <div className='w-full flex mb-20 justify-between'>
            {/* card1 */}
            <div className='grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
              {newproductsData.map((product, index) => (
                <ProductCard
                  key={index}
                  productId={index.toString()}  // Ensure this is passed as a string
                  image={product.image}
                  title={product.title}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  rating={product.rating}
                  reviews={product.reviews}
                />
              ))}
            </div>

          </div>

          <div className='w-full h-[500px] bg-black p-10 flex justify-between'>
            <div className="left">
              <h4 className='text-[#00FF66] text-lg mt-4 mb-4'>Categories</h4>
              <h1 className='text-white text-[48px] font-semibold'>Enhance Your</h1>
              <h1 className='text-white text-[48px] font-semibold mb-10'> Music Experience</h1>
              <div className='flex mb-10 gap-3'>
                <div className='w-[62px] h-[62px] bg-white rounded-[50%] flex flex-col justify-center items-center'>
                  <h3 className='font-bold'>23</h3>
                  <h3 className='font-semibold'>Hours</h3>
                </div>
                <div className='w-[62px] h-[62px] bg-white rounded-[50%] flex flex-col justify-center items-center'>
                  <h3 className='font-bold'>5</h3>
                  <h3 className='font-semibold'>Days</h3>
                </div>
                <div className='w-[62px] h-[62px] bg-white rounded-[50%] flex flex-col justify-center items-center'>
                  <h3 className='font-bold'>59</h3>
                  <h3 className='font-semibold'>Minutes</h3>
                </div>
                <div className='w-[62px] h-[62px] bg-white rounded-[50%] flex flex-col justify-center items-center'>
                  <h3 className='font-bold'>35</h3>
                  <h3 className='font-semibold'>Seconds</h3>
                </div>
              </div>
              <button className='bg-[#00FF66] px-8 py-2 rounded'>
                <h4 className='text-white'>Buy Now!</h4>
              </button>
            </div>
            <div className="right w-[60%] h-full flex justify-center items-center">
              <img src="/index/speaker.png" alt="" />
            </div>
          </div>
        </section>

        {/* section5 */}
        <section className='px-32 py-16'>
          <div className='w-full flex items-center gap-4'>
            <div className='w-[20px] h-[40px] rounded bg-[#DB4444]'></div>
            <h3 className='text-[#DB4444] text-lg'>Our Products</h3>
          </div>
          <div className='w-full flex justify-between'>
            <h1 className='text-[36px] font-bold mb-8'>Explore Our Products</h1>
            <div>
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
          </div>

          <div className='w-full flex mb-20 justify-between'>
            {/* card1 */}
            <div className='grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
              {newproductsData.map((product, index) => (
                <ProductCard
                  key={index}
                  productId={index.toString()}  // Ensure this is passed as a string
                  image={product.image}
                  title={product.title}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  rating={product.rating}
                  reviews={product.reviews}
                />
              ))}
            </div>

          </div>
          <div className='flex w-full justify-center items-center'>
            <button className='bg-[#DB4444]  rounded text-white '>
              <h3 className='px-8 py-4'>View All Products</h3>
            </button>
          </div>
        </section>


        {/* section6 */}
        <section>
          <div className='w-full px-4 md:px-20 py-10 flex flex-col md:flex-row justify-between gap-8'>
            {[{ iconSrc: "/about/icon_shop.png", title: "FREE AND FAST DELIVERY", text: "Free delivery for all orders over $140" },
            { iconSrc: "/about/Icon-Shopping bag.png", title: "24/7 CUSTOMER SERVICE", text: "Friendly 24/7 customer support" },
            { iconSrc: "/about/Icon-Shopping bag.png", title: "MONEY BACK GUARANTEE", text: "We return money within 30 days" }]
              .map((item, index) => (
                <div key={index} className="flex-1 py-6 flex flex-col items-center text-center">
                  <div className="icon flex items-center justify-center w-[80px] h-[80px] bg-[#2F2E30] rounded-full">
                    <div className='w-[58px] h-[58px] bg-black rounded-full flex items-center justify-center'>
                      <img src={item.iconSrc} className='w-[40px] h-[40px]' alt="" />
                    </div>
                  </div>
                  <h1 className='text-lg mt-5 mb-3 font-bold'>{item.title}</h1>
                  <h4 className='font-semibold'>{item.text}</h4>
                </div>
              ))}
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
          <div className='w-full grid grid-cols-2 justify-center items-center gap-8'>
            <div className='flex flex-col py-6 border cursor-pointer border-gray-300 rounded justify-center items-center gap-3 hover:bg-[#DB4444] duration-200 hover:text-white'>
              <FaMobileAlt className='h-[56px] w-[56px]' />
              <h3 className='text-lg font-medium'>Phones</h3>
            </div>
            <div className='flex flex-col py-6 border cursor-pointer border-gray-300 rounded justify-center items-center gap-3 hover:bg-[#DB4444] duration-200 hover:text-white'>
              <FaLaptop className='h-[56px] w-[56px]' />
              <h3 className='text-lg font-medium'>Computers</h3>
            </div>
            <div className='flex flex-col py-6 border cursor-pointer border-gray-300 rounded justify-center items-center gap-3 hover:bg-[#DB4444] duration-200 hover:text-white'>
              <FaCamera className='h-[56px] w-[56px]' />
              <h3 className='text-lg font-medium'>Camera</h3>
            </div>
            <div className='flex flex-col py-6 border cursor-pointer border-gray-300 rounded justify-center items-center gap-3 hover:bg-[#DB4444] duration-200 hover:text-white'>
              <FaHeadphones className='h-[56px] w-[56px]' />
              <h3 className='text-lg font-medium'>Headphones</h3>
            </div>
            <div className='flex flex-col py-6 border cursor-pointer border-gray-300 rounded justify-center items-center gap-3 hover:bg-[#DB4444] duration-200 hover:text-white'>
              <FaGamepad className='h-[56px] w-[56px]' />
              <h3 className='text-lg font-medium'>Gaming</h3>
            </div>
            <div className='flex flex-col py-6 border cursor-pointer border-gray-300 rounded justify-center items-center gap-3 hover:bg-[#DB4444] duration-200 hover:text-white'>
              <FaGamepad className='h-[56px] w-[56px]' />
              <h3 className='text-lg font-medium'>Gaming</h3>
            </div>
          </div>
        </section>


        {/* section4 */}
        <section className='px-6 py-8'>
          <div className='w-full flex items-center gap-4'>
            <div className='w-[20px] h-[40px] rounded bg-[#DB4444]'></div>
            <h3 className='text-[#DB4444] text-lg'>This Month</h3>
          </div>
          <div className='w-full mt-2 flex justify-between'>
            <h1 className='text-[20px] font-bold mb-8'>Best Selling Products</h1>
            <div>
              <button className='bg-[#DB4444] rounded'>
                <h4 className='text-white text-sm font-medium px-6 py-2'>View All</h4>
              </button>

            </div>

          </div>
          <div className='w-full flex mb-20 justify-between'>
            {/* card1 */}
            <div className='grid w-full grid-cols-2 gap-6'>
            {newproductsData.map((product, index) => (
                <ProductCard
                  key={index}
                  productId={index.toString()}  // Ensure this is passed as a string
                  image={product.image}
                  title={product.title}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  rating={product.rating}
                  reviews={product.reviews}
                />
              ))}
            </div>
          </div>
          <div className='w-full bg-black p-10 flex flex-col-reverse justify-between'>
            <div className="left">
              <h4 className='text-[#00FF66] text-lg mt-4 mb-4'>Categories</h4>
              <h1 className='text-white text-[48px] font-semibold'>Enhance Your</h1>
              <h1 className='text-white text-[48px] font-semibold mb-10'> Music Experience</h1>
              <div className='flex mb-10 gap-3'>
                <div className='w-[62px] h-[62px] bg-white rounded-[50%] flex flex-col justify-center items-center'>
                  <h3 className='font-bold'>23</h3>
                  <h3 className='font-semibold'>Hours</h3>
                </div>
                <div className='w-[62px] h-[62px] bg-white rounded-[50%] flex flex-col justify-center items-center'>
                  <h3 className='font-bold'>5</h3>
                  <h3 className='font-semibold'>Days</h3>
                </div>
                <div className='w-[62px] h-[62px] bg-white rounded-[50%] flex flex-col justify-center items-center'>
                  <h3 className='font-bold'>59</h3>
                  <h3 className='font-semibold'>Minutes</h3>
                </div>
                <div className='w-[62px] h-[62px] bg-white rounded-[50%] flex flex-col justify-center items-center'>
                  <h3 className='font-bold'>35</h3>
                  <h3 className='font-semibold'>Seconds</h3>
                </div>
              </div>
              <button className='bg-[#00FF66] px-8 py-2 rounded'>
                <h4 className='text-white'>Buy Now!</h4>
              </button>
            </div>
            <div className="right h-full flex justify-center items-center">
              <img src="/index/speaker.png" alt="" />
            </div>
          </div>
        </section>

        {/* section5 */}
        <section className='px-6 py-16'>
          <div className='w-full flex items-center gap-4'>
            <div className='w-[20px] h-[40px] rounded bg-[#DB4444]'></div>
            <h3 className='text-[#DB4444] text-lg'>Our Products</h3>
          </div>
          <div className='w-full flex justify-between'>
            <h1 className='text-[20px] font-bold mb-8'>Explore Our Products</h1>
            <div>
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
          </div>

          <div className='w-full flex mb-20 justify-between'>
            {/* card1 */}
            <div className='grid w-full grid-cols-2 gap-6'>
            {newproductsData.map((product, index) => (
                <ProductCard
                  key={index}
                  productId={index.toString()}  // Ensure this is passed as a string
                  image={product.image}
                  title={product.title}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  rating={product.rating}
                  reviews={product.reviews}
                />
              ))}
            </div>
          </div>
          <div className='flex w-full justify-center items-center'>
            <button className='bg-[#DB4444] text-lg rounded text-white '>
              <h3 className='px-8 py-2'>View All Products</h3>
            </button>
          </div>
        </section>


        {/* section6 */}
        <section>
          <div className='w-full px-6 md:px-20 py-10 flex flex-col md:flex-row justify-between gap-8'>
            {[{ iconSrc: "/about/icon_shop.png", title: "FREE AND FAST DELIVERY", text: "Free delivery for all orders over $140" },
            { iconSrc: "/about/Icon-Shopping bag.png", title: "24/7 CUSTOMER SERVICE", text: "Friendly 24/7 customer support" },
            { iconSrc: "/about/Icon-Shopping bag.png", title: "MONEY BACK GUARANTEE", text: "We return money within 30 days" }]
              .map((item, index) => (
                <div key={index} className="flex-1 py-6 flex flex-col items-center text-center">
                  <div className="icon flex items-center justify-center w-[80px] h-[80px] bg-[#2F2E30] rounded-full">
                    <div className='w-[58px] h-[58px] bg-black rounded-full flex items-center justify-center'>
                      <img src={item.iconSrc} className='w-[40px] h-[40px]' alt="" />
                    </div>
                  </div>
                  <h1 className='text-lg mt-5 mb-3 font-bold'>{item.title}</h1>
                  <h4 className='font-semibold'>{item.text}</h4>
                </div>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
