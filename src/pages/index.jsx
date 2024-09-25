"use client"
import { FaMobileAlt, FaLaptop, FaWatch, FaCamera, FaHeadphones, FaGamepad } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import ProductCard from '@/components/ProductCard';
import newproductsData from '@/newproductsData';
import Link from 'next/link';
const Index = () => {
  const [time, setTime] = useState({
    hours: 23,
    days: 5,
    minutes: 59,
    seconds: 35
  });

  // Function to update the countdown timer
  useEffect(() => {
    const countdown = setInterval(() => {
      const { hours, days, minutes, seconds } = time;

      if (seconds > 0) {
        setTime(prevTime => ({ ...prevTime, seconds: prevTime.seconds - 1 }));
      } else if (minutes > 0) {
        setTime(prevTime => ({
          ...prevTime,
          minutes: prevTime.minutes - 1,
          seconds: 59
        }));
      } else if (hours > 0) {
        setTime(prevTime => ({
          ...prevTime,
          hours: prevTime.hours - 1,
          minutes: 59,
          seconds: 59
        }));
      } else if (days > 0) {
        setTime(prevTime => ({
          ...prevTime,
          days: prevTime.days - 1,
          hours: 23,
          minutes: 59,
          seconds: 59
        }));
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, [time]);

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
        <section className='flex justify-center px-8 md:px-8 lg:px-20 mb-20 items-center w-full'>
          <div className="wrapper flex flex-col md:flex-row">
            <div className="left w-full md:w-[217px] flex flex-col justify-between pt-8 border-r pb-4 border-gray-300 mr-0 md:mr-10 gap-4">
              <div className='flex justify-between pr-4 cursor-pointer'>
                <h3 className='text-lg leading-6 font-semibold'>Womens Fashion</h3>
                <img src="/index/icon-arrow-black.png" className='w-6' alt="Arrow Icon" />
              </div>
              <div className='flex justify-between pr-4 cursor-pointer'>
                <h3 className='text-lg leading-6 font-semibold'>Mens Fashion</h3>
                <img src="/index/icon-arrow-black.png" className='w-6' alt="Arrow Icon" />
              </div>
              <h3 className='text-lg leading-6 font-semibold'>Electronics</h3>
              <h3 className='text-lg leading-6 font-semibold'>Home & Lifestyle</h3>
              <h3 className='text-lg leading-6 font-semibold'>Medicine</h3>
              <h3 className='text-lg leading-6 font-semibold'>Sports & Outdoor</h3>
              <h3 className='text-lg leading-6 font-semibold'>Baby & Toys</h3>
              <h3 className='text-lg leading-6 font-semibold'>Groceries & Pets</h3>
              <h3 className='text-lg leading-6 font-semibold'>Health & Beauty</h3>
            </div>
            <div className="right w-full md:w-[60vw] pt-8 md:pt-10">
              <div className='bg-black flex flex-col md:flex-row w-full h-full text-white'>
                <div className="left flex flex-col justify-center px-4 md:px-16 h-full w-full text-white">
                  <div className='flex items-center justify-start gap-4 mb-4'>
                    <img src="/index/icon-apple.png" className='w-12 h-12' alt="Apple Icon" />
                    <h3 className='text-sm md:text-base font-semibold'>iPhone 14 Series</h3>
                  </div>
                  <h1 className='md:text-3xl lg:text-5xl font-bold mb-2'>Up to 10%</h1>
                  <h1 className='md:text-3xl lg:text-5xl font-bold'>off Voucher</h1>
                  <div className='flex items-center gap-4 mt-4 cursor-pointer'>
                    <h3 className='underline text-sm md:text-base'>Shop Now</h3>
                    <img src="/index/icon-arrow-right.png" className='w-6' alt="Arrow Icon" />
                  </div>
                </div>
                <div className="right-image flex items-center justify-center w-full md:w-1/2 h-full pt-8">
                  <img src="/index/hero.png" alt="Hero Image" className='w-full h-auto' />
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* section3 */}
        <section className='border-t  border-b md:mx-8 lg:mx-20 border-gray-300 py-16 my-20'>
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
          <div className='w-full h-[145px] gap-4 flex justify-between'>
            <Link href="/category_phones" className=' flex'>
            <div className='flex flex-col lg:w-[150px] md:w-full border cursor-pointer border-gray-300 rounded justify-center items-center gap-3 hover:bg-[#DB4444] duration-200 hover:text-white'>
              <FaMobileAlt className='h-[56px] w-[56px]' />
              <h3 className='text-lg font-medium'>Phones</h3>
            </div>
            </Link>
            <Link href="/category_computers" className=' flex'>
            <div className='flex flex-col lg:w-[150px] md:w-full border cursor-pointer border-gray-300 rounded justify-center items-center gap-3 hover:bg-[#DB4444] duration-200 hover:text-white'>
              <FaLaptop className='h-[56px] w-[56px]' />
              <h3 className='text-lg font-medium'>Computers</h3>
            </div>
            </Link>
            <Link href="/category_camera" className=' flex'>
            <div className='flex flex-col lg:w-[150px] md:w-full border cursor-pointer border-gray-300 rounded justify-center items-center gap-3 hover:bg-[#DB4444] duration-200 hover:text-white'>
              <FaCamera className='h-[56px] w-[56px]' />
              <h3 className='text-lg font-medium'>Camera</h3>
            </div>
            </Link>
            <Link href="/category_headphones" className=' flex'>
            <div className='flex flex-col lg:w-[150px] md:w-full border cursor-pointer border-gray-300 rounded justify-center items-center gap-3 hover:bg-[#DB4444] duration-200 hover:text-white'>
              <FaHeadphones className='h-[56px] w-[56px]' />
              <h3 className='text-lg font-medium'>Headphones</h3>
            </div>
            </Link>
            <Link href="/category_gaming" className=' flex'>
            <div className='flex flex-col lg:w-[150px] md:w-full border cursor-pointer border-gray-300 rounded justify-center items-center gap-3 hover:bg-[#DB4444] duration-200 hover:text-white'>
              <FaGamepad className='h-[56px] w-[56px]' />
              <h3 className='text-lg font-medium'>Gaming</h3>
            </div>
            </Link>
          </div>
        </section>

        {/* section4 */}
        <section className='md:px-8 lg:px-20'>
          <div className='w-full flex items-center gap-4'>
            <div className='w-[20px] h-[40px] rounded bg-[#DB4444]'></div>
            <h3 className='text-[#DB4444] text-lg'>This Month</h3>
          </div>
          <div className='w-full mt-2 flex justify-between'>
            <h1 className='text-[36px] font-bold mb-8'>Best Selling Products</h1>
            <div>
              <Link href="/all-products">
                <button className='bg-[#DB4444] rounded'>
                  <h4 className='text-white text-lg font-medium px-10 py-4'>View All</h4>
                </button>
              </Link>
            </div>
          </div>

          <div className='w-full flex mb-20 justify-between'>
            {/* card1 */}
            <div className='grid w-full md:grid-cols-3 lg:grid-cols-4 gap-6'>
              {newproductsData
                .filter((product) => product.id >= 0 && product.id <= 3) // Filter products with IDs from 0 to 4
                .map((product) => (
                  <ProductCard
                    key={product.id} // Use product ID
                    productId={product.id.toString()} // Ensure this is passed as a string
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

          <div className='w-full bg-black p-16 md:p-20 flex flex-col md:flex-row justify-between items-center md:items-start'>
            {/* Left Section */}
            <div className="left text-center md:text-left w-full md:w-1/2">
              <h4 className='text-[#00FF66] text-lg md:text-xl mt-4 mb-4'>Categories</h4>
              <h1 className='text-white text-[40px] md:text-[54px] font-bold leading-tight'>Enhance Your</h1>
              <h1 className='text-white text-[40px] md:text-[54px] font-bold leading-tight mb-6 md:mb-10'>Music Experience</h1>

              {/* Countdown Timer */}
              <div className='flex justify-center md:justify-start mb-8 md:mb-12 gap-5'>
                <div className='w-[60px] h-[60px] md:w-[80px] md:h-[80px] bg-white rounded-full flex flex-col justify-center items-center'>
                  <h3 className='font-bold text-[18px] md:text-[22px]'>{time.hours}</h3>
                  <h3 className='font-semibold text-[14px] md:text-[16px]'>Hours</h3>
                </div>
                <div className='w-[60px] h-[60px] md:w-[80px] md:h-[80px] bg-white rounded-full flex flex-col justify-center items-center'>
                  <h3 className='font-bold text-[18px] md:text-[22px]'>{time.days}</h3>
                  <h3 className='font-semibold text-[14px] md:text-[16px]'>Days</h3>
                </div>
                <div className='w-[60px] h-[60px] md:w-[80px] md:h-[80px] bg-white rounded-full flex flex-col justify-center items-center'>
                  <h3 className='font-bold text-[18px] md:text-[22px]'>{time.minutes}</h3>
                  <h3 className='font-semibold text-[14px] md:text-[16px]'>Minutes</h3>
                </div>
                <div className='w-[60px] h-[60px] md:w-[80px] md:h-[80px] bg-white rounded-full flex flex-col justify-center items-center'>
                  <h3 className='font-bold text-[18px] md:text-[22px]'>{time.seconds}</h3>
                  <h3 className='font-semibold text-[14px] md:text-[16px]'>Seconds</h3>
                </div>
              </div>

              {/* Buy Now Button */}
              <button className='bg-[#00FF66] px-8 py-3 md:px-10 md:py-4 rounded-lg text-white text-[16px] md:text-[18px] font-semibold transition-all hover:bg-white hover:text-[#00FF66]'>
                Buy Now!
              </button>
            </div>

            {/* Right Section */}
            <div className="right w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
              <img src="/index/speaker.png" alt="Speaker" className='w-full max-w-[500px] md:max-w-[600px] h-auto' />
            </div>
          </div>

        </section>

        {/* section5 */}
        <section className='md:px-8 lg:px-20 py-16'>
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
              {newproductsData
                .filter((product) => product.id >= 0 && product.id <= 7) // Filter products with IDs from 0 to 4
                .map((product) => (
                  <ProductCard
                    key={product.id} // Use product ID
                    productId={product.id.toString()} // Ensure this is passed as a string
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
                <div className="left flex flex-col justify-center px-16 h-full  w-full text-white">
                  <div className='flex items-center justify-start gap-4'>
                    <img src="/index/icon-apple.png" className='w-[49px] h-[49px]' alt="" />
                    <h3 className='text-xl'>iPhone 14 Series</h3>
                  </div>
                  <h1 className='text-2xl font-bold'>Up to 10%</h1>
                  <h1 className='text-2xl font-bold'>off Voucher</h1>
                  <div className='flex gap-4 cursor-pointer'>
                    <h3 className='underline text-sm'>Shop Now</h3>
                    <img src="/index/icon-arrow-right.png" className='w-6' alt="" />
                  </div>
                </div>
                <div className="w-full px-8 flex pt-16 h-auto">
                  <img src="/index/hero.png" className='w-full h-auto' alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* section3 */}
        <section className='border-t border-b border-gray-300  mx-6 py-16 my-20'>
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
            <Link href="/category_phones">
            <div className='flex flex-col py-6 border cursor-pointer border-gray-300 rounded justify-center items-center gap-3 hover:bg-[#DB4444] duration-200 hover:text-white'>
              <FaMobileAlt className='h-[56px] w-[56px]' />
              <h3 className='text-lg font-medium'>Phones</h3>
            </div>
            </Link>
            <Link href="/category_computers">
            <div className='flex flex-col py-6 border cursor-pointer border-gray-300 rounded justify-center items-center gap-3 hover:bg-[#DB4444] duration-200 hover:text-white'>
              <FaLaptop className='h-[56px] w-[56px]' />
              <h3 className='text-lg font-medium'>Computers</h3>
            </div>
            </Link>
            <Link href="/category_camera">
            <div className='flex flex-col py-6 border cursor-pointer border-gray-300 rounded justify-center items-center gap-3 hover:bg-[#DB4444] duration-200 hover:text-white'>
              <FaCamera className='h-[56px] w-[56px]' />
              <h3 className='text-lg font-medium'>Camera</h3>
            </div>
            </Link>
            <Link href="/category_headphones">
            <div className='flex flex-col py-6 border cursor-pointer border-gray-300 rounded justify-center items-center gap-3 hover:bg-[#DB4444] duration-200 hover:text-white'>
              <FaHeadphones className='h-[56px] w-[56px]' />
              <h3 className='text-lg font-medium'>Headphones</h3>
            </div>
            </Link>
            <Link href="/category_gaming">
            <div className='flex flex-col py-6 border cursor-pointer border-gray-300 rounded justify-center items-center gap-3 hover:bg-[#DB4444] duration-200 hover:text-white'>
              <FaGamepad className='h-[56px] w-[56px]' />
              <h3 className='text-lg font-medium'>Gaming</h3>
            </div>
            </Link>
          </div>
        </section>


        {/* section4 */}
        <section className='px-6'>
          <div className='w-full flex items-center gap-4'>
            <div className='w-[20px] h-[40px] rounded bg-[#DB4444]'></div>
            <h3 className='text-[#DB4444] text-lg'>This Month</h3>
          </div>
          <div className='w-full mt-2 flex justify-between'>
            <h1 className='text-lg font-bold mb-8'>Best Selling Products</h1>
            <div>
              <Link href="/all-products">
                <button className='bg-[#DB4444] rounded'>
                  <h4 className='text-white text-sm font-medium py-2 px-4'>View All</h4>
                </button>
              </Link>
            </div>
          </div>
          <div className='w-full flex mb-20 justify-between'>
            {/* card1 */}
            <div className='grid w-full grid-cols-2 gap-6'>
            {newproductsData
    .filter((product) => product.id >= 0 && product.id <= 3) // Filter products with IDs from 0 to 4
    .map((product) => (
      <ProductCard
        key={product.id} // Use product ID
        productId={product.id.toString()} // Ensure this is passed as a string
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
          <div className='w-full bg-black p-10 flex flex-col md:flex-row justify-between'>
            <div className="left text-center md:text-left">
              <h4 className='text-[#00FF66] text-lg mt-4 mb-4'>Categories</h4>
              <h1 className='text-white text-[36px] md:text-[48px] font-semibold'>Enhance Your</h1>
              <h1 className='text-white text-[36px] md:text-[48px] font-semibold mb-6 md:mb-10'>Music Experience</h1>

              <div className='flex justify-center md:justify-start mb-6 md:mb-10 gap-3'>
                <div className='w-[60px] h-[60px] md:w-[70px] md:h-[70px] bg-white rounded-full flex flex-col justify-center items-center'>
                  <h3 className='font-bold text-[16px] md:text-[18px]'>{time.hours}</h3>
                  <h3 className='font-semibold text-[12px] md:text-[14px]'>Hours</h3>
                </div>
                <div className='w-[60px] h-[60px] md:w-[70px] md:h-[70px] bg-white rounded-full flex flex-col justify-center items-center'>
                  <h3 className='font-bold text-[16px] md:text-[18px]'>{time.days}</h3>
                  <h3 className='font-semibold text-[12px] md:text-[14px]'>Days</h3>
                </div>
                <div className='w-[60px] h-[60px] md:w-[70px] md:h-[70px] bg-white rounded-full flex flex-col justify-center items-center'>
                  <h3 className='font-bold text-[16px] md:text-[18px]'>{time.minutes}</h3>
                  <h3 className='font-semibold text-[12px] md:text-[14px]'>Minutes</h3>
                </div>
                <div className='w-[60px] h-[60px] md:w-[70px] md:h-[70px] bg-white rounded-full flex flex-col justify-center items-center'>
                  <h3 className='font-bold text-[16px] md:text-[18px]'>{time.seconds}</h3>
                  <h3 className='font-semibold text-[12px] md:text-[14px]'>Seconds</h3>
                </div>
              </div>

              <button className='bg-[#00FF66] px-6 md:px-8 py-2 rounded transition-all hover:bg-white hover:text-[#00FF66]'>
                <h4 className='text-white'>Buy Now!</h4>
              </button>
            </div>

            <div className="right h-full flex justify-center items-center mt-8 md:mt-0">
              <img src="/index/speaker.png" alt="Speaker" className='max-w-full h-auto' />
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
            {newproductsData
    .filter((product) => product.id >= 0 && product.id <= 7) // Filter products with IDs from 0 to 4
    .map((product) => (
      <ProductCard
        key={product.id} // Use product ID
        productId={product.id.toString()} // Ensure this is passed as a string
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
            <Link href="/all-products">
              <button className='bg-[#DB4444] text-lg rounded text-white '>
                <h3 className='px-8 py-2'>View All Products</h3>
              </button>
            </Link>
          </div>
        </section>


        {/* section6 */}
        <section>
          <div className='w-full px-6 md:px-20 pb-10 flex flex-col md:flex-row justify-between gap-8'>
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
