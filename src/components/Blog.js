import React from 'react'
import { Link } from 'react-router-dom'
function Blog() {
  return (
    <div name='blog' className="text-center py-8 md:m-20 lg:m-2 m-8">
        <h1 className="text-3xl text-[#E1E6E5] mt-12" data-aos="fade-up">Blog</h1>
        <p className="text-xl mt-3 mb-3 text-[#a3d4ff]" data-aos="fade-up">Find more about me</p>  
        
          <div className="flex items-center justify-center">
            <div className="max-w-sm rounded-lg border shadow-md bg-gray-800 border-gray-700 ">
                <button>
                    <img class="rounded-t-lg" src="https://res.cloudinary.com/dpokiomqq/image/upload/v1662486866/blog_ly5koh.jpg" alt="img"/>
                </button>
                <div className="p-3">
                    <p className="mb-3 font-normal text-gray-400"> <a href="https://preshegwuenu.hashnode.dev/">My Hashnode blog</a></p>
                    <Link to="/bloggy">
                      <button href="#" className="inline-flex items-center py-2 px-3 mb-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </button>
                    </Link>
                </div>
            </div> 
          </div>
    </div>
  )
}

export default Blog