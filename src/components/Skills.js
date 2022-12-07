import React from 'react'
import { AiOutlineHtml5 } from 'react-icons/ai'
import { DiCss3Full } from 'react-icons/di'
import { FaReact } from 'react-icons/fa'
import { TbBrandBootstrap } from 'react-icons/tb'
import { SiTailwindcss } from 'react-icons/si'
import { TbBrandJavascript } from 'react-icons/tb'
import { FaPython } from 'react-icons/fa'
import { FaGit } from 'react-icons/fa'

function Skills() {
  return (
    <div name="skills">
      <div className="mt-20 lg:mt-32 text-center justify-center">
    <h1 className="text-3xl text-[#E1E6E5] mx-3 mb-4">Skills</h1>
    <div className="grid text-center justify-center">

      <ul className="flex-cols flex lg:gap-8 mb-3" data-aos="fade-up">
        <li className="text-4xl hover:bg-[#cb4709] hover:text-black text-[#cb4709] bg-transparent rounded-lg shadow"><AiOutlineHtml5/></li>
        <li className="text-4xl hover:bg-[#b4d8f7] hover:text-black text-[#b4d8f7] bg-transparent rounded-lg shadow mx-2"><DiCss3Full/></li>
        <li className="text-4xl hover:bg-[#61DAFA] hover:text-black text-[#61DAFA] bg-transparent rounded-lg shadow mx-2"><FaReact/></li>
       </ul>

       <ul className="flex lg:gap-8 mt-3 mb-3" data-aos="fade-up">
        <li className="text-4xl hover:bg-[#38BCF9] text-[#38BCF9] hover:text-black bg-transparent rounded-lg shadow"><SiTailwindcss/></li>
        <li className="text-4xl hover:bg-[#F6E01F] text-[#F6E01F] hover:text-black bg-transparent rounded-lg shadow mx-2"><TbBrandJavascript/></li>
        <li className="text-4xl hover:bg-[#7430FB] text-[#7430FB] hover:text-black bg-transparent rounded-lg shadow mx-2"><TbBrandBootstrap/></li>
       </ul>

       <ul className="flex lg:gap-8 mt-3 mb-3 justify-center"data-aos="fade-up">
       <li className="text-4xl hover:bg-[#3B77A7] text-[#3B77A7] hover:text-black bg-transparent rounded-lg shadow mx-2"><FaPython/></li>
        <li className="text-4xl hover:bg-[#F54D27] text-[#F54D27] hover:text-black bg-transparent rounded-lg shadow mx-2"><FaGit/></li>
       </ul>

    </div>
      </div>


       <span className="social">
              <a href="https:github.com/preshpi">Github <i class="fab fa-github"></i></a>
              <a href="https:www.linkedin.com/in/preshpi-22/">LinkedIn <i class="fab fa-linkedin"></i></a>
              <a href="https:twitter.com/Presh_pie">Twitter <i class="fab fa-twitter"></i></a>
              <a href="mailto:webmaster@egwuenuprecious7@gmail.com"><i class="fa fa-envelope"></i></a>
       </span>
    </div>
  )
}

export default Skills
