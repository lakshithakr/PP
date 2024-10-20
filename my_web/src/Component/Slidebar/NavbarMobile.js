
import './NavbarMobile.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { FcHome,FcPortraitMode,FcFactory,FcGraduationCap,FcTodoList,FcPhone } from "react-icons/fc";
import { MdOutlineBiotech } from "react-icons/md";
import {Link} from "react-scroll"
import { useState } from 'react'
function NavbarMobile(){
    const [open,setOpen]=useState(false);
    const handleClick= () => {
        setOpen(!open);
    }
    ;
  return (
    <div className='mobile-nav'>
        <div className='navbar-header'>
            <p><GiHamburgerMenu size={25} onClick={handleClick}/></p>
        </div>
        {open ? (
                    <div className='mobile'>
                    <ul>
                                <li className="nav-item-mobile">
                                    <Link to="home"                             
                                        spy={true}
                                        smooth={true}
                                        duration={100}
                                        offset={-100}>
                                        <FcHome size={25}/>Home
                                    </Link> 
                                </li>
        
                                <li className="nav-item-mobile">
        
                                    <Link to="about"
                                        spy={true}
                                        smooth={true}
                                        duration={100}
                                        offset={-100}
                                    >
                                    <FcPortraitMode size={25}/>About
                                    </Link>      
                                </li>
        
        
                                <li className="nav-item-mobile">
                                <Link to="workexperience"
                                    spy={true}
                                    smooth={true}
                                    duration={100}
                                    offset={-100}
                                    >
                                    <FcFactory size={25}/>Work Experiance
                                </Link>     
                                </li>
        
        
                                <li className="nav-item-mobile">
                                    <Link to="techstack"
                                        spy={true}
                                        smooth={true}
                                        duration={100}
                                        offset={-100}
                                    >
                                        <MdOutlineBiotech size={25} color="orange"/>Tech Stack
        
                                    </Link>      
                                </li>
        
        
                                <li className="nav-item-mobile">
                                    <Link to="education"
                                        spy={true}
                                        smooth={true}
                                        duration={100}
                                        offset={-100}
                                    >
                                        <FcGraduationCap size={25}/>Education
        
                                    </Link>       
                                </li>
        
        
        
                                <li className="nav-item-mobile">
                                    <Link to="projects"
                                        spy={true}
                                        smooth={true}
                                        duration={100}
                                        offset={-100}
                                    >
                                    <FcTodoList size={25}/>Projects
        
                                    </Link>   
                                </li>
        
        
        
                                <li className="nav-item-mobile">
                                    <Link to='contact'
                                        spy={true}
                                        smooth={true}
                                        duration={100}
                                        offset={-100}
                                    >
                                    <FcPhone size={25}/>Contact
        
                                    </Link>     
                                </li>
        
        
                    </ul>
                </div>
        ):null}
    </div>
  )
}

export default NavbarMobile