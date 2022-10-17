import React from 'react'
import { useEffect, useState } from 'react';
import DotLoader from "react-spinners/DotLoader";
function Bloggy() {
  const  [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 8000)
}, []);

  return (
    <div>
    {
      loading ?

      <div className="loader">
      <DotLoader
      color={"#36d7b7"} 
      loading={loading} 
      size={100} />
     </div>

     :
     <>
    <div class="flex items-center justify-center h-screen">   
    <div class="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-8">
    <a href="https://bloggy-sage.vercel.app/"><button class="cursor-pointer">GO TO MY BLOG </button></a>
    </div>
    
    </div>
    </>
    }  
    </div>
  )
}

export default Bloggy