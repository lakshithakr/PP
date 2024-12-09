import React from 'react'; 
import './App.css';
import ScrollToTop from "react-scroll-to-top";
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Education from './Component/Education/Education';
import Home from './Component/Home/Home';
import TechStack from './Component/TechStack/TechStack';
import WorkExperience from './Component/WorkExperience/WorkExperience';
import Project from './Component/Projects/Project';
import Slidebar from './Component/Slidebar/Slidebar';
import NavbarMobile from './Component/Slidebar/NavbarMobile';
import Slidebar2 from './Component/Slidebar2/Slidebar';
import NavbarMobile2 from './Component/Slidebar2/NavbarMobile';
import VerNavBar from './Component/VerNavBar/VerNavBar';
function App() {
  return (
    <>
    <NavbarMobile2 />
    {/* <Slidebar2 /> */}
    <VerNavBar/>
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
