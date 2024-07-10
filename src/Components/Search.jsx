import React, { useState } from 'react'
import { NavbarTwo } from './NavbarTwo'
import { ImageCard } from './ImageCard'
import { ImCross } from "react-icons/im";
import { Keyword } from './Keyword';
import { PiCrosshairThin } from "react-icons/pi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { PiNotebookFill } from "react-icons/pi";
import { FaRegBuilding } from "react-icons/fa";
import { SearchBar } from './SearchBar';
import { AdImage } from './AdImage';
import { CommonFooter } from './CommonFooter';
import { LastIcon } from './LastIcon';

export const Search = () => {
  const [ads , setAds] =useState(true)

  const handleAds=()=>{
    setAds(!ads)
  }
  return (
    <>
    <section className="bg-[#F0F7F7] ">
      <div className="container">
        <NavbarTwo/>
        <div className="flex justify-around mb-4">
          <ImageCard image='/images/building.png' color="bg-[#FFBC00] bg-opacity-20 " place="Bashundhara R/A, Dhaka"  detail="Luxury Condominium Apartment in Dhaka" bed='05' bath="05" size="2550" />
          <ImageCard image='/images/building.png' color="bg-[#FFBC00] bg-opacity-20 " place="Bashundhara R/A, Dhaka"  detail="Luxury Condominium Apartment in Dhaka" bed='05' bath="05" size="2550" />
          <ImageCard image='/images/building.png' color="bg-[#FFBC00] bg-opacity-20 " place="Bashundhara R/A, Dhaka"  detail="Luxury Condominium Apartment in Dhaka" bed='05' bath="05" size="2550" />
          <ImageCard image='/images/building.png' color="bg-[#FFBC00] bg-opacity-20 " place="Bashundhara R/A, Dhaka"  detail="Luxury Condominium Apartment in Dhaka" bed='05' bath="05" size="2550" />
        </div>
        {
          ads?
          <p onClick={handleAds} className="text-[16px] text-[#E8A713] font-poppins font-normal flex items-center justify-end gap-[10px] "> Close Ads <ImCross className="text-[9px] text-black "/>  </p>
          :
          ' '
        }
        <p className="text-[14px] text-[#E6A206] font-normal font-poppins underline decoration-solid ml-[55px] "> Clear</p>
        <div className="w-full pt-[15px] mb-[47px] px-4 pl-[22px] pb-4 bg-[#DFEEEE] rounded-[40px] flex justify-between items-center ">
          <Keyword icon={<PiCrosshairThin />} head="Location" choice="Select city & country" />
          <Keyword icon={<FaRegCalendarAlt />} head="Rooms & Bathrooms" choice="Select rooms & bathrooms" />
          <Keyword icon={<PiNotebookFill />} head="Budget & Size" choice="Select your budget range" />
          <Keyword icon={<FaRegBuilding />} head="Property Type" choice="Select property types" />
          <SearchBar/>
        </div>
        <div className="flex flex-wrap justify-around items-center pb-10">
          <AdImage photo='/images/building.png' bg='bg-[#C0DEDE]' border='border-[#006565]' location='Bashundhara R/A, Dhaka' details='Luxury Condominium Apartment in Dhaka' bed='05' bath='05' size='2550' urgent='bg-gradient-to-r from-[#006565] to-[#00A8A8]' />
          <ImageCard image='/images/building.png' color='bg-white bg-opacity-[67px]' place='Bashundhara R/A, Dhaka' detail='Luxury Condominium Apartment in Dhaka' bed='05' bath='05' size='2550' />
          <ImageCard image='/images/building.png' color='bg-white bg-opacity-[67px]' place='Bashundhara R/A, Dhaka' detail='Luxury Condominium Apartment in Dhaka' bed='05' bath='05' size='2550' />
          <ImageCard image='/images/building.png' color='bg-white bg-opacity-[67px]' place='Bashundhara R/A, Dhaka' detail='Luxury Condominium Apartment in Dhaka' bed='05' bath='05' size='2550' />
          <ImageCard image='/images/building.png' color='bg-white bg-opacity-[67px]' place='Bashundhara R/A, Dhaka' detail='Luxury Condominium Apartment in Dhaka' bed='05' bath='05' size='2550' />
          <ImageCard image='/images/building.png' color='bg-white bg-opacity-[67px]' place='Bashundhara R/A, Dhaka' detail='Luxury Condominium Apartment in Dhaka' bed='05' bath='05' size='2550' />
          <ImageCard image='/images/building.png' color='bg-white bg-opacity-[67px]' place='Bashundhara R/A, Dhaka' detail='Luxury Condominium Apartment in Dhaka' bed='05' bath='05' size='2550' />
          <AdImage photo='/images/building.png' bg='bg-[#F3ECC6] bg-opacity-[67%]' border='border-[#E8A713]' location='Bashundhara R/A, Dhaka' details='Luxury Condominium Apartment in Dhaka' bed='05' bath='05' size='2550' urgent='bg-gradient-to-r from-[#F3C65D] to-[#E59F00]' />
          <AdImage photo='/images/building.png' bg='bg-[#F3DEE1]' border='border-[#FF7A85]' location='Bashundhara R/A, Dhaka' details='Luxury Condominium Apartment in Dhaka' bed='05' bath='05' size='2550' urgent='bg-[#FF7A85] ' />
          <ImageCard image='/images/building.png' color='bg-white bg-opacity-[67%]' place='Bashundhara R/A, Dhaka' detail='Luxury Condominium Apartment in Dhaka' bed='05' bath='05' size='2550' />
          <ImageCard image='/images/building.png' color='bg-white bg-opacity-[67px]' place='Bashundhara R/A, Dhaka' detail='Luxury Condominium Apartment in Dhaka' bed='05' bath='05' size='2550' />
          <ImageCard image='/images/building.png' color='bg-white bg-opacity-[67px]' place='Bashundhara R/A, Dhaka' detail='Luxury Condominium Apartment in Dhaka' bed='05' bath='05' size='2550' />
          <ImageCard image='/images/building.png' color='bg-white bg-opacity-[67px]' place='Bashundhara R/A, Dhaka' detail='Luxury Condominium Apartment in Dhaka' bed='05' bath='05' size='2550' />
          <ImageCard image='/images/building.png' color='bg-white bg-opacity-[67px]' place='Bashundhara R/A, Dhaka' detail='Luxury Condominium Apartment in Dhaka' bed='05' bath='05' size='2550' />
          <ImageCard image='/images/building.png' color='bg-white bg-opacity-[67px]' place='Bashundhara R/A, Dhaka' detail='Luxury Condominium Apartment in Dhaka' bed='05' bath='05' size='2550' />
          <ImageCard image='/images/building.png' color='bg-white bg-opacity-[67px]' place='Bashundhara R/A, Dhaka' detail='Luxury Condominium Apartment in Dhaka' bed='05' bath='05' size='2550' />
          <ImageCard image='/images/building.png' color='bg-white bg-opacity-[67px]' place='Bashundhara R/A, Dhaka' detail='Luxury Condominium Apartment in Dhaka' bed='05' bath='05' size='2550' />
          <ImageCard image='/images/building.png' color='bg-white bg-opacity-[67px]' place='Bashundhara R/A, Dhaka' detail='Luxury Condominium Apartment in Dhaka' bed='05' bath='05' size='2550' />
          <ImageCard image='/images/building.png' color='bg-white bg-opacity-[67px]' place='Bashundhara R/A, Dhaka' detail='Luxury Condominium Apartment in Dhaka' bed='05' bath='05' size='2550' />
          <ImageCard image='/images/building.png' color='bg-white bg-opacity-[67px]' place='Bashundhara R/A, Dhaka' detail='Luxury Condominium Apartment in Dhaka' bed='05' bath='05' size='2550' />
        </div>
        <div className="pt-20"><CommonFooter/></div>
        <div className="div"><LastIcon/></div>
      </div>
    </section>


    </>
  )
}
