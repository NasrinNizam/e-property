import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { VscChevronDown } from "react-icons/vsc";
import { IoSettingsOutline } from "react-icons/io5";

export const Navbar = () => {
    const [language , setLanguage] = useState(false)

    const handleAdd =()=>{
        setLanguage(!language)
    }



  return (
    <nav className="h-[80px] flex justify-center items-center bg-white border-[#006565] border-[1px] ">
        <div className="container">
           <div className="menu flex justify-between flex-wrap">
               <div className="logo flex justify-center items-center gap-1">
                   <img src="/images/home.svg" alt="icon" />
                   <h2 className=" text-xl font-medium font-poppins text-black "> e-Property </h2>
               </div>
               <div className="menu-row flex justify-center items-center gap-10">
                   <ul className="flex justify-center items-center gap-10 flex-wrap">
                       <li className="hover:underline hover:decoration-solid hover:decoration-2 hover:decoration-[#006565] text-[16px] font-semibold font-poppins text-[#006565]"><NavLink to="/"className={({ isActive }) =>isActive ? "flex justify-center items-center gap-[10px]  " : " flex justify-center items-center gap-[10px]"}> <img className="w-[17px] h-[17px]" src="/images/property.svg" alt="icon" /> Property</NavLink></li>

                       <li className="text-[16px] font-semibold font-poppins text-[#006565]"><NavLink to="/landPage"className={({ isActive }) =>isActive ? "flex justify-center items-center gap-[10px]  " : " flex justify-center items-center gap-[10px]"}> <img className="w-[17px] h-[17px]" src="/images/land.svg" alt="icon" /> Land</NavLink></li>

                       <li className="text-[16px] font-semibold font-poppins text-[#006565]"><NavLink to="/tenderPage"className={({ isActive }) =>isActive ? "flex justify-center items-center gap-[10px]  " : " flex justify-center items-center gap-[10px]"}> <img className="w-[17px] h-[17px]" src="/images/property.svg" alt="icon" /> Tender</NavLink></li>

                       <li className="text-[16px] font-semibold font-poppins text-[#006565]"><NavLink to="/auctionPage"className={({ isActive }) =>isActive ? "flex justify-center items-center gap-[10px]  " : " flex justify-center items-center gap-[10px]"}> <img className="w-[17px] h-[17px]" src="/images/Icon1.svg" alt="icon" /> Auction</NavLink></li>

                       <li className="text-[16px] font-semibold font-poppins text-[#006565]"><NavLink to="/servicePage"className={({ isActive }) =>isActive ? "flex justify-center items-center gap-[10px]  " : " flex justify-center items-center gap-[10px]"}> <IoSettingsOutline className="text-gradient-to-r from-[#006565] to-[#00A8A8]" /> Services</NavLink></li>
                   </ul>
                   <Link onClick={handleAdd} to="#" className=" text-white text-[16px] font-normal bg-gradient-to-r from-[#006565] to-[#00A8A8] py-[2px] px-[11px] rounded-[5px]"> {language? 'English' : 'বাংলা'} </Link>
                   <Link to="#" className="bg-[#F0F7F7] rounded-full w-[50px] h-[50px] flex justify-center items-center"><img  className="w-[23px] h-[28px] " src="/images/notification.svg" alt="icon" /></Link>
                   <div className="flex items-center">
                       <Link to="#" className=" w-[50px] h-[50px] rounded-full bg-[#F0F7F7] flex justify-center items-center gap-[10px] "> <img className="w-[21px] h-[24px] " src="/images/user.svg" alt="icon" /></Link>
                       <div className="ml-[10px] mr-[20px] ">
                          <h4 className="text-[16px] font-poppins font-semibold text-[#042727] ">Md Arman </h4>
                          <h6 className="text-[#042727] text-[14px] font-normal font-poppins ">Digital Marketer</h6>
                       </div>
                       <Link to="#" className="div"><VscChevronDown /></Link>
                   </div>
                   <Link to="#" className="flex flex-col items-end gap-2 ">
                    <div className="line1 w-[22px] h-[3px] bg-gradient-to-r from-[#006565] to-[#00A8A8] rounded-3xl "></div>
                    <div className="line2 w-[37px] h-[3px] bg-gradient-to-r from-[#FFBC00] to-[#C18D00] rounded-3xl"></div>
                    <div className="line3 w-[32px] h-[3px] bg-gradient-to-r from-[#006565] to-[#00A8A8] rounded-3xl"></div>
                   </Link>
               </div>
           </div>
        </div>
    </nav>
  )
}
