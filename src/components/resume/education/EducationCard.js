import React from 'react'
import Subtitle from '../Subtitle'
import MiniCard from './MiniCard'

export const EducationCard = () => {
  return (
<div> 
    <div className='flex'>
    <Subtitle  heading='2016   2023' dec='Education Quality'/>
    </div>
    
    <div className='w-1/2 h-[1000px] border-l-[6px] border-l-black  border-opacity-30 flex flex-col gap-10'>
  <MiniCard
    title="BSc in Computer Science"
    subtitle="Dawood University Of Engineering & Techenology (2019-2023)"
    result="3.2/4"
    dec='The training provided by universities in order ot prepare people to work in various sectors of the econom or areas of culture.'
    />
    <MiniCard
     title="Pre-Engineering"
     subtitle="Pakiatan Shipowner Govt. College (2016-2018)"
     result="75%"
     dec='The training provided by Colleges to prepare students to get addmission in Universities'/>
    <MiniCard
    
    title="Matric in Science"
    subtitle="Al-Hamd Public School (2014-2016)"
    result="75%"
    dec='This School teach me how to study and how to be creative'/>
    </div>
</div>
  )
}
