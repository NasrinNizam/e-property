import React, { useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { Type } from './Type';
import { CommonType } from './CommonType';
import { FaBuildingWheat } from "react-icons/fa6";
import { Statistics } from './Statistics';
import { IoSettingsOutline } from "react-icons/io5";
import { ImHammer2 } from "react-icons/im";
import { WhiteCard } from './WhiteCard';
import { MdMapsHomeWork } from "react-icons/md";
import { GrUserWorker } from "react-icons/gr";
import { PiBuildingApartmentFill } from "react-icons/pi";
import { FaCalendarAlt } from "react-icons/fa";
import { Place } from './Place';
import { CommonText } from './CommonText';
import { Location } from './Location';
import { CommonSee } from './CommonSee';
import { Link } from 'react-router-dom';
import { CommonImage } from './CommonImage';
import { CommonFooter } from './CommonFooter';
import { LastIcon } from './LastIcon';
import { PropertyType } from './PropertyType';

export const Home = () => {
  const [show , setShow] = useState(false)

  const handleShow=()=>{
    setShow(!show)
  }
  return (
    <>
    {/* section One part start */}
    <section className=" bg-[#F0F7F7] pt-[68px] ">
      <div className="container">
        <div className=" flex flex-col justify-center items-center mb-[113px] ">
          <div className="flex gap-[13px]">
            <img src="/images/land.svg" alt="icon" />
            <p> Bangladesh</p>
          </div>
          <div className="search-bar relative">
            <Link to="/searchPage"> <IoSearchOutline className=" text-white bg-[#006565] p-3 w-[60px] h-[60px] rounded-full absolute  top-[14px] right-[1px] " /></Link>
            <input className="mt-[12px] pt-[19px] pl-10 pb-[18px] pr-[652px] bg-white border-[2px] border-[#006565] rounded-[35px]" type="text" placeholder='What are you looking for?' />
          </div>
        </div>
      <div className="flex justify-evenly">
      <div className="single-type">
        <Type icon='/images/property.svg' heading='Property'/>
        <div className="flex gap-5 mt-4">
        <CommonType icons={<FaBuildingWheat />} text='Residential' number='5305' color='bg-[#FFBC00]' />
        <CommonType icons={<FaBuildingWheat />} text='Commercial' number='5305' color='bg-[#FFBC00]' />
        </div>
      </div>
      <div className="single-type">
        <Type icon='/images/land.svg' heading='Land'/>
        <div className="flex gap-5 mt-4">
        <CommonType icons={<FaBuildingWheat />} text='Land Share' number='5305' color='bg-[#006565]' />
        <CommonType icons={<FaBuildingWheat />} text='Plot' number='5305' color= 'bg-[#006565]'/>
        </div>
      </div>
      <div className="single-type">
        <Type icon='/images/Icon1.svg' heading='Tender'/>
        <div className="flex gap-5 mt-4">
        <CommonType icons={<FaBuildingWheat />} text='Government' number='5305' color='bg-[#FF7A85]' />
        <CommonType icons={<FaBuildingWheat />} text='Corporate' number='5305' color='bg-[#FF7A85]' />
        </div>
      </div>
      </div>
      <div className="mt-20 mb-[74px]">
        <div className="flex justify-between">
         <div className=" w-[440px] ">
         <div className="flex justify-between  ">
            <Statistics icon={<ImHammer2  className="text-[#006565]"/>} heading='Auction' />
            <CommonSee/>
          </div>
          <div className="mx-[22px]">
          <PropertyType color='text-[#E59F00]' text='Residential Flat' nbr='520' />
          <PropertyType color='text-[#E59F00]' text='Commercial Flat' nbr='520' />
          <PropertyType color='text-[#E59F00]' text='Residential Flat' nbr='520' />
          <PropertyType color='text-[#E59F00]' text='Commercial Flat' nbr='520' />
          <PropertyType color='text-[#E59F00]' text='Building & House' nbr='520' />
          <PropertyType color='text-[#E59F00]' text='Others..' nbr='520' />
          </div>
         </div>

         <div className="w-[440px]">
         <div className="flex justify-between ">
            <Statistics icon={<IoSettingsOutline className="text-[#006565]" />} heading='Services' />
            <CommonSee/>
          </div>
          <div className="mx-[22px]">
          <PropertyType color='text-[#006565]' text='Residential Flat' nbr='520' />
          <PropertyType color='text-[#006565]' text='Commercial Flat' nbr='520' />
          <PropertyType color='text-[#006565]' text='Residential Flat' nbr='520' />
          <PropertyType color='text-[#006565]' text='Commercial Flat' nbr='520' />
          <PropertyType color='text-[#006565]' text='Building & House' nbr='520' />
          <PropertyType color='text-[#006565]' text='Others..' nbr='520' />
          </div>
         </div>

          <div className="w-[440px] h-[290px]">
            <img className="w-full h-full border-[1px] border-solid border-[#E8A713]" src="/images/building.png" alt="photo" />
          </div>
        </div>
      </div>
      <div className="flex justify-between pb-[60px]">
        <WhiteCard icon={<MdMapsHomeWork className="text-[40px] " />} text='Ready Apartment' number='6985'/>
        <WhiteCard icon={<GrUserWorker className="text-[40px] " />} text='Ongoing Project' number='5462' />
        <WhiteCard icon={<PiBuildingApartmentFill className="text-[40px] " />} text='Used Apartment' number='1250' />
        <WhiteCard icon={<FaCalendarAlt className="text-[40px] " />} text='Upcoming Projects' number='5462' />
      </div>
    </div>
  </section>
  {/*section One part end  */}

  {/*section Two part start */}
  <section>
    <div className="container">
      <div className="w-full h-[124px] my-10 ">
        <img className="w-full h-full rounded-[10px] " src="/images/vector.jpg" alt="photo" />
      </div>
      <CommonText img="/images/land.svg" text='Find Properties by area in' bd='Bangladesh' />
      <div className="flex justify-between items-center flex-wrap gap-5 mb-[85px] ">
        <Place photo='/images/one.jpg'/>
        <Place photo='/images/two.jpg'/>
        <Place photo='/images/building.png'/>
        <Place photo='/images/three.jpg'/>
        <Place photo='/images/two.jpg'/>
        <Place photo='/images/one.jpg'/>
        <Place photo='/images/three.jpg'/>
        <Place photo='/images/building.png'/>
      </div>
      <CommonText img='/images/land.svg' text='Popular Property for Sale searches in' bd='Bangladesh' />
      <div className="flex flex-wrap items-center mb-[111px] justify-start gap-5 ">
        <Location bg='bg-[#C0DEDE] ' place='Used flat sale in Dhaka' />
        <Location bg='bg-[#F3ECC6] ' place='Flat For Sale In Bangladesh' />
        <Location bg='bg-[#F3DEE1] ' place='Used flat sale in Dhaka' />
        <Location bg='bg-[#C0DEDE] ' place='Uttara Properties for sale' />
        <Location bg='bg-[#F3ECC6] ' place='Bangladesh House For Sale' />
        <Location bg='bg-[#F3DEE1] ' place='Dhaka Office Apartments for sale' />
        <Location bg='bg-[#C0DEDE] ' place='Uttara Open Floor for sale' />
        <Location bg='bg-[#F3ECC6] ' place='Used flat sale in Dhaka' />
        <Location bg='bg-[#F3DEE1] ' place='Bayazid Properties for sale' />
        <Location bg='bg-[#C0DEDE] ' place='Used flat sale in Dhaka' />
        <Location bg='bg-[#F3ECC6] ' place='Bangladesh House For Sale' />
        <Location bg='bg-[#F3DEE1] ' place='Bangladesh House For Sale' />
        <Location bg='bg-[#C0DEDE] ' place='Used flat sale in Dhaka' />
        <Location bg='bg-[#F3ECC6] ' place='Flat For Sale In Bangladesh' />
        <Location bg='bg-[#F3DEE1] ' place='Used flat sale in Dhaka' />
        <Location bg='bg-[#C0DEDE] ' place='Uttara Open Floor for sale' />
        <Location bg='bg-[#F3ECC6] ' place='Bayazid Properties for sale' />
        <Location bg='bg-[#F3DEE1] ' place='Dhaka Office Apartments for sale' />
        <Location bg='bg-[#C0DEDE] ' place='Bangladesh House For Sale' />
        <Location bg='bg-[#F3ECC6] ' place='Used flat sale in Dhaka' />
      </div>
      <div className="flex flex-col justify-center items-center">
         <CommonText text='About E-' bd='Property'/>
         <div className="w-full pt-10 pl-[43px] pr-[46px] pb-[43px] mb-[79px] bg-[#F3ECC6] rounded-[5px] text-[#042727] text-[16px] font-poppins font-medium ">
           <p> Welcome to E-Property, your ultimate destination for buying and selling properties online. As a pioneering property marketplace, we strive to revolutionize the way people connect, transact, and fulfill their real estate dreams. With a passion for innovation and a commitment to excellence, E-Property is dedicated to providing you with an unmatched online experience.<br/><br/> At E-Property, we understand that the process of buying or selling a property can be overwhelming and time-consuming. That's why we've built a user-friendly platform that simplifies the entire journey. Whether you're a homeowner looking to sell your property or a buyer searching for your dream home, our intuitive interface and comprehensive tools make the process effortless and efficient.<br/></p>
           <Link to='#' onClick={handleShow} href='#' className="text-[16px] font-poppins font-normal text-[#006565] underline decoration-solid text-end pr-[22px] pb-[13px] ">{show? ' ' : 'see all' } </Link>
      {
           show &&
           <p>Our platform brings together a vast network of sellers, buyers, and real estate professionals, creating a vibrant marketplace where opportunities flourish. With our extensive database of properties, you'll gain access to a wide range of listings, ensuring that you can find the perfect property to suit your needs and preferences. From luxurious apartments and cozy houses to commercial spaces and land, E-Property caters to every aspect of the real estate market. We believe that trust and transparency are the foundation of any successful transaction. That's why we've implemented rigorous verification processes to ensure the credibility of our users. Sellers are thoroughly vetted, providing you with peace of mind when making your purchase. Additionally, we offer detailed property profiles, complete with high-resolution images, comprehensive descriptions, and accurate information, empowering you to make informed decisions. <br/><br/> E-Property is not just a platform; it's a community. Our dedicated customer support team is always ready to assist you, addressing any queries or concerns you may have along the way. We foster a collaborative environment where buyers and sellers can interact, negotiate, and forge meaningful connections. By facilitating open communication, we foster a sense of trust and build long-lasting relationships within our community. As we embrace the digital age, E-Property is at the forefront of technological advancements in the real estate industry. We leverage cutting-edge algorithms and data analytics to provide personalized recommendations and market insights. Our advanced search filters help you narrow down your options, saving you time and effort in finding your dream property. We also keep you informed about the latest trends, investment opportunities, and legal developments through our informative blog and newsletters.<br/><br/> E-Property is committed to continuously evolving and improving to meet the ever-changing needs of our users. We value your feedback and suggestions, as they drive our innovation and enable us to enhance your experience. Your success and satisfaction are our top priorities, and we strive to exceed your expectations at every step of your real estate journey. Welcome to E-Property, where buying and selling properties is made simple, secure, and enjoyable. Join our thriving community today and unlock a world of endless real estate possibilities. Together, let's redefine the way we navigate the property market in the digital era.</p>
      }
      </div>
      </div>
    </div>
  </section>
  {/* sectoin Two part end */}

  {/* sectoin Three part start */}
  <section className="bg-[#F0F7F7] ">
    <div className="container">
      <div className="py-[41px] flex justify-between items-center ">
        <h6 className="text-[20px] font-poppins font-medium text-[#042727] ">Top Vendors</h6>
        <CommonSee/>
      </div>
      <div className="flex justify-between flex-wrap gap-[23px] pb-[71px] ">
        <CommonImage logo='/images/logo.png'/>
        <CommonImage logo='/images/sa.png'/>
        <CommonImage logo='/images/route.jpg'/>
        <CommonImage logo='/images/bird.png'/>
        <CommonImage logo='/images/lorem.jpg'/>
        <CommonImage logo='/images/creative.jpg'/>
        <CommonImage logo='/images/mascot.jpg'/>
        <CommonImage logo='/images/connection.jpg'/>
        <CommonImage logo='/images/mascot.jpg'/>
        <CommonImage logo='/images/lorem.jpg'/>
        <CommonImage logo='/images/connection.jpg'/>
        <CommonImage logo='/images/logo.png'/>
        <CommonImage logo='/images/sa.png'/>
        <CommonImage logo='/images/route.jpg'/>
        <CommonImage logo='/images/bird.png'/>
        <CommonImage logo='/images/sa.png'/>
      </div>
      <CommonFooter/>
     <LastIcon/>
   </div>
  </section>
    {/* sectoin Three part end */}
    
    </>
  )
}
