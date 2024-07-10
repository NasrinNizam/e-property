import React from 'react'
import { FaArrowCircleRight } from "react-icons/fa";

export const PropertyType = ({color , text , nbr}) => {
  return (
    <>

        <div className=" flex justify-between">
          <div className="flex gap-[25px] mb-4">
           <FaArrowCircleRight className={`${color}`} />
           <h4 className="text-[16px] font-poppins font-normal text-[#042727] hover:underline hover:decoration-solid">{text} </h4>
         </div>
         <div className="text-[16px] text-[#042727] font-poppins font-medium mb-4">{nbr} </div>      
        </div>  


    </>
  )
}
