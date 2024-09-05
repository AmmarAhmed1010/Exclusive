import React from 'react';
import Link from 'next/link';

const ProductCard = ({ productId, image, title, price, originalPrice, rating, reviews }) => {
  return (
    <Link href={`/product/${productId}`} passHref>
      <div className='h-[350px] w-full'>
        <div className='w-full md:h-[250px] flex justify-center items-center bg-[#F5F5F5]'>
          <img src={image} className='w-[140px] h-[146px]' alt={title} />
        </div>
        <h1 className='text-black font-bold text-lg mt-4 mb-2'>{title}</h1>
        <div className='flex gap-3'>
          <h3 className='text-[#DB4444] font-semibold'>${price}</h3>
          <h3 className='font-semibold text-[#7D8184]'>${originalPrice}</h3>
        </div>
        <div className='flex gap-1 mt-2 items-center'>
          {Array(rating).fill().map((_, i) => (
            <img key={i} src="/index/star.png" className='w-5 h-5' alt="star" />
          ))}
          <h3 className='text-[#7D8184] font-semibold ml-1 text-lg'>{reviews}</h3>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
