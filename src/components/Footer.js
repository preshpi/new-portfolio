import React from 'react'
import ScrollToTop from "react-scroll-to-top";
function Footer() {
  return (
    <div className="justify-center text-center">

          <ScrollToTop  
        smooth
        viewBox="0 0 24 24"
        svgPath="M11 2.206l-6.235 7.528-.765-.645 7.521-9 7.479 9-.764.646-6.236-7.53v21.884h-1v-21.883z"
      />


      <div class="bg-gray-200 text-center lg:text-left">
          <div class="text-gray-700 text-center p-4">
           <p>Made with &#128151; by Precious</p>
          </div>
        </div>
    </div>
  )
}

export default Footer