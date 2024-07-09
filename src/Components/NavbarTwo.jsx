import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavbarTwo = () => {
  return (
    <nav className="bg-transparent py-4 ">
        <div className="container">
            <div className="flex justify-between items-center">
            <div className="text">
                <h1 className="text-[20px] text-[#E8A713] font-poppins font-medium ">Sponsored</h1>
            </div>
            <div className="menu">
                <ul className="flex gap-5 items-center flex-wrap">
                    <li><NavLink to="#"className={({ isActive }) =>isActive ? "bg-[#C0DEDE] border-1 border-[#006565] py-2 px-5 rounded-[5px] text-[16px] text-[#006565] font-medium font-poppins " : "bg-[#C0DEDE] py-2 px-5 rounded-[5px] text-[16px] text-[#6D6D6D] font-medium font-poppins"}>Dhaka</NavLink></li>
                    <li><NavLink to="#"className={({ isActive }) =>isActive ? "bg-[#C0DEDE] border-1 border-[#006565] py-2 px-5 rounded-[5px] text-[16px] text-[#006565] font-medium font-poppins " : "bg-[#C0DEDE] py-2 px-5 rounded-[5px] text-[16px] text-[#6D6D6D] font-medium font-poppins"}>Bashundhara</NavLink></li>
                    <li><NavLink to="#"className={({ isActive }) =>isActive ? "bg-[#C0DEDE] border-1 border-[#006565] py-2 px-5 rounded-[5px] text-[16px] text-[#006565] font-medium font-poppins " : "bg-[#C0DEDE] py-2 px-5 rounded-[5px] text-[16px] text-[#6D6D6D] font-medium font-poppins"}>Uttara</NavLink></li>
                    <li><NavLink to="#"className={({ isActive }) =>isActive ? "bg-[#C0DEDE] border-1 border-[#006565] py-2 px-5 rounded-[5px] text-[16px] text-[#006565] font-medium font-poppins " : "bg-[#C0DEDE] py-2 px-5 rounded-[5px] text-[16px] text-[#6D6D6D] font-medium font-poppins"}>Dhanmondi</NavLink></li>
                    <li><NavLink to="#"className={({ isActive }) =>isActive ? "bg-[#C0DEDE] border-1 border-[#006565] py-2 px-5 rounded-[5px] text-[16px] text-[#006565] font-medium font-poppins " : "bg-[#C0DEDE] py-2 px-5 rounded-[5px] text-[16px] text-[#6D6D6D] font-medium font-poppins"}>Banani</NavLink></li>
                    <li><NavLink to="#"className={({ isActive }) =>isActive ? "bg-[#C0DEDE] border-1 border-[#006565] py-2 px-5 rounded-[5px] text-[16px] text-[#006565] font-medium font-poppins " : "bg-[#C0DEDE] py-2 px-5 rounded-[5px] text-[16px] text-[#6D6D6D] font-medium font-poppins"}>Gulshan</NavLink></li>
                    <li><NavLink to="#"className={({ isActive }) =>isActive ? "bg-[#C0DEDE] border-1 border-[#006565] py-2 px-5 rounded-[5px] text-[16px] text-[#006565] font-medium font-poppins " : "bg-[#C0DEDE] py-2 px-5 rounded-[5px] text-[16px] text-[#6D6D6D] font-medium font-poppins"}>Savar</NavLink></li>
                    <li><NavLink to="#"className={({ isActive }) =>isActive ? "bg-[#C0DEDE] border-1 border-[#006565] py-2 px-5 rounded-[5px] text-[16px] text-[#006565] font-medium font-poppins " : "bg-[#C0DEDE] py-2 px-5 rounded-[5px] text-[16px] text-[#6D6D6D] font-medium font-poppins"}>Nobinogor</NavLink></li>
                    <li><NavLink to="#"className={({ isActive }) =>isActive ? "bg-[#C0DEDE] border-1 border-[#006565] py-2 px-5 rounded-[5px] text-[16px] text-[#006565] font-medium font-poppins " : "bg-[#C0DEDE] py-2 px-5 rounded-[5px] text-[16px] text-[#6D6D6D] font-medium font-poppins"}>More..</NavLink></li>
                </ul>
            </div>
            </div>
        </div>
    </nav>
  )
}
