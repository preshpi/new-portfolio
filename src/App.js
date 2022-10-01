import './App.css';
import './index.css';
import { useEffect, useState } from 'react';
import DotLoader from "react-spinners/DotLoader";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Blog from './components/Blog';
import Project from './components/Project';
import Aos from 'aos';
import "aos/dist/aos.css";

function App() {
  const  [loading, setLoading] = useState(false);

  useEffect(() => {
    Aos.init({duration: 2000});

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
     <Navbar/>
     <Hero/>
     <About/>
     <Skills/>
     <Project/>
     <Blog/>
     <Footer/> 
     </>
    }
   </div>



  );
}

export default App;
