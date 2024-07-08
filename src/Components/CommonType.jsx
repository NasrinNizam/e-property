import React from 'react'

export const CommonType = ({icons , text , number , color}) => {
  return (
    <>
    
   <div className="flex">
   <div className={`flex gap-[17px] items-center p-[18px] ${color} w-[210px] bg-opacity-20 rounded-[5px]`}>
        <div className="icon w-[30px] h-[30px] ">{icons} </div>
        <div className="text ">
            <h3 className="text-[16px] font-poppins font-semibold text-black inline-block ">{text} </h3>
            <p className="text-sm font-poppins font-normal text-black">Available - <span className="text-sm text-black font-poppins font-bold">{number} </span></p>
        </div>
    </div>
    
    </div>
    
    
    </>
  )
}
