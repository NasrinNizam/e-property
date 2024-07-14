import React, { useState } from 'react'
import { AdImage } from './AdImage';
import { CommonFooter } from './CommonFooter';
import { LastIcon } from './LastIcon';


export const Search = () => {
  return (
    <>
    <section className="bg-[#F0F7F7] ">
      <div className="container">
      
        <div className="flex justify-between flex-wrap">
          <AdImage  />

        </div>
        
        <div className="pt-20"><CommonFooter/></div>
        <div className="div"><LastIcon/></div>
      </div>
    </section>


    </>
  )
}
