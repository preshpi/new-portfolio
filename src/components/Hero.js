import React from 'react'

function Hero() {
  return (

    <div name='home' className=' lg:h-[600px] h-[450px]  flex flex-col justify-between bg-[#086063]'>
   
    <div className='max-w-[1240px] m-auto text-center'>
        <div className=' justify-center  w-full px-2 py-8 mt-20'>
            <p className='text-3xl text-white'>Hi, I'm Precious</p>
            <h1 className='py-3 text-2xl md:text-3xl font-bold'>FRONTEND DEVELOPER</h1>    
            <a href="https://res.cloudinary.com/dpokiomqq/image/upload/v1662567919/Presh_s_CV_k2q32f.pdf"><button className='py-2 px-6 rounded shadow-xl lg:outline-dotted border  text-white'>View Resume</button></a>
        </div>
    </div>

     </div>
 
  )
}

export default Hero