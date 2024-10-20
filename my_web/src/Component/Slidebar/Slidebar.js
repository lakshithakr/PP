import React,{useState} from 'react'
import "./Slidebar.css"
import Home from '../Home/Home'
import { BsChevronLeft,BsChevronRight } from "react-icons/bs";
import SlidebarList from './SlidebarList';
function Slidebar() {

  const [expandSlidebar,setExpandSlidebar]=useState(false)

  const handleExpandClick = () =>{
    setExpandSlidebar(!expandSlidebar);
  }

  return (
    <div className='container-fluid slidebar-section'>
        <div className={expandSlidebar ? "slidebar-expand slidebar":"slidebar"}>
          <div className='icon-for-slidebar-expand-and-collapse'>
            <p onClick={handleExpandClick}>
              {expandSlidebar ? (
                <BsChevronLeft size={30}/>
              ):(
                <BsChevronRight size={30}/>
              )}
              </p>
          </div>
          <SlidebarList expandSlidebar={expandSlidebar}/>
        </div>
        <div className='container'>
            <Home />
        </div>

    </div>
  )
}

export default Slidebar