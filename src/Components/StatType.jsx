import React from 'react'
import { FaArrowCircleRight } from "react-icons/fa";


export const StatType = ({text , color}) => {
  return (
    <div className="flex gap-[25px] mb-4">
        <FaArrowCircleRight className={`${color}`} />
        <h4 className="text-[16px] font-poppins font-normal text-[#042727] hover:underline hover:decoration-solid">{text} </h4>
    </div>
  )
}
