import React from 'react';

const Footer = () => {
  return (
    <div className="bg-black  text-white p-8">
      <div className="grid md:grid-cols-2  lg:grid-cols-5 gap-8">
        <div className="flex flex-col gap-3">
          <h1 className="text-[#FAFAFA] text-[24px] font-bold">Exclusive</h1>
          <h1 className="text-[#FAFAFA] text-[20px] font-medium">Subscribe</h1>
          <h3 className="text-[14px] text-[#FAFAFA]">Get 10% off your first order</h3>
          <div className="flex justify-between items-center border mr-7 border-white p-2">
            <input type="text" placeholder="Enter your email" className="bg-black text-white w-full px-2 py-1 outline-none" />
            <img src="/footer/icon-send.png" className="w-[24px] h-[24px]" alt="Send" />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-[#FAFAFA] text-[20px] font-medium">Support</h1>
          <h3 className="text-[14px] text-[#FAFAFA]">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</h3>
          <h3 className="text-[14px] text-[#FAFAFA]">exclusive@gmail.com</h3>
          <h3 className="text-[14px] text-[#FAFAFA]">+88015-88888-9999</h3>
        </div>
        <div className='hidden md:block'>
        <div className="flex  flex-col gap-3">
          <h1 className="text-[#FAFAFA] text-[20px] font-medium">Account</h1>
          <h3 className="text-[14px] text-[#FAFAFA]">My Account</h3>
          <h3 className="text-[14px] text-[#FAFAFA]">Login / Register</h3>
          <h3 className="text-[14px] text-[#FAFAFA]">Cart</h3>
          <h3 className="text-[14px] text-[#FAFAFA]">Wishlist</h3>
          <h3 className="text-[14px] text-[#FAFAFA]">Shop</h3>
        </div>
        </div>
        <div className='hidden md:block'>
        <div className="flex  flex-col gap-3">
          <h1 className="text-[#FAFAFA] text-[20px] font-medium">Quick Link</h1>
          <h3 className="text-[14px] text-[#FAFAFA]">Privacy Policy</h3>
          <h3 className="text-[14px] text-[#FAFAFA]">Terms Of Use</h3>
          <h3 className="text-[14px] text-[#FAFAFA]">FAQ</h3>
          <h3 className="text-[14px] text-[#FAFAFA]">Contact</h3>
        </div>
        </div>
        <div className='grid md:hidden grid-cols-2'>
        <div className="flex flex-col gap-3">
          <h1 className="text-[#FAFAFA] text-[20px] font-medium">Account</h1>
          <h3 className="text-[14px] text-[#FAFAFA]">My Account</h3>
          <h3 className="text-[14px] text-[#FAFAFA]">Login / Register</h3>
          <h3 className="text-[14px] text-[#FAFAFA]">Cart</h3>
          <h3 className="text-[14px] text-[#FAFAFA]">Wishlist</h3>
          <h3 className="text-[14px] text-[#FAFAFA]">Shop</h3>
        </div>

        <div className="flex flex-col gap-3">
          <h1 className="text-[#FAFAFA] text-[20px] font-medium">Quick Link</h1>
          <h3 className="text-[14px] text-[#FAFAFA]">Privacy Policy</h3>
          <h3 className="text-[14px] text-[#FAFAFA]">Terms Of Use</h3>
          <h3 className="text-[14px] text-[#FAFAFA]">FAQ</h3>
          <h3 className="text-[14px] text-[#FAFAFA]">Contact</h3>
        </div>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-[#FAFAFA] text-[20px] font-medium">Download App</h1>
          <h3 className="text-[14px] text-gray-400">Save $3 with App New User Only</h3>
          <div className="flex items-center">
            <div className="mr-3">
              <img src="/footer/Qr Code.png" className="w-[80px] h-[80px]" alt="QR Code" />
            </div>
            <div className="flex flex-col gap-2">
              <img src="/footer/GooglePlay.png" className="w-[104px]" alt="Google Play" />
              <img src="/footer/download-appstore.png" className="w-[104px]" alt="App Store" />
            </div>
          </div>
          <div className="flex gap-4 mt-4">
            <img src="/footer/icon-Facebook.png" className="w-[24px] h-[24px]" alt="Facebook" />
            <img src="/footer/icon-Twitter.png" className="w-[24px] h-[24px]" alt="Twitter" />
            <img src="/footer/icon-instagram.png" className="w-[24px] h-[24px]" alt="Instagram" />
            <img src="/footer/icon-Linkedin.png" className="w-[24px] h-[24px]" alt="LinkedIn" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
