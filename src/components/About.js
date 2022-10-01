import React from 'react'

function About() {
  return (

    <div name='about' className='w-full flex flex-col justify-between mt-5'>
       <div className='flex lg:flex-col flex-col-reverse lg:grid md:grid-cols-2 max-w-[1240px] m-5'>
        <div className='justify-center text-center lg:items-start w-full py-8'>
          <h1 className="text-[#a3d4ff] text-sm  md:text-xl px-3 tracking-wider leading-8" data-aos="slide-up">
               I am a web developer with a strong background in frontend technology. I am eager to gain job experience in order to improve my skills and advance my career. I am driven to advance in an industry that is a good fit for me, to solve frontend development difficulties, and to please web consumers.
               I knew what programming was all about after participating in the first She Code Africa training (SCA). I wasn't consistent until after High school which I later joined several internships programs like HNG, ZURI, KODECAMP and many more to help me improve my skills.
          </h1>
        </div>
        <div className="flex flex-wrap justify-center lg:m-10 md:m-10" data-aos="zoom-out">
           <div className="w-6/12 sm:w-4/12  mt-5 text-center border-2 border-black rounded-full">
           <img class="inline object-cover rounded-full mr-2" src="https://res.cloudinary.com/dpokiomqq/image/upload/v1663054963/piie_en0mk2.jpg" alt="Profile image" />
          </div>
        </div>
       </div>
    </div>


  )
}

export default About