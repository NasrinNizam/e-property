import React from 'react'
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import { Street } from './Street';

export const Options = () => {
  return (
    <div className=" pb-3 bg-white rounded-lg w-[430px] h-[456px] relative ">
     <FaSearch className="absolute top-5 left-3 translate-y-[-50%]" />
     <input type="text" list="options" placeholder=" Search your property location" className=" w-full py-[11px] pr-[138px] pl-[55px] border-[1px] border-[#DCE2E2] bg-white text-left "/>
        <ul>
          <li className="relative"><Link className="flex items-center justify-between" to='#'> <Street streetName='Use my Location'/> <IoIosArrowForward /></Link>
          <ul className="menu w-[250px] h-[300px] hidden absolute top-0 left-[100%] bg-white pt-5 pl-2 border-[1px] border-[#E8EEF4] ">
            <li className="mb-5"><Link to='#'>Option 1</Link></li>
            <li className="mb-5"><Link to='#'>Option 2</Link></li>
            <li className="mb-5"><Link to='#'>Option 3</Link></li>
            <li className="mb-5"><Link to='#'>Option 4</Link></li>
          </ul>
          </li>
          <li><Link className="flex items-center justify-between" to='#'> <Street streetName='Bake Street' detail='53 Dhanmondi, Dhaka 1200, Bangladesh'/></Link> </li>
          <li><Link className="flex items-center justify-between" to='#'> <Street streetName='Bake Street' detail='53 Dhanmondi, Dhaka 1200, Bangladesh'/></Link> </li>
          <li><Link className="flex items-center justify-between" to='#'> <Street streetName='Bake Street' detail='53 Dhanmondi, Dhaka 1200, Bangladesh'/></Link> </li>
          <li><Link className="flex items-center justify-between" to='#'> <Street streetName='Bake Street' detail='53 Dhanmondi, Dhaka 1200, Bangladesh'/></Link> </li>
          <li><Link className="flex items-center justify-between" to='#'> <Street streetName='Bake Street' detail='53 Dhanmondi, Dhaka 1200, Bangladesh'/></Link> </li>          
          
        </ul>
    </div>
  )
}
