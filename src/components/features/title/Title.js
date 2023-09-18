import React from 'react'

export const Title = ({heading,dec}) => {
  return (
    <div className='flex pt-20 pb-14 flex-col font-titleFont gap-4'>
    <h3 className=' uppercase font-light text-designColor tracking-wide'>{heading}</h3>
    <h1 className='text-5xl text-gray-300 font-bold capitalize'>{dec}</h1>

    </div>
   
  )
}
