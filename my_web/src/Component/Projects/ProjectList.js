import React,{useState} from 'react'
import { FcExpand,FcCollapse } from "react-icons/fc";

function ProjectList  ({name,des,projectlink,tech}) {
    const [show,setShow]= useState(false);
    const handleShowandCollapse=() =>{
        setShow(!show);
    }
  return (
    <div className={show ? "project-list-opened project-list":'project-list'} 
    onClick={handleShowandCollapse} 
    >
        
        <div className='title-and-collapse-option'>
            <h5>{name}</h5>
            <p>
                {show ? <FcCollapse size={20}/>: <FcExpand  size={20}/>}
            </p>
        </div>
        <div className='description'>
            {show ? (<p>{des}</p>):(<p>{des.substring(0,20)}...<p style={{color:'green'}}>Read More</p></p>)}
        </div>
        
        

        <div className='row'>
            {tech && tech.map((item,index)=>(
                <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12'>
                    <div className='tech-used-in-project'>
                        <p>{item.techName}</p>
                    </div>
                </div>
            ))}
        </div>

        <div className='live-demo-button'>
            <a target="_" href={projectlink}>Live demo</a>
        </div>
    </div>

  )
}

export default ProjectList