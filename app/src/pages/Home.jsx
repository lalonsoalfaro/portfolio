import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import HardSkills from '@/components/sections/HardSkills';
import Projects from '@/components/sections/Projects';
import Education from '@/components/sections/Education';
import Contact from '@/components/sections/Contact';
import SoftSkills from '@/components/sections/SoftSkills';

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <HardSkills />
        <SoftSkills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
