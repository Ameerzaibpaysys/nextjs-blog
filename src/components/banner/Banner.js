import React from 'react'
import Typewriter from 'typewriter-effect/dist/core';
import {FaFacebookF, FaTwitter, FaLinkedinIn, FaReact} from "react-icons/fa";
import {SiTailwindcss, SiFigma, SiNextdotjs} from "react-icons/si"
import LeftBanner from './LeftBanner';
export const Banner = () => { 
  return (
    <saction id="home" className="pt-10 pb-20 w-full pb-20 flex
     items-center border-b-[1px] border-b-black font-titleFont" >
    <div  className='w-1/2 flex flex-col gap-20'>
    <div className='flex flex-col gap-3'>
 <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>
 <h1 className='text-6xl font-bold text-white'>Hi, I'm  
  <span className='text-designColor capitalize'> Zaib</span>
  </h1>
  <h2 className='text-4xl font-bold text-white'>a <span>
 Web Developer </span></h2>
  <p>BSCS graduate from Dawood University with 1 year of frontend development experience at Sky Solutions, specializing in user-friendly web interfaces. Also, a skilled Email Marketing Specialist. Passionate about turning ideas into captivating digital experiences

  </p>
    </div>
    <div className='flex justify-between'>
     <div>
      <h2>FIND ME IN</h2>
      <div className='flex gap-4 mt-5'>
      <span className='bannerIcon'>
       <FaFacebookF/>
      </span>
      <span className='bannerIcon'>
      <FaTwitter/>
      </span>
      <span className='bannerIcon'>
      <FaLinkedinIn/>
      </span>
      </div>
    </div>
    <div>
      <h2>BEST SKILL ON</h2>
      <div className='flex gap-4 mt-5'>
      <span className='bannerIcon'>
       <FaReact/>
      </span>
      <span className='bannerIcon'>
      <SiFigma/>
      </span>
      <span className='bannerIcon'>
      <SiNextdotjs/>
      </span>
      <span className='bannerIcon'>
      <SiTailwindcss/> 
      </span>
      </div>
    </div>  
    </div>
   
    <div>

    </div>
    </div>
    <div className='w-1/2'>
 <LeftBanner/>
    </div>
    </saction>
  )
}
