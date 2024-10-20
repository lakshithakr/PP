
import "./Education.css"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdWork } from "react-icons/md";
function Education(){
    const data =[
        {
            name:'University of Moratuwa',
            degree:'BSc Engineering (Hons) - Computer Science and Engineering',
            year:'2020-May to 2025-May',
            des:'specialize in Data Science and Engineering',
        },
        {
            name:'G/ Sri Devanande College',
            degree:'Ambalangoda, Galle',
            year:'2019 A/L Examination',
            des:'Combine Maths A | Physics A | Chemistry A , District Rank-11, Island Rank-102 ',
        },

    ]
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
  return (
    <div className='container education-section' id='education'>
        <div className='section-title'>
            <h5>Education</h5>
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
            <h3 className="vertical-timeline-element-title">{item.name}</h3>
            <h6 className="vertical-timeline-element-subtitle">{item.degree}</h6>
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

export default Education