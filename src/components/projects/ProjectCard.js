import React from 'react'
import { FaGlobe } from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'

const ProjectCard = ({title,des,src}) => {
  return (
    <div className='w-full px-6 h-auto py-10
     rounded-lg shadow-shadowOne flex flex-col
      bg-gradient-tor from-bodyColor 
      to[#202327] group hover:bg-gradient-to-b 
      hover:from-gray-900 hover:gray-900 transition-colors duration-1000'>
    <div className='w-full  h-[80%] overflow-hidden rounded-lg '>
    <img src={src} alt="" className='w-full h-40 group-hover:scale-110 duration-300 cursor-pointer'/>
    </div> 
    <div className='w-full mt-5 flex flex-col gap-5'>
      <div className="flex items-center justify-between">
       <h3 className='text-sm text-designColor'>{title}</h3>
      <div className='flex gap-2'>
        <span className='text-lg w-8 h-8 rounded-full bg-black inline-flex
        justify-center items-center text-gray-400 
        hover:text-designColor duration-300 cursor-pointer'><BsGithub/></span>
        <span className='text-lg w-8 h-8 rounded-full bg-black inline-flex
        justify-center items-center text-gray-400 
        hover:text-designColor duration-300 cursor-pointer'><FaGlobe/></span>
      </div>
      </div>
      <div>
       <p className='text-sm tracking-wide  hover:text-gray-100 duration-300'>{des}</p>       </div> 
      </div>  
      
     </div>
  )
}

export default ProjectCard