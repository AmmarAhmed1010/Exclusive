import { signIn } from 'next-auth/react'; // Import signIn for GitHub authentication
import Image from 'next/image';
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

        {/* Right GitHub Sign-In Section */}
        <div className="right w-full md:mr-20 lg:max-w-xl flex flex-col justify-center px-6">
          <h1 className="text-3xl font-semibold mb-4">Sign in with GitHub</h1>
          <p className="text-gray-600 mb-6">Use your GitHub account to sign in</p>

          {/* GitHub Sign-In Button */}
          <button 
            className="border border-gray-300 font-semibold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition-all"
            onClick={() => signIn('github')} // Trigger GitHub sign-in
          >
            <img src="/login/github-icon.png" alt="GitHub Icon" className="w-5 h-5" />
            Sign in with GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
