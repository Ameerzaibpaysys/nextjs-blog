import React from 'react'
function LeftBanner() {
  return (
  <div className='relative flex justify-center'>
  <div className='flex justify-center items-center '>
        <img src="/Images/MyImg.png" alt="bannerImg" 
    className='w-[500px] h-[600px z-10'
    /></div>
<div className='absolute bottom-0 w-[500px] h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center ml-1/2'>
    
</div>
  </div>  
  )
}

export default LeftBanner