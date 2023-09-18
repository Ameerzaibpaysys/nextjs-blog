import { Banner } from '@/components/banner/Banner'
import { Features } from '@/components/features/Features'
import { Navebar } from '@/components/navebar/Navebar'
import Project from '@/components/projects/Project'
import Resume from '@/components/resume/Resume'

export default function Home() {
  return (
    <div className='w-full h-auto bg-bodyColor text-lightText'>
     <div className='max-w-screen-2xl mx-auto px-16'>
         <Navebar/>
         <Banner/>
         <Features/>
         <Project/>
         <Resume/>
     </div>
   
    </div>

  )
}
