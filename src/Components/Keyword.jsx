import React from 'react'
import { IoIosArrowDown } from "react-icons/io";

export const Keyword = ({icon ,head , choice}) => {
  return (
    <>
    <div className="flex gap-[10px] items-center ">
        <div className="text-2xl text-[#006565] ">{icon}</div>
        <div className="div">
            <h3 className="text-[16px] text-[#042727] font-poppins font-medium flex gap-[10px] items-center ">{head} <IoIosArrowDown /> </h3>
            <h6 className="text-[16px] text-black opacity-70 font-poppins font-normal ">{choice} </h6>
        </div>
    </div>
    
    </>
  )
}
