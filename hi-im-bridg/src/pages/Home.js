import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';



import Sidebar from '../components/sidebar';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import About from '../pages/About';
import Projects from '../pages/Projects'
import Contact from '../pages/Contact';
import Resume from '../pages/Resume';

function Home() {
  const [isOpen, setIsOpen ] = useState(false)
  const toggle = () => {
      //set state to go from false to true
      setIsOpen(!isOpen)
      console.log(isOpen);

  }

  return (
    <div>
        <Nav toggle={toggle}  />
      {isOpen ? < Sidebar toggle={toggle} /> : ''}
    <main>
       <Routes>
        <Route path="/" element={<Hero/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} /> 
        <Route path="/resume" element={<Resume /> } />
       </Routes>
    </main>
    <Footer />
  </div>
  );
}

export default Home;