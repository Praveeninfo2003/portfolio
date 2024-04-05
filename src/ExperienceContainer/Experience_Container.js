import React from 'react'
import { Element } from 'react-scroll';
import Experience from '../ExperienceBox/Experience';
import './Experience_Container.css';

function Experience_Container() {
  return (
    <Element className="experienceContainer" id='exp'>
     <h1>EXPERIENCE</h1>
     <div className="experienceContainer__info">
         <Experience number='0'  title='COMAPANY' style={{backgroundColor:'#f64c08'}} />
         <Experience number='1'  title='PROJECTS'  />
         <Experience number='0'  title='YEAR EXPERIENCE' style={{backgroundColor:'#f64c08'}} />
     </div>
    </Element>
  ) 
}

export default Experience_Container