import React from 'react'
import "./About.css"
import profile from "../../images/myimage.jpg"
function About(){
  return (
    <div className='container about-section' id='about'>
        <div className='row'>
            <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
                <div className='about-image'>
                    <img src={profile} alt='Profile Picture'/>
                </div>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
                <div className='about-details'>
                    <div className='about-title'>
                        <h5>About Me</h5>
                        <span className='line'></span>
                    </div>
                    <p>
                        I am a dedicated and ambitious computer science and engineering undergraduate with significant
                        ability to learn new things quickly and passion for technology. I am passionate about finding
                        solution with computer science concept and practical problem solving. Seeking for new
                        opportunities that provide the space to learn, grow and gain more experience
                    </p>   
                </div>
            </div>
        </div>
    </div>
  )
}

export default About