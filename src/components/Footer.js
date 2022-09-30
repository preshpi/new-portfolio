import React from 'react'
import { HiChevronDoubleUp } from 'react-icons/hi'
import ScrollToTop from "react-scroll-to-top";
function Footer() {
  return (
    <div className="justify-center text-center">

          <ScrollToTop  
        smooth
        width=""
        component={<p><HiChevronDoubleUp className=" w-10 text-3xl"/></p>}      />


      <div class="bg-gray-200 text-center lg:text-left">
          <div class="text-gray-700 text-center p-4">
           <p>Made with &#128151; by Precious</p>
          </div>
        </div>
    </div>
  )
}

export default Footer