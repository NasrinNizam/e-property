import React from 'react'
import { StatType } from './StatType'
import { StatNumber } from './StatNumber'
import { CommonSee } from './CommonSee'

export const Statistics = ({icon , heading}) => {
  return (
    <>
    <div className="flex justify-between w-[440px]">
        <div className="">
            <div className="flex gap-[14px] mb-[34px] items-center">
                <div className="image w-[26px] h-[26px] ">{icon} </div>
                <h3 className="text-xl text-[#042727] font-poppins font-medium">{heading} </h3>
            </div>
            <div className="ml-[22px]">
              <StatType color='text-[#E59F00] ' text='Residential Flat'/>
              <StatType color='text-[#E59F00] ' text='Commercial Flat'/>
              <StatType color='text-[#E59F00] ' text='Residential Flat'/>
              <StatType color='text-[#E59F00] ' text='Commercial Flat' />
              <StatType color='text-[#E59F00] ' text='Building & House' />
              <StatType color='text-[#E59F00] ' text='Others..' />
            </div>
        </div>
        <div className=" ">
            <CommonSee/>
            <div className="mt-[35px]">
            <StatNumber nbr='520' />
            <StatNumber nbr='25' />
            <StatNumber nbr='79' />
            <StatNumber nbr='600' />
            <StatNumber nbr='352' />
            <StatNumber nbr='98' />
            </div>
        </div>
    </div>



    </>
  )
}
