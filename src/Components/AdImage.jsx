import React, { useEffect, useState } from 'react'
import { FaHeart } from "react-icons/fa";
import AllData from '../Products';
import { Keyword } from './Keyword';
import { SearchBar } from './SearchBar';
import { PiCrosshairThin } from "react-icons/pi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { PiNotebookFill } from "react-icons/pi";
import { FaRegBuilding } from "react-icons/fa";
import { Options } from './Options';
import { ImCross } from "react-icons/im";
import { ImageCard } from './ImageCard';
import { RoomDetail } from './RoomDetail';
import { Slider } from './Slider';
import { PropertySilder } from './PropertySilder';
export const AdImage = () => {


    const [data , setData] =useState(AllData)
    const handleData =(Products)=>{
        const filterData = AllData.filter((filterProducts)=>{
            return filterProducts.place == Products
        })
        setData(filterData)
        console.log(Products)
    }
    const [icon , setIcon] =useState(false)
    const colorchange =()=>{
        setIcon(!icon)
    }
        const [ads , setAds] =useState(true)
      
        const handleAds=()=>{
          setAds(!ads)
        }
  return (
    <>
      {/* ====== buttons start ==== */}
        <div className="flex justify-between items-center py-4 mb-[45px] w-full ">
            <div className="text">
                <h1 className="text-[20px] text-[#E8A713] font-poppins font-medium ">Sponsored</h1>
            </div>
            <div className="menu flex gap-5 items-center flex-wrap">
                <button onClick={()=> setData(AllData)} className="bg-[#C0DEDE] py-2 px-5 rounded-[5px] text-[16px] text-[#6D6D6D] font-medium font-poppins hover:text-[#006565] border-[2px] border-transparent  hover:bg-[#C0DEDE] hover:border-[2px] transition-all hover:border-[#006565] ">Dhaka</button>  
                <button onClick={()=>handleData('Basundhara R/A, Dhaka')} className="bg-[#C0DEDE] py-2 px-5 rounded-[5px] text-[16px] text-[#6D6D6D] font-medium font-poppins hover:text-[#006565] border-[2px] border-transparent  hover:bg-[#C0DEDE] hover:border-[2px] transition-all hover:border-[#006565] ">Bashundhara</button>
                <button onClick={()=>handleData('Uttara R/A, Dhaka')} className="bg-[#C0DEDE] py-2 px-5 rounded-[5px] text-[16px] text-[#6D6D6D] font-medium font-poppins hover:text-[#006565] border-[2px] border-transparent  hover:bg-[#C0DEDE] hover:border-[2px] transition-all hover:border-[#006565] ">Uttora</button> 
                <button onClick={()=>handleData('Dhanmandi R/A, Dhaka')} className="bg-[#C0DEDE] py-2 px-5 rounded-[5px] text-[16px] text-[#6D6D6D] font-medium font-poppins hover:text-[#006565] border-[2px] border-transparent  hover:bg-[#C0DEDE] hover:border-[2px] transition-all hover:border-[#006565] ">Dhanmondi</button>
                <button onClick={()=>handleData('Banani R/A, Dhaka')} className="bg-[#C0DEDE] py-2 px-5 rounded-[5px] text-[16px] text-[#6D6D6D] font-medium font-poppins hover:text-[#006565] border-[2px] border-transparent  hover:bg-[#C0DEDE] hover:border-[2px] transition-all hover:border-[#006565] ">Banani</button> 
                <button onClick={()=>handleData('Gulshan R/A, Dhaka')} className="bg-[#C0DEDE] py-2 px-5 rounded-[5px] text-[16px] text-[#6D6D6D] font-medium font-poppins hover:text-[#006565] border-[2px] border-transparent  hover:bg-[#C0DEDE] hover:border-[2px] transition-all hover:border-[#006565] ">Gulshan</button>
                <button onClick={()=>handleData('Nabinagar')} className="bg-[#C0DEDE] py-2 px-5 rounded-[5px] text-[16px] text-[#6D6D6D] font-medium font-poppins hover:text-[#006565] border-[2px] border-transparent  hover:bg-[#C0DEDE] hover:border-[2px] transition-all hover:border-[#006565] ">Nobinogor</button>  
                <button onClick={()=>handleData('Savar')} className="bg-[#C0DEDE] py-2 px-5 rounded-[5px] text-[16px] text-[#6D6D6D] font-medium font-poppins hover:text-[#006565] border-[2px] border-transparent  hover:bg-[#C0DEDE] hover:border-[2px] transition-all hover:border-[#006565] ">Savar</button>
                <button onClick={()=>handleData('more')} className="bg-[#C0DEDE] py-2 px-5 rounded-[5px] text-[16px] text-[#6D6D6D] font-medium font-poppins hover:text-[#006565] border-[2px] border-transparent  hover:bg-[#C0DEDE] hover:border-[2px] transition-all hover:border-[#006565] ">More..</button>                
            </div>
       </div>
       {/* ======= button end ===== */}
       {/* ======= Ad part start ===== */}

       <div className="w-full">
       {
          ads&&
          <div className="w-full">
            <div className=" w-full flex flex-wrap justify-between ">
                <ImageCard color='bg-[#FFBC00]' image='/images/building.png' place='Bashundhara R/A, Dhaka' detail='Luxury Condominium Apartment in Dhaka' bed='05' bath='03' size='2550' />
                <ImageCard color='bg-[#FFBC00]' image='/images/building.png' place='Bashundhara R/A, Dhaka' detail='Luxury Condominium Apartment in Dhaka' bed='05' bath='03' size='2550' />
                <ImageCard color='bg-[#FFBC00]' image='/images/building.png' place='Bashundhara R/A, Dhaka' detail='Luxury Condominium Apartment in Dhaka' bed='05' bath='03' size='2550' />
                <ImageCard color='bg-[#FFBC00]' image='/images/building.png' place='Bashundhara R/A, Dhaka' detail='Luxury Condominium Apartment in Dhaka' bed='05' bath='03' size='2550' />
            </div>
            <p onClick={handleAds} className="text-[16px] text-[#E8A713] font-poppins font-normal flex items-center justify-end gap-[10px] "> Close Ads <ImCross className="text-[9px] text-black "/>  </p>
          </div>
        }
       </div>
       {/* ======= Ad part end ====== */}

       {/* ====== search part start ===== */}
        <div className="w-full">
           <p className="text-[14px] text-[#E6A206] font-normal font-poppins underline decoration-solid ml-[55px] "> Clear</p>
           <div className="w-full mb-[47px] h-20 px-4 bg-[#DFEEEE] rounded-[40px] flex justify-between items-center ">
             <Keyword icon={<PiCrosshairThin />} head="Location" choice="Select city & country" rounded='rounded-tl-[40px]' option={<Options/>} />
             <Keyword icon={<FaRegCalendarAlt />} head="Rooms & Bathrooms" choice="Select rooms & bathrooms" option={<RoomDetail/>} />
             <Keyword icon={<PiNotebookFill />} head="Budget & Size" choice="Select your budget range" option={<PropertySilder/>} />
             <Keyword icon={<FaRegBuilding />} head="Property Type" choice="Select property types" />
             <SearchBar/>
           </div>
         </div>
       {/* ===== search part end ====== */}

       {/* ===== API image cards start ====== */}
     {
        data.map((item)=>(
             <div key={item.id} className={`imageCard pt-3 px-[15px] py-[17px] ${item.condition? 'bg-[#C0DEDE] border-[2px] border-[#006565]' : 'bg-[#fff] bg-opacity-65'} rounded-md w-[325px] mt-[25px] relative overflow-hidden`}>
             {item.condition &&
             <div className="w-[105px] h-[95px] bg-transparent absolute top-[15px] left-[-25px] ">
                 <h2 className="text-[16px] text-white font-poppins px-3 font-bold text-center -rotate-45 bg-[#006565] " >Urgent</h2>
             </div>
             }
             <img src="/images/building.png" alt="photo" />
             <h5 className="text-[14px] text-[#6D6D6D] font-poppins font-normal mb-1 mt-[14px] flex justify-between ">{item.place} <span className="text-[16px] text-[#FF7A85] font-poppins font-medium ">{item.condition&& 'ad'} </span> </h5>
             <h2 className=" mb-[11px]  text-[17px] text-[#042727] font-poppins font-medium ">{item.type} </h2>
             <div className="flex justify-between">
                 <div className="div1">
                     <div className="flex">
                         <img src="/images/bed.svg" alt="icon" />
                         <p className="text-[14px] text-black font-poppins font-black ">{item.bedroom} </p>
                     </div> 
                     <h4 className="text-[14px] text-[#6D6D6D] font-poppins font-normal ">Bedroom</h4>
                 </div>
                 <div className="div2">
                     <div className="flex">
                         <img src="/images/bath.svg" alt="icon" />
                         <p className="text-[14px] text-black font-poppins font-black ">{item.bathroom} </p>
                     </div> 
                     <h4 className="text-[14px] text-[#6D6D6D] font-poppins font-normal ">Bathroom</h4>
                 </div>
                 <div className="div3">
                     <div className="flex">
                         <img src="/images/sf.svg" alt="icon" />
                         <p className="text-[14px] text-black font-poppins font-black ">{item.size} </p>
                     </div> 
                     <h4 className="text-[14px] text-[#6D6D6D] font-poppins font-normal ">Flat Size(sft)</h4>
                 </div>  
             </div>
             <div onClick={colorchange} className="bg-white w-[30px] h-[30px] rounded-full flex justify-center items-center absolute top-[23px] right-[32px] ">
               {icon?  <FaHeart className="text-[#FF7A85]" /> : <FaHeart /> }
             </div>
         </div>
      ))
    }
    {/* ====== API image cards end ======= */}
    </>
  )
}
