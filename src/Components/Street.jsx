import React from 'react'
import { CiLocationOn } from "react-icons/ci";

export const Street = ({streetName , detail}) => {
  return (
    <div className=" w-full flex items-center gap-6 py-[11px] pl-7 border-t-[1px] border-t-[#E8EEF4] border-b-[1px] border-b-[#E8EEF4] hover:bg-[#F8FBFA]">
        <CiLocationOn /> 
        <div className="div">
            <h3 className="text-[16px] font-roboto font-normal ">{streetName} </h3>
            <h4 className="text-[15px] font-roboto font-light text-[#7F7F7F] ">{detail} </h4>
        </div>
    </div>
  )
}
