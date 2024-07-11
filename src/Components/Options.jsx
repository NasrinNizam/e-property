import React from 'react'
import { FaSearch } from "react-icons/fa";

export const Options = () => {
  return (
    <div className="px-7 pb-3 bg-white rounded-lg w-[430px] h-[560px] relative ">
     <FaSearch className="absolute top-[50%] left-3 translate-y-[-50%]" />
     <input type="text" list="options" placeholder=" Search your property location" className="w-full h-10 border-1 border-black text-left "/>
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
