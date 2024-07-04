import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from "react";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Hero from "./Hero/Hero";
import Portfolio from "./Portfolio/Portfolio";

const Home = () => {
  
  useEffect(()=>{
    AOS.init({duration: 1000})
}, [])

  return (
    <>
      {/* Hero Section JSX Start */}

      <Hero></Hero>

      {/* Hero Section JSX End */}

      {/* About Section JSX Start */}

      <About></About>

      {/* About Section JSX End */}

      {/* Portfolio Section JSX Start */}

      <Portfolio></Portfolio>

      {/* Portfolio Section JSX End */}

      {/* Contact Section JSX Start */}

      <Contact></Contact>

      {/* Contact Section JSX End */}
    </>
  );
};

export default Home;
