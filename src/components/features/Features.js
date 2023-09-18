import React from 'react'
import { Title } from './title/Title'
import Cards from './title/Cards'
import { FaBars, FaGlobe, FaMobile } from 'react-icons/fa'
import { SiAntdesign, SiProgress } from 'react-icons/si'
import { AiFillAppstore} from 'react-icons/Ai'
export const Features = () => {
  return (
    <saction id="features" className="w-full  pb-20  border-b-[1px] border-b-black" >
    <Title heading="Features" dec="What I do"/>
    <div className='grid grid-cols-3 gap-20'>
    <Cards 
    title="Business Sratagy"
    dec="Lorem ispum dolor there is much batter envornment polutions and having the most handsom techonologies are the same a i want to take from the peoples"
    icon={<FaBars/>}
    />
    <Cards
      title="Business Sratagy"
      dec="Lorem ispum dolor there is much batter envornment polutions and having the most handsom techonologies are the same a i want to take from the peoples"
      icon={<SiAntdesign/>}
    />
    <Cards
      title="Business Sratagy"
      dec="Lorem ispum dolor there is much batter envornment polutions and having the most handsom techonologies are the same a i want to take from the peoples"
      icon={<FaGlobe/>}
    />
    <Cards
      title="App Development"
      dec="Lorem ispum dolor there is much batter envornment polutions and having the most handsom techonologies are the same a i want to take from the peoples"
      icon={<AiFillAppstore/>}
    />
    <Cards
      title="SEO Optimisation"
      dec="Lorem ispum dolor there is much batter envornment polutions and having the most handsom techonologies are the same a i want to take from the peoples"
      icon={<SiProgress/>}
    />
    <Cards
      title="Business Sratagy"
      dec="Lorem ispum dolor there is much batter envornment polutions and having the most handsom techonologies are the same a i want to take from the peoples"
      icon={<FaMobile/>}
    />
    </div>
    
    </saction>
  )
}
