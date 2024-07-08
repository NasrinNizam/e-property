import React from 'react'

export const CommonText = ({img , text , bd}) => {
  return (
    <>
      <div className="flex items-center gap-4 mb-[18px] ">
        <img src={img} alt="icon" />
        <h3 className="text-[20px] text-[#042727] font-poppins font-medium ">{text}  <span className="font-bold text-[#E8A713] ">{bd} </span></h3>
      </div>
    </>
  )
}
