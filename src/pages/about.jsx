import React from 'react';
import Image from 'next/image'; // Importing Next.js Image component
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Importing Twitter, Instagram, and LinkedIn icons

const About = () => {
  return (
    <>
      <section className='w-full py-10 md:py-20 px-6 flex flex-col md:flex-row items-center justify-between gap-8'>
        {/* left */}
        <div className='flex-1 md:w-[525px]'>
          <h1 className='text-4xl md:text-[54px] mb-6 md:mb-8 font-semibold'>Our Story</h1>
          <p className='text-base md:text-[16px] leading-6 md:leading-[26px] mb-5'>
            Launched in 2015, Exclusive is South Asia's premier online shopping marketplace with an active presence in Bangladesh. Supported by a wide range of tailored marketing, data, and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the region.
          </p>
          <p className='text-base md:text-[16px] leading-6 md:leading-[26px]'>
            Exclusive has more than 1 Million products to offer, growing very fast. Exclusive offers a diverse assortment in categories ranging from consumer goods to electronics.
          </p>
        </div>
        {/* right */}
        <div className='flex-1 md:w-[705px]'>
          <Image src="/about/section1.png" width={705} height={430} alt="About Section" /> {/* Replaced img with Image */}
        </div>
      </section>

      <div className='w-full px-6 md:px-20 lg:px32'>
        {/* section2 */}
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 py-10'>
          {[{ imgSrc: "/about/icon_shop.png", count: "10.5k", text: "Sellers active on our site" },
            { imgSrc: "/about/Icon-Shopping bag.png", count: "33k", text: "Monthly Product Sale" },
            { imgSrc: "/about/Icon-Shopping bag.png", count: "45.5k", text: "Customers active on our site" },
            { imgSrc: "/about/Icon-Moneybag.png", count: "25k", text: "Annual gross sale on our site" }]
            .map((item, index) => (
              <div key={index} className="border border-black py-6 px-4 flex flex-col items-center">
                <div className="icon flex items-center justify-center w-[80px] h-[80px] bg-[#2F2E30] rounded-full">
                  <div className='w-[58px] h-[58px] bg-black rounded-full flex items-center justify-center'>
                    <Image src={item.imgSrc} width={40} height={40} alt="" /> {/* Replaced img with Image */}
                  </div>
                </div>
                <h1 className='text-2xl mt-4 mb-2 font-bold'>{item.count}</h1>
                <h4 className='text-center font-semibold'>{item.text}</h4>
              </div>
            ))}
        </div>

        {/* section3 */}
        <div className='flex flex-col md:flex-row w-full gap-8 py-10'>
          {[{ imgSrc: "/about/img1.png", name: "Tom Cruise", title: "Founder & Chairman" },
            { imgSrc: "/about/img2.png", name: "Emma Watson", title: "Managing Director" },
            { imgSrc: "/about/img3.png", name: "Will Smith", title: "Product Designer" }]
            .map((item, index) => (
              <div key={index} className='flex-1'>
                <div className='bg-[#F5F5F5] h-[430px]'>
                  <Image src={item.imgSrc} width={705} height={430} className='w-full h-full object-contain' alt={item.name} /> {/* Replaced img with Image */}
                </div>
                <h1 className='text-2xl mt-5 mb-2 font-bold'>{item.name}</h1>
                <h4 className='text-base mb-4'>{item.title}</h4>
                <div className="icons flex gap-3">
                  <FaTwitter className="w-6 h-6 cursor-pointer text-black" />
                  <FaInstagram className="w-6 h-6 cursor-pointer text-black" />
                  <FaLinkedin className="w-6 h-6 cursor-pointer text-black" />
                </div>
              </div>
            ))}
        </div>

        {/* section4 */}
        <div className='w-full px-4 md:px-20 py-10 flex flex-col md:flex-row justify-between gap-8'>
          {[{ iconSrc: "/about/icon_shop.png", title: "FREE AND FAST DELIVERY", text: "Free delivery for all orders over $140" },
            { iconSrc: "/about/Icon-Shopping bag.png", title: "24/7 CUSTOMER SERVICE", text: "Friendly 24/7 customer support" },
            { iconSrc: "/about/Icon-Shopping bag.png", title: "MONEY BACK GUARANTEE", text: "We return money within 30 days" }]
            .map((item, index) => (
              <div key={index} className="flex-1 py-6 flex flex-col items-center text-center">
                <div className="icon flex items-center justify-center w-[80px] h-[80px] bg-[#2F2E30] rounded-full">
                  <div className='w-[58px] h-[58px] bg-black rounded-full flex items-center justify-center'>
                    <Image src={item.iconSrc} width={40} height={40} alt="" /> {/* Replaced img with Image */}
                  </div>
                </div>
                <h1 className='text-lg mt-5 mb-3 font-bold'>{item.title}</h1>
                <h4 className='font-semibold'>{item.text}</h4>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default About;
