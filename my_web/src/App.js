import React from 'react'; 
import './App.css';
import ScrollToTop from "react-scroll-to-top";
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Education from './Component/Education/Education';
import Home from './Component/Home/Home';
import Slidebar from './Component/Slidebar/Slidebar';
import TechStack from './Component/TechStack/TechStack';
import WorkExperience from './Component/WorkExperience/WorkExperience';
import Project from './Component/Projects/Project';
import NavbarMobile from './Component/Slidebar/NavbarMobile';
function App() {
  return (
    <>
    <NavbarMobile />
    {/* <Slidebar /> */}
    <About />
    <WorkExperience />
    <TechStack />
    <Education />
    <Project />
    <Contact />
    <ScrollToTop smooth={true}
      top="60"
      color='white'
      heigh='20px'
      width='20px'
      style={{borderRadius:'90px',backgroundColor:'#2471A3'}} />
    </>
  );
}

export default App;
