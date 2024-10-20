import React from 'react'
import './WorkExperience.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FcWorkflow } from "react-icons/fc";
import { MdWork } from "react-icons/md";

const colors =[
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
];

function WorkExperience() {
    const data =[
        {
            company:'Sampath Bank PLC',
            position:'Research and Development Internship',
            des:'Led a machine learning project at Sampath Bank PLC to identify eligible users for theVISHWA mobile banking application. Analyzed customer data using machine learningtechniques to enhance targeting and drive adoption of the mobile banking platform,improving lead generation efficiency',
            year:'2023-December to 2024-June',
            techskills:[
                {
                    techname:'Machine Learning'
                },
                {
                    techname:'Python'
                },
                {
                    techname:'Streamlit'
                },
                {
                    techname:'Data Visualization'
                },
            ]
        },




 
    ]
  return (
    <div className='container workexperience-section' id='workexperience'>
        <div className='section-title'>
            <h5>Work Experience</h5>
            <span className='line'></span>
        </div>
        <div className='timeline-section'>
            <VerticalTimeline lineColor="#E74C3C">
         {data.map((item,index)=>(
            <VerticalTimelineElement 
            className="vertical-timeline-element--work"
            contentStyle={{ background: colors[index], color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  black' }}
            date={item.year}
            dateClassName='date-class'
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<MdWork />}
          >
            <h3 className="vertical-timeline-element-title">{item.company}</h3>
            <h5 className="vertical-timeline-element-subtitle">{item.position}</h5>
            <div className='row'>
                {item.techskills.map((item,index)=>(
                    <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12' keys={index}>
                        <div className='tech-used-in-project'>
                            <p>{item.techname}</p>
                        </div>
                    </div>
                ))}
            </div>
            <p>
              {item.des}
            </p>

          </VerticalTimelineElement>
         ))}   
  
            </VerticalTimeline>
        </div>

    </div>
  )
}

export default WorkExperience