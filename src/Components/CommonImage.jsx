import React from 'react'

export const CommonImage = ({logo}) => {
  return (
    <div className="w-[150px] h-[150px] shadow-[0px 3px 10px #00000008] ">
        <img className=' rounded-[10px] h-full w-full' src={logo} alt="logo" />
    </div>
  )
}
