import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SignUp = () => {
  return (
    <div className="w-full md:my-20 py-8 flex">
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
          <h1 className="text-3xl font-semibold mb-4">Create an account</h1>
          <h3 className="text-gray-600 mb-6">Enter your details below</h3>

          {/* Input Fields */}
          <div className="flex flex-col gap-8 mb-4">
            <input 
              type="text" 
              className="outline-none border-b-2 border-gray-300  py-2" 
              placeholder="Name" 
            />
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

          {/* Sign In Button */}
          <button className="bg-[#DB4444] text-white py-3 rounded-lg transition-all mb-4">
            Create Account
          </button>

          {/* Google Sign In */}
        

          <button className="border border-gray-300 font-semibold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition-all">
            <img src="/login/Icon-Google.png" alt="Google Icon" className="w-5 h-5" />
            Sign in with Google
          </button>
    

          {/* Already have an account */}
          <p className="text-gray-600 mt-4 text-center">
            Already have an account?{' '}
            <Link href="/sign_in" className="font-semibold hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
