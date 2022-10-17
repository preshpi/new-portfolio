import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Project from '../components/Project';
import Blog from '../components/Blog'

function Home() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Skills/>
        <Project/>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default Home