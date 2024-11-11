import React from 'react';
import Header from '../../components/Header';
import Intro from './Intro';
import About from './About';  // Import About component
import Exp from './Exp';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import Leftside from './Leftside';


export default function Home() {
  return (
    <div>
      <Header />
      <div className='bg-primary px-40 sm:px-5'>
        <Intro />
        {/* Ensure the comment is wrapped in braces */}
        <About />
        <Exp/>
        <Projects/>  
        <Contact/>
        <Footer/> 
        <Leftside/>
      </div>
    </div>
  );
}
