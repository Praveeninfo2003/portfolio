import React, { useState } from 'react';
import './Projects.css';
import Popup from './Popup';

const Projects = ({ img, title, Desc, link }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleImageClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className='project'>
      <h2>{title}</h2>
      <img
        src={img}
        alt={title}
        onClick={handleImageClick}
        className={showPopup ? 'project-image-popup' : 'project-image'}
      />

      {showPopup && (
        <Popup
          img={img}
          title={title}
          Desc={Desc}
          link={link}
          open={showPopup}
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
};

export default Projects;
