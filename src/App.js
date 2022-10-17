import './App.css';
import './index.css';
import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react';
import DotLoader from "react-spinners/DotLoader";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from 'aos';
import "aos/dist/aos.css";
import Home from './Pages/Home';
import Bloggy from './Pages/Bloggy';

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
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="bloggy" element={<Bloggy/>}/> 
      </Routes>

    </>
  
    }
   </div>



  );
}

export default App;
