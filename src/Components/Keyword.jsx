import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

export const Keyword = ({icon ,head , choice , rounded , option}) => {
  const [detail , setDetail] =useState(false)
  const handleDetail = ()=>{
    setDetail(!detail)
  }
  return (
    <>
   {
   detail?
   <div className="relative">
    <div className={`flex gap-[10px] items-center bg-white p-[11px] ${rounded} rounded-md `}>
   <div className="text-2xl text-[#006565] ">{icon}</div>
     <div className="div">
       <h3 onClick={handleDetail} className="text-[16px] text-[#042727] font-poppins font-medium flex gap-[10px] items-center "> {head} <IoIosArrowUp />
       </h3>
       <h6 className="text-[16px] text-black opacity-70 font-poppins font-normal ">{choice} </h6>
   </div> 
  </div>
  <div className="absolute top-[100%] left-0 ">{option} </div>  
   </div>

:
<div className="flex gap-[10px] items-center ">
<div className="text-2xl text-[#006565] ">{icon}</div>
  <div className="div">
    <h3 onClick={handleDetail} className="text-[16px] text-[#042727] font-poppins font-medium flex gap-[10px] items-center "> {head} <IoIosArrowDown /></h3>
    <h6 className="text-[16px] text-black opacity-70 font-poppins font-normal ">{choice} </h6>
</div>  
</div>
   
   
   
   }
    
    </>
  )
}
