import { Title } from '@/components/features/title/Title'
import React from 'react'
import Education from './education/Education'

const Resume = () => {
  return (
    <div id='resume'>
     <div  className='flex justify-center text-center'>
        <Title heading='3+ YEARS OF EXPERIENCE' dec='My Resume'/>
    </div>
    <ul className='w-full grid grid-cols-4'>
      <li className='resumei'>Education</li>
      <li className='resumei'>Professional Skills</li>
      <li className='resumei'>Experience</li>
      <li className='resumei'>Achievements</li>
    </ul>
    <Education/>
    </div>
   
  )
}

export default Resume 