import React from 'react'
import { CommonSee } from './CommonSee'

export const WhiteCard = ({icon , text , number}) => {
  return (
    <div>
        <div className="w-[325px] h-[117px] bg-white rounded-[10px] border-2 border-[#006565]  ">
           <div className="flex gap-[10px] pt-[29px] pl-[30px] ">
           <div className=" ">
                {icon}
            </div>
            <div className="text">
                <h4 className="text-[16px] font-poppins font-medium text-[#042727] ">{text} </h4>
                <h5 className="text-[20px] text-[#042727] font-poppins font-bold ">{number} </h5>
            </div>
           </div>
           <div className="text-end">
           <CommonSee/>
           </div>
        </div>
    </div>
  )
}
