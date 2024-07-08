import React from 'react'

export const Place = ({photo}) => {
  return (
    <div className="w-[325px] h-[144px] ">
        <img className="w-full h-full rounded-[10px] " src={photo} alt="photo" />
    </div>
  )
}
