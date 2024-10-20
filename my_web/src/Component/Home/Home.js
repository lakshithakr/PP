
import "./Home.css";
import myCV from "./CV.pdf";
import Typewriter from 'typewriter-effect';
function Home(){
  return (
    <div className="container-fluid home" id='home'>
      <div className="container home-content">
        <h1>Hi I'm</h1>
        <h4>
          <Typewriter
            options={{
              strings: [
                'An Undergraduate Student in Computer Science & Engineering Department at University of Moratuwa', 
                'A Research and Development Intern at Sampath Bank PLC',
                'A MERN Stack Developer'],
              autoStart: true,
              loop: true,
              delay:60,
              deleteSpeed:10,
            }}
          />
        </h4>
        <div className='button-for-action'>
          <div className='hire-me-button'>
            Hire Me
          </div>
          <div className='get-resume-button'>
            <a href={myCV} download='Lakshitha_CV.pdf'>
              Get Resume
            </a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home;