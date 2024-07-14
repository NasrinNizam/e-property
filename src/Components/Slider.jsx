import React from 'react'

export const Slider = ({text}) => {
  return (
    <div className="flex items-center justify-between gap-[33px] mb-10 ">
        <h4 className="text-[15px] font-poppins font-medium text-[#042727] ">{text}</h4>
        <input className="w-[262px] bg-[#009191] " type="range" />
    </div>
  )
}
