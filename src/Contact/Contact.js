import { IconButton } from '@mui/material';
import React from 'react';
import { Element } from 'react-scroll';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import './Contact.css'

const Contact = () => {
    return (
        <Element className='contact' id='contact'>
            <h1>
                Contact 
            </h1>
            <div className='contact_container'>
                <p>
                    Email : <span>praveeninfo2024@gmail.com</span>
                </p>
                <p>
                    Phone Number : <span>8610620443</span>
                </p>
                <div className='contact_icons'>
                    <a href='goole.com'>

                        <IconButton>

                            <LinkedInIcon />
                        </IconButton>
                    </a>
                    <a href='goole.com'>

                        <IconButton>
                            <InstagramIcon />
 
                        </IconButton>
                    </a>
    </div>
            </div>
        </Element>
    )
}

export default Contact