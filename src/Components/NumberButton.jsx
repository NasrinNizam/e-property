import React from 'react'

export const NumberButton = ({number, icon}) => {
  return (
    <>
        
        <div className="flex gap-[10px] items-center text-sm mb-5">
          <div className="flex items-center gap-[6px]">
           {icon}
           <p>{number} </p>
          </div>
        <button className="px-[10px] py-[7px] bg-[#DCE2E2] rounded-md active:bg-gradient-to-r from-[#006565] to-[#00A8A8] active:text-white hover:bg-[#006565] hover:text-[#fff] ">1</button>
        <button className="px-[10px] py-[7px] bg-[#DCE2E2] rounded-md active:bg-gradient-to-r from-[#006565] to-[#00A8A8] active:text-white hover:bg-[#006565] hover:text-[#fff] ">2</button>
        <button className="px-[10px] py-[7px] bg-[#DCE2E2] rounded-md active:bg-gradient-to-r from-[#006565] to-[#00A8A8] active:text-white hover:bg-[#006565] hover:text-[#fff] ">3</button>
        <button className="px-[10px] py-[7px] bg-[#DCE2E2] rounded-md active:bg-gradient-to-r from-[#006565] to-[#00A8A8] active:text-white hover:bg-[#006565] hover:text-[#fff] ">4</button>
        <button className="px-[10px] py-[7px] bg-[#DCE2E2] rounded-md active:bg-gradient-to-r from-[#006565] to-[#00A8A8] active:text-white hover:bg-[#006565] hover:text-[#fff] ">5</button>
        <button className="px-[10px] py-[7px] bg-[#DCE2E2] rounded-md active:bg-gradient-to-r from-[#006565] to-[#00A8A8] active:text-white hover:bg-[#006565] hover:text-[#fff] ">6</button>
        <button className="px-[10px] py-[7px] bg-[#DCE2E2] rounded-md active:bg-gradient-to-r from-[#006565] to-[#00A8A8] active:text-white hover:bg-[#006565] hover:text-[#fff] ">7</button>
        <button className="px-[10px] py-[7px] bg-[#DCE2E2] rounded-md active:bg-gradient-to-r from-[#006565] to-[#00A8A8] active:text-white hover:bg-[#006565] hover:text-[#fff] ">8+</button>
        </div>
    
    </>
  )
}
