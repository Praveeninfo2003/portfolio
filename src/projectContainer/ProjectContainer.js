import React from 'react';
import { Element } from 'react-scroll';
import Projects from '../projects/Projects';
import './ProjectContainer.css'
import img1 from '../Images/Computer-download.jpeg'

function ProjectContainer() {
    const client_project = [
      {
        Id : 1,
        img:img1,
         title:'PORTFOLIO',
         Desc:'Checking my project for first time',
         link:'www.google.com'
   } ,
]
  return (
    <Element className='projectContainer' id='projects'>

        <h1>PROJECTS</h1>
        <p>I have done for this project</p>
        <div className='projectContainer_projects'>
             {
              client_project.map((project,index)=>{
                return(
                  <Projects  key={index} Id={project.Id}  img={project.img} title={project.title} Desc={project.Desc} link={project.link} />
                )
              })
             }
            </div>
    </Element>
  )
}

export default ProjectContainer