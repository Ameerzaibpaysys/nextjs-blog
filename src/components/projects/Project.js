import React from 'react'
import { Title } from '../features/title/Title'
import ProjectCard from './ProjectCard'

const Project = () => {
  return (
    <section id='projects'
      className='w-full py-10 border-b-[1px] border-b-black'>
      <div className='flex justify-center items-center text-center'>
        <Title
          heading="VISIT MY PORTFOLIO"
          dec="My Projects"
        />
      </div>
      <div className='grid grid-cols-3 gap-14'>
        <ProjectCard
          title="SOCIAL MEDIA CLONE"
          des="It is a long established fact that a reader will be distracted by the readable content of a page 
             when "
          src="/Images/socialMedia.webp"
        />
        <ProjectCard
          title="E-COMMERCE WEBSITE"
          des="It is a long established fact that a reader will be distracted by the readable content of a page 
            "
          src="/Images/eCommerce.png"
        />
        <ProjectCard
          title="CHATTING APP"
          des="It is a long established fact that a reader will be distracted by the readable content of a page 
             when"
          src="/Images/chattingApp.png"
        />
      </div>

    </section>
  )
}

export default Project