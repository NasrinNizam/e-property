import React, { useState } from 'react'
import { FaHeart } from "react-icons/fa";

export const ImageCard = ({color, image , place , detail , bed , bath ,size}) => {

    const [icon , setIcon] = useState(false)

    const handleIcon =()=>{
        setIcon(!icon)
    }

  return (
    <div className={`pt-3 px-[15px] py-[17px] ${color} bg-opacity-20 rounded-md w-[325px] mt-[25px] relative `}>
        <img src={image} alt="photo" />
        <h5 className="text-[14px] text-[#6D6D6D] font-poppins font-normal mb-1 mt-[14px] ">{place} </h5>
        <h2 className=" mb-[11px]  text-[17px] text-[#042727] font-poppins font-medium ">{detail} </h2>
        <div className="flex justify-between">
            <div className="div1">
                <div className="flex">
                    <img src="/images/bed.svg" alt="icon" />
                    <p className="text-[14px] text-black font-poppins font-black ">{bed} </p>
                </div> 
                <h4 className="text-[14px] text-[#6D6D6D] font-poppins font-normal ">Bedroom</h4>
            </div>
            <div className="div1">
                <div className="flex">
                    <img src="/images/bath.svg" alt="icon" />
                    <p className="text-[14px] text-black font-poppins font-black ">{bath} </p>
                </div> 
                <h4 className="text-[14px] text-[#6D6D6D] font-poppins font-normal ">Bathroom</h4>
            </div>
            <div className="div1">
                <div className="flex">
                    <img src="/images/sf.svg" alt="icon" />
                    <p className="text-[14px] text-black font-poppins font-black ">{size} </p>
                </div> 
                <h4 className="text-[14px] text-[#6D6D6D] font-poppins font-normal ">Flat Size(sft)</h4>
            </div>  
        </div>
        <div onClick={handleIcon} className="bg-white w-[30px] h-[30px] rounded-full flex justify-center items-center absolute top-[23px] right-[32px] ">
        {icon?  <FaHeart className="text-[#FF7A85]" /> : <FaHeart /> }
        </div>
    </div>
  )
}
