import React from 'react'
import './VerNavBar.css'
import {Link} from "react-scroll"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { FcHome,FcPortraitMode,FcFactory,FcGraduationCap,FcTodoList,FcPhone } from "react-icons/fc";
import { MdOutlineBiotech } from "react-icons/md";
const VerNavBar = () => {
  return (
    <nav className="navbar">
        <ul className="nav-list">
            <li ><Link to="about"><FcHome size={25} style={{ marginRight: '0.5rem' }}/>Home</Link></li>
            <li ><Link to="workexperience"><FcFactory size={25} style={{ marginRight: '0.5rem' }}/>Work Experience</Link></li>
            <li ><Link to="techstack"><MdOutlineBiotech size={25} color="orange" style={{ marginRight: '0.5rem' }}/>Tech Stack</Link></li>
            <li ><Link to="education"><FcGraduationCap size={25} style={{ marginRight: '0.5rem' }}/>Education</Link></li>
            <li ><Link to="projects"><FcTodoList size={25} style={{ marginRight: '0.5rem' }}/>Projects</Link></li>
            <li ><Link to="contact"><FcPhone size={25} style={{ marginRight: '0.5rem' }}/>Contact</Link></li>
        </ul>
  </nav>
  )
}

export default VerNavBar