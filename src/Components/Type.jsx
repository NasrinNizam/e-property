import React from 'react'

export const Type = ({icon , heading}) => {
  return (
    <div className="flex justity-center items-center gap-[14px] ">
        <img src={icon} alt="icon" />
        <h2 className="text-xl font-poppins font-normal text-[#006565] ">{heading} </h2>
    </div>
  )
}
