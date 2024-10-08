import React from 'react'
import { CommonSee } from './CommonSee'
import { FaArrowCircleRight } from "react-icons/fa";

export const Statistics = ({icon , heading }) => {
  return (
    <>
            <div className="flex gap-[14px] justify-center mb-[34px] items-center">
                <div className="image text-2xl ">{icon} </div>
                <h3 className="text-xl text-[#042727] font-poppins font-medium">{heading} </h3>
            </div>



    </>
  )
}
