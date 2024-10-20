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
                    I am an undergraduate in Computer Science and Engineering, specializing in data science. I have
                    gained practical experience through internships as a Data Scientist intern at Sampath Bank PLC.
                    My work includes developing document-based question-answering systems, resume ranking
                    solutions, and science MCQ projects using advanced models like RAG and LLMs. I am eager to
                    leverage my skills to tackle real world challenges and explore emerging technologies in data science
                    and AI.
                    </p>   
                </div>
            </div>
        </div>
    </div>
  )
}

export default About