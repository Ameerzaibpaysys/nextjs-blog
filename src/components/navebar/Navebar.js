import React from 'react'
import { navLinksData } from '@/constants'
export const Navebar = () => {
  return (
    <div className='sticky top-0 z-50 bg-bodyColor border-b-[1px] border-b-gray-600 font-titleFont w-full h-24 mx-auto flex justify-between items-center'>
      <div>
        <h1 className='text-5xl'>Zaib</h1>
      </div>
      <div>
        <ul className='flex items-center gap-10'>
          {navLinksData.map(({ _id, title, link }) => (
            <li
              className='text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300'
              key={_id}
            >
           <a href={`#${link}`}>{title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
