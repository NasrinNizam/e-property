import React from 'react'

export const DoneButton = ({font , color , bg , text}) => {
  return (
    <div className={`px-8 py-[7px] rounded-[5px] text-sm ${font} ${color} ${bg} w-[97px] h-[30px] `}>{text}</div>
  )
}
