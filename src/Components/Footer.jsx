import React from 'react'
import { FooterBody } from './FooterBody';

export const Footer = ({head ,}) => {
  return (
    <>
       
        <div className="relative">
           <h3 className="text-[20px] font-poppins font-medium text-[#006565] mb-[23px] ">{head} </h3>
           <div className="line absolute top-[90%] left-0 w-[53px] h-[2px] bg-[#E8A713] "></div>
        </div>
       
        
    </>
  )
}
