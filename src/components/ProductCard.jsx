import React from 'react';
import Link from 'next/link';

const ProductCard = ({ productId, image, title, price, originalPrice, rating, reviews }) => {
  return (
    <Link href={`/product/${productId}`} passHref>
      <div className='h-full pb-6 w-full bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer'>
        {/* Product Image */}
        <div className='w-full md:h-[250px] flex justify-center items-center bg-[#F5F5F5] p-4'>
          <img src={image} className='w-[140px] h-[146px] object-contain' alt={title} />
        </div>

        {/* Product Title */}
        <h1 className='text-black font-semibold md:font-bold text-sm md:text-lg mt-4 px-4 truncate'>{title}</h1>

        {/* Price Section */}
        <div className='flex gap-3 px-4 mt-2'>
          <h3 className='text-[#DB4444] font-semibold'>${price}</h3>
          {originalPrice && (
            <h3 className='font-semibold text-[#7D8184] line-through'>${originalPrice}</h3>
          )}
        </div>

        {/* Rating and Reviews */}
        <div className='flex md:flex flex-col gap-1 mt-2 px-4'>
          <div className='flex'>
          {Array(rating).fill().map((_, i) => (
            
            <img key={i} src="/index/star.png" className='w-4 h-4' alt="star" />
          ))}
          </div>
          <h3 className='text-[#7D8184] font-semibold  text-sm'>({reviews})</h3>      
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
