import React from 'react'
import { BsArrowUpRightSquareFill } from 'react-icons/bs';

function project() {
  return (
    <div name='project'>   
      <div class="m-8"> 
      <h1 className="text-center text-3xl text-[#E1E6E5] mb-5">Projects</h1>
      <div className="flex justify-center items-center">
      <div className="sm:grid grid-cols-2 px-4">
        <div className="image  max-w-sm rounded overflow-hidden shadow-lg m-5" data-aos="slide-up">      
          <img className="image__img" src="https://res.cloudinary.com/dpokiomqq/image/upload/v1662547636/adviceapp_oo9lcn.png" alt="project1"/>
          <div className="image__overlay ">
              <div className="content">
                <h1 className="text-2xl text-[#E1E6E5]">Advice app</h1>
                <div className="flex">
                   <sm className="mx-2 mb-1 text-[#a3d4ff]">Check me out</sm>
                   <a href="https://adviceapp-nine.vercel.app/"><BsArrowUpRightSquareFill className="cursor-pointer"/></a>
              </div>
             
              </div>
          </div>
          </div>
          <div className="image  max-w-sm rounded overflow-hidden shadow-lg m-5" data-aos="slide-up">
          <img className="image__img" src="https://res.cloudinary.com/dpokiomqq/image/upload/v1662547300/weather_hvwnls.png"/>
          <div className="image__overlay ">
          <div className="content">
                <h1 className="text-2xl text-[#E1E6E5]">Weather app</h1>
                <div className="flex">
                   <sm className="mx-2 mb-1 text-[#a3d4ff]">Check me out</sm>
                   <a href="https://weather-app-preshpi.vercel.app/"><BsArrowUpRightSquareFill className="cursor-pointer"/></a>
              </div>
             
              </div>
          </div>
          </div>
          <div className="image  max-w-sm rounded overflow-hidden shadow-lg m-5" data-aos="slide-up">
          <img className="image__img" src="https://res.cloudinary.com/dpokiomqq/image/upload/v1662547144/Password_generator_h1wubl.png"/>
          <div className="image__overlay ">
          <div className="content">
                <h1 className=" text-center text-2xl text-[#E1E6E5]">Password Gen app</h1>
                <div className="flex">
                   <sm className="mx-2 mb-1 text-[#a3d4ff]">Check me out</sm>
                   <a href="https://password-preshpi.vercel.app/"><BsArrowUpRightSquareFill className="cursor-pointer"/></a>
              </div>
             
              </div>
          </div>
          </div> 
          <div className="image  max-w-sm rounded overflow-hidden shadow-lg m-5" data-aos="slide-up">
          <img className="image__img" src="https://res.cloudinary.com/dpokiomqq/image/upload/v1662547106/RGB_fpcdoe.png"/>
          <div className="image__overlay ">
          <div className="content">
                <h1 className="text-2xl text-[#E1E6E5]">RGB selector</h1>
                <div className="flex">
                   <sm className="mx-2 mb-1 text-[#a3d4ff]">Check me out</sm>
                   <a href="https://preshpi.github.io/Rgb-game/"><BsArrowUpRightSquareFill className="cursor-pointer"/></a>
              </div>
             
              </div>
          </div>
          </div> 

      </div>    
      </div>
    
         
      </div>
    </div>
  )
}

export default project