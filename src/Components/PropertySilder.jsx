import React from 'react'
import { Slider } from './Slider'
import { DoneButton } from './DoneButton'

export const PropertySilder = () => {
  return (
    <div className="p-5 bg-white w-[435px] h-[210px] ">
        <Slider text='Property size'/>
        <Slider text='Price (sqft)'/>
        <div className="flex justify-end items-center gap-5">
           <DoneButton font='font-poppins font-regular' bg='bg-[#DCE2E2]' color='text-black' text='Reset' />
           <DoneButton font='font-roboto font-bold' bg='bg-gradient-to-r from-[#F3C65D] to-[#E59F00]' color='text-white' text='Done' />
        </div>
    </div>
  )
}
