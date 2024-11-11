import React from 'react'
import "./SlidebarList.css"
import profilepic from "../../images/myimage.jpg"
import { FcHome,FcPortraitMode,FcFactory,FcGraduationCap,FcTodoList,FcPhone } from "react-icons/fc";
import { MdOutlineBiotech } from "react-icons/md";
import {Link} from "react-scroll"
function SlidebarList  ({expandSlidebar}) {
  return (
    <React.Fragment>

        {expandSlidebar ? (
                <nav className='navbar-items'>
                    <ul>
                        <li className="nav-item">
                            <Link to="home"                             
                                spy={true}
                                smooth={true}
                                duration={100}
                                offset={-100}>
                                <FcHome size={25}/>Home
                            </Link> 
                        </li>

                        <li className="nav-item">

                            <Link to="about"
                                spy={true}
                                smooth={true}
                                duration={100}
                                offset={-100}
                            >
                            <FcPortraitMode size={25}/>About
                            </Link>      
                        </li>


                        <li className="nav-item">
                        <Link to="workexperience"
                            spy={true}
                            smooth={true}
                            duration={100}
                            offset={-100}
                            >
                            <FcFactory size={25}/>Work Experiance
                        </Link>     
                        </li>


                        <li className="nav-item">
                            <Link to="techstack"
                                spy={true}
                                smooth={true}
                                duration={100}
                                offset={-100}
                            >
                                <MdOutlineBiotech size={25} color="orange"/>Tech Stack

                            </Link>      
                        </li>


                        <li className="nav-item">
                            <Link to="education"
                                spy={true}
                                smooth={true}
                                duration={100}
                                offset={-100}
                            >
                                <FcGraduationCap size={25}/>Education

                            </Link>       
                        </li>



                        <li className="nav-item">
                            <Link to="projects"
                                spy={true}
                                smooth={true}
                                duration={100}
                                offset={-100}
                            >
                            <FcTodoList size={25}/>Projects

                            </Link>   
                        </li>



                        <li className="nav-item">
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
                </nav>
        ) : (
            <div className='navbar-items-only-icons'>
                    <ul>
                        <li className="nav-item">
                            <Link to="home"                             
                                spy={true}
                                smooth={true}
                                duration={100}
                                offset={-100}>
                                <FcHome size={25}/>
                            </Link> 
                        </li>

                        <li className="nav-item">

                            <Link to="about"
                                spy={true}
                                smooth={true}
                                duration={100}
                                offset={-100}
                            >
                            <FcPortraitMode size={25}/>
                            </Link>      
                        </li>


                        <li className="nav-item">
                        <Link to="workexperience"
                            spy={true}
                            smooth={true}
                            duration={100}
                            offset={-100}
                            >
                            <FcFactory size={25}/>
                        </Link>     
                        </li>


                        <li className="nav-item">
                            <Link to="techstack"
                                spy={true}
                                smooth={true}
                                duration={100}
                                offset={-100}
                            >
                                <MdOutlineBiotech size={25} color="orange"/>

                            </Link>      
                        </li>


                        <li className="nav-item">
                            <Link to="education"
                                spy={true}
                                smooth={true}
                                duration={100}
                                offset={-100}
                            >
                                <FcGraduationCap size={25}/>

                            </Link>       
                        </li>



                        <li className="nav-item">
                            <Link to="projects"
                                spy={true}
                                smooth={true}
                                duration={100}
                                offset={-100}
                            >
                            <FcTodoList size={25}/>

                            </Link>   
                        </li>



                        <li className="nav-item">
                            <Link to='contact'
                                spy={true}
                                smooth={true}
                                duration={100}
                                offset={-100}
                            >
                            <FcPhone size={25}/>

                            </Link>     
                        </li>


                    </ul>
            </div>
        )}



    </React.Fragment>
  )
}

export default SlidebarList