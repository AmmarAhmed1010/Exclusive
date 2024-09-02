import React from 'react'

const contact = () => {
  return (
    <div className="wrapper flex flex-col lg:flex-row gap-8 w-full justify-center py-14 px-4">
      {/* left */}
      <div className="w-full lg:w-[340px] h-auto lg:h-[457px] flex flex-col px-8 py-8 shadow-xl">
        <div className="flex mb-5 items-center gap-4">
          <div className="h-[40px] w-[40px] rounded-3xl flex items-center justify-center bg-[#DB4444]">
            <img src="/contact/icon-phone.png" className="w-[20px] h-[20px]" />
          </div>
          <h1 className="text-[16px] font-medium">Call To Us</h1>
        </div>
        <h4 className="mb-2 text-[14px] font-normal">We are available 24/7, 7 days a week.</h4>
        <h4 className="text-[14px] font-normal">Phone: +8801611112222</h4>
        <hr className="my-8 border-none h-[1px] bg-black" />
        <div className="flex mb-5 items-center gap-4">
          <div className="h-[40px] w-[40px] rounded-3xl flex items-center justify-center bg-[#DB4444]">
            <img src="/contact/icon-email.png" className="w-[20px] h-[14px]" />
          </div>
          <h1 className="text-[16px] font-medium">Write To Us</h1>
        </div>
        <p className="mb-3 text-[14px] font-normal">Fill out our form and we will contact you within 24 hours.</p>
        <h4 className="mb-3 text-[14px] font-normal">Emails: customer@exclusive.com</h4>
        <h4 className="text-[14px] font-normal">Emails: support@exclusive.com</h4>
      </div>
      
      {/* right */}
      <div className="w-full lg:w-[800px] shadow-xl p-6 h-auto lg:h-[457px]">
        <div className="w-full flex flex-col lg:flex-row gap-4 justify-between mb-4">
          <input type="text" className="h-[50px] w-full lg:w-auto px-4 rounded-lg bg-[#F5F5F5]" placeholder="Your Name" />
          <input type="text" className="h-[50px] w-full lg:w-auto px-4 rounded-lg bg-[#F5F5F5]" placeholder="Your Email" />
          <input type="text" className="h-[50px] w-full lg:w-auto px-4 rounded-lg bg-[#F5F5F5]" placeholder="Your Phone" />
        </div>
        <div className="w-full mb-4">
          <textarea className="h-[207px] w-full px-4 pt-4 rounded-lg bg-[#F5F5F5]" placeholder="Your Message"></textarea>
        </div>
        <div className="w-full flex justify-end">
          <button className="bg-[#DB4444] px-[48px] py-[16px]">
            <h3 className="text-[14px] text-white">Send Message</h3>
          </button>
        </div>
      </div>
    </div>
  )
}

export default contact
