import React from 'react'

export const ImageCard = () => {
  return (
    <div className="pt-3 px-[15px] py-[17px] bg-[#FFBC00] bg-opacity-20 rounded-md w-[325px] mt-[25px] ">
        <img src="/images/building.png" alt="photo" />
        <h5 className="text-[14px] text-[#6D6D6D] font-poppins font-normal mb-1 mt-[14px] ">Bashundhara R/A, Dhaka</h5>
        <h2 className=" mb-[11px]  text-[17px] text-[#042727] font-poppins font-medium ">Luxury Condominium Apartment in Dhaka</h2>
        <div className="flex justify-between">
            <div className="div1">
                <div className="flex">
                    <img src="/images/bed.svg" alt="icon" />
                    <p className="text-[14px] text-black font-poppins font-black ">05</p>
                </div> 
                <h4 className="text-[14px] text-[#6D6D6D] font-poppins font-normal ">Bedroom</h4>
            </div>
            <div className="div1">
                <div className="flex">
                    <img src="/images/bath.svg" alt="icon" />
                    <p className="text-[14px] text-black font-poppins font-black ">05</p>
                </div> 
                <h4 className="text-[14px] text-[#6D6D6D] font-poppins font-normal ">Bathroom</h4>
            </div>
            <div className="div1">
                <div className="flex">
                    <img src="/images/sf.svg" alt="icon" />
                    <p className="text-[14px] text-black font-poppins font-black ">2550</p>
                </div> 
                <h4 className="text-[14px] text-[#6D6D6D] font-poppins font-normal ">Flat Size(sft)</h4>
            </div>
           
        </div>
    </div>
  )
}
