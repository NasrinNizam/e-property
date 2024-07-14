import React from 'react'
import { IoBedOutline } from "react-icons/io5";
import { NumberButton } from './NumberButton';
import { BiBath } from "react-icons/bi";
import { DoneButton } from './DoneButton';

export const RoomDetail = () => {
  return (
    <>
    <div>
    <div className="px-6 pt-4 pb-4 bg-white rounded-lg">
        <NumberButton number='Beds' icon={<IoBedOutline className="text-lg" />} />
        <NumberButton number='Baths' icon={<BiBath className="text-lg" />} />
        <div className="flex justify-end items-center gap-5">
           <DoneButton font='font-poppins' bg='bg-[#DCE2E2]' color='text-black' text='Reset' />
           <DoneButton font='font-roboto' bg='bg-gradient-to-r from-[#F3C65D] to-[#E59F00]' color='text-white' text='Done' />
        </div>
    </div>
    </div>
    
  </>
  )
}
