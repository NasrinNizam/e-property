import React from 'react'
import { FaSearch } from "react-icons/fa";

export const Options = () => {
  return (
    <div className=" pb-3 bg-white rounded-lg w-[430px] h-[456px] relative ">
     <FaSearch className="absolute top-5 left-3 translate-y-[-50%]" />
     <input type="text" list="options" placeholder=" Search your property location" className=" w-full py-[11px] pr-[138px] pl-[55px] border-[1px] border-[#DCE2E2] bg-white text-left "/>
        <datalist id="options">
            <option value="Use my current location"/>
            <option value="Option 2"/>
            <option value="Option 3"/>
            <option value="Option 4"/>
            <option value="Option 5"/>
        </datalist>
    </div>
  )
}
