import './App.css';
import './index.css';
import { useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Blog from './components/Blog';
import Project from './components/Project';
import Aos from 'aos';
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
    Aos.init({duration: 2000});
}, []);


  return (
    <div className="">
    <Navbar/>
    <Hero/>
    <About/>
    <Project/>
    <Blog/>
    <Footer/> 
    </div>
  );
}

export default App;
