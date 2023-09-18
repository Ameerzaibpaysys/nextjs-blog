import React from 'react'

const Subtitle = ({heading,dec}) => {
  return (
    <div className='flex pt-20 pb-14 flex-col font-titleFont gap-4'>
    <h4 className=' uppercase pb-0 font-light text-designColor tracking-wide'>{heading}</h4>
    <h3 className='text-3xl pt-0 text-gray-300 font-bold capitalize'>{dec}</h3>
    </div>
  )
}

export default Subtitle