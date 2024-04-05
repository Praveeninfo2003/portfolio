import React from 'react'
import { Link } from 'react-scroll'
import './TopContent.css'


function TopContent() {

    const handleDownload = () => {
      
      };

    return (
        <div className='topContent'>
            <div className='topContent__container'>
                <h1>S.Praveen Kumar</h1>
                <p>A Professional Web Developer</p>
                <a href='www.google.com'>

                    <button onClick={handleDownload} className='topContent__downloadButton'>Download CV</button>
                </a>
                <Link to='project' smooth={true} duration={500} >
                    <button className='topContent__workButton'>My Work</button>
                
    </Link>
            </div>
        </div>
    )
}

export default TopContent