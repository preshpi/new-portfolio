import React from 'react'
import { AiOutlineHtml5 } from 'react-icons/ai'
import { DiCss3Full } from 'react-icons/di'
import { FaReact } from 'react-icons/fa'
import { TbBrandBootstrap } from 'react-icons/tb'
import { SiTailwindcss } from 'react-icons/si'
import { TbBrandJavascript } from 'react-icons/tb'
import { FaPython } from 'react-icons/fa'
import { FaGit } from 'react-icons/fa'



function About() {
  return (

    <div name='about' className='w-full flex flex-col justify-between mt-5'>
    <div className='flex lg:flex-col flex-col-reverse lg:grid md:grid-cols-2 max-w-[1240px] m-5'>
        <div className='justify-center text-center lg:items-start w-full py-8'>
        <h1 className="text-[#a3d4ff] text-sm  md:text-xl px-3 tracking-wider leading-8">
               I am a web developer with a strong background in frontend technology. I am eager to gain job experience in order to improve my skills and advance my career. I am driven to advance in an industry that is a good fit for me, to solve frontend development difficulties, and to please web consumers.
               I knew what programming was all about after participating in the first She Code Africa training (SCA). I wasn't consistent until after High school which I later joined several internships programs like HNG, ZURI, KODECAMP and many more to help me improve my skills.
      </h1>
        </div>
        <div className="flex flex-wrap justify-center lg:m-10 md:m-10">
           <div className="w-6/12 sm:w-4/12 px-4 mt-5 text-center">
           <img class="inline object-cover lg:w-64 lg:h-64  md:w-46 md:h-46 w-24 h-24  mr-2 rounded-full" src="https://res.cloudinary.com/dpokiomqq/image/upload/v1663054963/piie_en0mk2.jpg" alt="Profile image"/>
          </div>
        </div>
        <div>

        </div>

    </div>
       <div className="mt-12 text-center justify-center">
         <h1 className="text-3xl text-[#E1E6E5] mx-3 mb-4">Skills</h1>
         <div className="grid text-center justify-center">

           <ul className="flex-cols flex mb-3" data-aos="slide-right">
             <li className="text-4xl hover:bg-[#cb4709] bg-transparent rounded-lg shadow"><AiOutlineHtml5/></li>
             <li className="text-4xl hover:bg-[#b4d8f7] bg-transparent rounded-lg shadow mx-2"><DiCss3Full/></li>
             <li className="text-4xl hover:bg-[#61DAFA] bg-transparent rounded-lg shadow mx-2"><FaReact/></li>
            </ul>

            <ul className="flex mt-3 mb-3" data-aos="slide-left">
             <li className="text-4xl hover:bg-[#38BCF9] bg-transparent rounded-lg shadow"><SiTailwindcss/></li>
             <li className="text-4xl hover:bg-[#F6E01F] bg-transparent rounded-lg shadow mx-2"><TbBrandJavascript/></li>
             <li className="text-4xl hover:bg-[#7430FB] bg-transparent rounded-lg shadow mx-2"><TbBrandBootstrap/></li>
            </ul>

            <ul className="flex mt-3 mb-3 justify-center"data-aos="fade-up">
            <li className="text-4xl hover:bg-[#3B77A7] bg-transparent rounded-lg shadow mx-2"><FaPython/></li>
             <li className="text-4xl hover:bg-[#F54D27] bg-transparent rounded-lg shadow mx-2"><FaGit/></li>
            </ul>

         </div>
       </div>

       <div className="social">
              <a href="https:github.com/preshpi">Github <i class="fab fa-github"></i></a>
              <a href="https:www.linkedin.com/in/preshpi-22/">LinkedIn <i class="fab fa-linkedin"></i></a>
              <a href="https:twitter.com/Presh_pie">Twitter <i class="fab fa-twitter"></i></a>
       </div>
    </div>

    //  <div className="mt-12 h-screen">
    //    <div className="grid  max-w-[1240px] m-auto lg:w-[900px]">
    //         <h1 className="text-[#a3d4ff] text-sm lg:text-2xl md:text-xl px-4 tracking-wider leading-8">
    //            I am a web developer with a strong background in frontend technology. I am eager to gain job experience in order to improve my skills and advance my career. I am driven to advance in an industry that is a good fit for me, to solve frontend development difficulties, and to please web consumers.
    //            I knew what programming was all about after participating in the first She Code Africa training (SCA). I wasn't consistent until after High school which I later joined several internships programs like HNG, ZURI, KODECAMP and many more to help me improve my skills.
    //          </h1>
    //    </div>




    //  </div>

  )
}

export default About