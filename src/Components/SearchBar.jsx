import React from 'react'
import { CiSearch } from "react-icons/ci";

export const SearchBar = () => {
  return (
    <>
    <div className=" relative">
        <div className="w-[50px] h-[50px] rounded-full bg-gradient-to-r from-[#006565] to-[#00A8A8] text-white text-[21px] absolute top-[50%] translate-y-[-50%] right-0 flex justify-center items-center "><CiSearch />        </div>
        <input className="w-[300px] py-[9px] pl-[15px] bg-white rounded-[20px] text-[16px] font-poppins font-normal text-[#6D6D6D]  " type='text' placeholder='Search by keywords'/>
    </div>
    
    </>
  )
}
