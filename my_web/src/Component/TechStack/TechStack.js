import React,{useState} from 'react'
import './TechStack.css'
function TechStack(){
    const data=[
        {
            name: "Full Stack Developer"
        },
        {
            name: "Node js"
        },
        {
            name: "Javascript"
        },
        {
            name: "React js"
        },
        {
            name: "Express js"
        },
        {
            name: "Python"
        },
        {
            name: "Machine Learning"
        },
        {
            name: "SQL"
        },
        {
            name: "NOSQL"
        },
        {
            name: "C"
        },
        {
            name: "C++"
        },
        {
            name: "HTML/CSS"
        },

    ]
    const colors=[
        "#E74C3C",
        "#884EA0",
        "#F7DC6F",
        "#566573",
        "#7F8C8D",
        "#2471A3",
        "#7F8C8D",
        "#BA4A00",
        "#17202A",
        "#196F3D",
        "#FAD7A0",
        "#1B4F72",

    ]

    const [showMoreTechStack,setshowMoreTechStack]=useState(9);

    const loadMore = () => {
        setshowMoreTechStack((prev)=>prev+3);
    }



  return (
    <div className='container techstack-section' id='techstack'>
        <div className='section-title'>
            <h5>Tech Stack</h5>
            <span className='line'></span>
        </div>
        <div className='row'>
            {data.slice(0,showMoreTechStack).map((item,index)=>(
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" key={index}>
                    <div className={index===0?'tech-content-marked tech-content':'tech-content'}>
                        <span className='tech-number' style={{backgroundColor: colors[index]}}>
                            {index+1}
                        </span>
                        <p>{item.name}</p>
                    </div>
                </div>
            ))}
        </div>
        {showMoreTechStack >=data.length ? null:(        
        <span className='load-more-tech-stack' onClick={loadMore}>
            Load More
        </span>)}

    </div>
  )
}

export default TechStack