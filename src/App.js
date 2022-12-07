import './App.css';
import './index.css';
import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from 'aos';
import "aos/dist/aos.css";
import Home from './Pages/Home';
import Bloggy from './Pages/Bloggy';

function App() {

  useEffect(() => {
    Aos.init({duration: 2000});


}, []);


  return (
   <div>
    
     <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="bloggy" element={<Bloggy/>}/> 
      </Routes>

    </>
  
    
   </div>



  );
}

export default App;
