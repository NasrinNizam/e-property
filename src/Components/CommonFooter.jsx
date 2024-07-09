import React from 'react'
import { Footer } from './Footer'
import { FooterBody } from './FooterBody'
export const CommonFooter = () => {
  return (
    <div>
        
        <div className="flex justify-around w-full pt-[46px] bg-white rounded-[10px]">
         <div className=" ">
           <Footer head='About e-Property' />
           <FooterBody footer='About us'/>
           <FooterBody footer='Terms & Conditions'/>
           <FooterBody footer='Privacy Policy'/>
           <FooterBody footer='Testimonials'/>
           <FooterBody footer='Careers'/>
         </div>
         <div className=" ">
            <Footer head='About e-Property' />
            <FooterBody footer='Add your property'/>
            <FooterBody footer='Post your requirements'/>
            <FooterBody footer='Advertise with Us'/>
            <FooterBody footer='Premium Developers'/>
            <FooterBody footer='Careers'/>
      </div>
      <div className=" ">
            <Footer head='Customer Services' />
            <FooterBody footer='Frequently ask Question (FAQ)'/>
            <FooterBody footer='Live Chat'/>
            <FooterBody footer='Advertisement Tutorial'/>
            <FooterBody footer='Contact Us'/>
            <FooterBody footer='Email Us'/>
      </div>
      <div className="div">
        <button className=" mb-1 py-[14px] text-white px-8 bg-gradient-to-r from-[#006565] to-[#00A8A8] rounded-[50px] text-[16px] font-medium font-roboto ">Add a Property</button>
        <img className="w-[325px] h-[196px] " src="/images/building.png" alt="" />
      </div>
      </div>
    </div>
  )
}
