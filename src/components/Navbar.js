import React, { useState } from 'react'
import { AiOutlineClose } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi"; 
import { Link, } from 'react-scroll'

function Navbar() {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    const handleClose = ()=> setNav(!nav)

  return (
    <div className='w-screen h-[80px] z-10 bg-[#084446] fixed drop-shadow-lg'>
        <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center px-8'>
            <p className='text-xl  sm:text-2xl text-[#E1E6E5]'>Precious Egwuenu</p>
        </div>
        
            <ul className='hidden md:flex pr-4'>
          

                       <a href><Link to="home"  smooth={true}  duration={500}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            home
                            </Link>
                        </a>     

                        <a href><Link to="about"  smooth={true} offset={-200} duration={500}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            ABOUT
                            </Link>
                        </a>   

                        <a href><Link to="skills"  smooth={true} offset={-200} duration={500}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Skills
                            </Link>
                        </a>     

                        <a href><Link to="project"  smooth={true} offset={-200} duration={500}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Project
                            </Link>
                        </a>     

                        <a href><Link to="blog"  smooth={true} offset={50} duration={500}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            BLOG
                            </Link>
                        </a>     
                        
            </ul>
        
        <div className='md:hidden mr-4 cursor-pointer' onClick={handleClick}>
        {!nav ? <BiMenuAltRight className="w-8 h-8 text-[#DDEEFF]"/>  :  <AiOutlineClose className="w-8 h-8 text-[#DDEEFF] hover:text-red-600"/> }
            
        </div>
        </div>

    <ul className={!nav ? 'hidden' : 'absolute bg-[#084446] w-full px-8 h-screen'}>
      <div className='flex flex-col my-4'>

             <li className="border-b-2 border-[#107F7E] w-full mb-3 text-[#92C8C7]"><Link onClick={handleClose} to="about"  smooth={true} offset={-2000}  duration={500}>Home</Link></li>
             <li className="border-b-2 border-[#107F7E] w-full mb-3 text-[#92C8C7]"><Link onClick={handleClose} to="about"  smooth={true} offset={-50} duration={500}>About</Link></li>
             <li className="border-b-2 border-[#107F7E] w-full mb-3 text-[#92C8C7]"><Link onClick={handleClose} to="skills"  smooth={true} offset={-190} duration={500}>Skills</Link></li>
             <li className="border-b-2 border-[#107F7E] w-full mb-3 text-[#92C8C7]"><Link onClick={handleClose} to="project" smooth={true} offset={-100} duration={500}>Project</Link></li>
             <li className="border-b-2 border-[#107F7E] w-full mb-3 text-[#92C8C7]"><Link onClick={handleClose} to="about"  smooth={true} offset={2000} duration={500}>Blog</Link></li>
      </div>
    </ul>
  </div>
   
  )
}

export default Navbar