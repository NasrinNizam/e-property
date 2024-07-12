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



<div className={`flex gap-[10px] items-center relative p-3  ${detail? 'bg-white rounded-tl-[40px]' : 'bg-transparent' } `}>
<div className="text-2xl text-[#006565] ">{icon}</div>
  <div className="div relative">
    <h3 onClick={handleDetail} className="text-[16px] text-[#042727] font-poppins font-medium flex gap-[10px] items-center "> {head} <IoIosArrowDown /></h3>
    <h6 className="text-[16px] text-black opacity-70 font-poppins font-normal ">{choice} </h6>
</div>  
   {
     detail &&
     <div className=" z-10 p-6 bg-white absolute top-[93%] left-0 ">{option} </div>
    }
    </div>
    
    </>
  )
}
