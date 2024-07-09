import React from 'react'
import { IconCompo } from './IconCompo'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
export const LastIcon = () => {
  return (
    <div>
        <div className="mt-[23px] flex justify-around pb-5 ">
         <div className="logo flex justify-center items-center gap-1">
            <img src="/images/home.svg" alt="icon" />
            <h2 className=" text-xl font-medium font-poppins text-black "> e-Property </h2>
         </div>
         <div className="flex justify-center items-center gap-[15px] ">
          <IconCompo icon={<FaFacebookF className="text-[#006565]  " />} />
          <IconCompo icon={<FaTwitter className="text-[#006565]  " />} />
          <IconCompo icon={<FaLinkedinIn className="text-[#006565]  " />} />
          <IconCompo icon={<FaYoutube className="text-[#006565]  " />} />
          <IconCompo icon={<FaInstagramSquare className="text-[#006565]  " />} />
         </div>
         <div className="text-[20px] text-[#E8A713] font-normal ">Copyright © e-Property</div>
    </div>
    </div>
  )
}
