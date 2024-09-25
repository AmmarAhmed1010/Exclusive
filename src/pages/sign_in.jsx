import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
const sign_in = () => {
  return (
    <div className="w-full md:my-20 py-10 flex">
    <div className="main flex flex-col justify-between md:flex-row w-full">
      {/* Left Image Section */}
      <div className="left w-full h-full md:px-0 px-6 mb-6 md:mb-0">
        <Image 
          src="/login/sign-in.png" 
          alt="Sign In Illustration" 
          width={600} 
          height={300} 
          className="rounded-lg object-cover"
        />
      </div>

      {/* Right Form Section */}
      <div className="right w-full md:mr-20  lg:max-w-xl flex flex-col justify-center px-6">
        <h1 className="text-3xl font-semibold mb-4">Login in to Exclusive</h1>
        <h3 className="text-gray-600 mb-6">Enter your details below</h3>

        {/* Input Fields */}
        <div className="flex flex-col gap-8 mb-4">
          <input 
            type="email" 
            className="outline-none border-b-2 border-gray-300  py-2" 
            placeholder="Email or Phone Number" 
          />
          <input 
            type="password" 
            className="outline-none border-b-2 border-gray-300  transition-all py-2" 
            placeholder="Password" 
          />
        </div>
        <div className='w-full flex justify-between items-center'>
        {/* Sign In Button */}
       <Link href="/">
        <button className="bg-[#DB4444] text-white px-8 py-3 text-lg rounded">
          Login In
        </button>
        </Link>
        <a className='text-[#DB4444] hover:underline' href="">Forget Password?</a>

        </div>
      </div>
    </div>
  </div>
  )
}

export default sign_in
