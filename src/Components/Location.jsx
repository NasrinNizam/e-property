import React from 'react'

export const Location = ({bg , place}) => {
  return (
    <div className={` rounded-[10px] py-[10px] px-5 ${bg} text-[16px] font-poppins font-medium text-[#006565] `}>{place} </div>
  )
}
