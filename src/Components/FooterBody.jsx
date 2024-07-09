import React from 'react'
import { FooterArow } from './FooterArow'

export const FooterBody = ({footer}) => {
  return (
    <>

    <div className="flex items-center gap-4 mb-2">
      <FooterArow/>
      <div className="text-[16px] text-[#042727] font-poppins font-normal ">{footer} </div>
    </div>
    
    
    
    </>
  )
}
