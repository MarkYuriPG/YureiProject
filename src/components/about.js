import './css/about.css'
import React, { useState } from 'react';
import frontendIcon from 'C:/Users/Mark/projects/my_portfolio/src/assets/frontend.png'; // Add your frontend icon path here
import backendIcon from 'C:/Users/Mark/projects/my_portfolio/src/assets/backend.png';

function About(){
    const [hoveredSection, setHoveredSection] = useState('frontend');

    return(
        <div className="about-container">
            <h2 className='about-word'>About</h2>
            <div className="icon-section">
                    {hoveredSection === 'frontend' && <img src={frontendIcon} alt="Frontend Icon" />}
                    {hoveredSection === 'backend' && <img src={backendIcon} alt="Backend Icon" />}
            </div>
            <div className="profile-section">
                <div className="profile-details">
                    <div className="detail" 
                        onMouseEnter={() => setHoveredSection('frontend')}
                    >
                        <h3>Frontend Developer</h3>
                        <p>I'm a front-end developer with experience in building responsive and optimized sites. I used ReactJS and Flutter.</p>
                    </div>
                    <div className="detail"
                        onMouseEnter={() => setHoveredSection('backend')}
                    >
                        <h3>Backend Developer</h3>
                        <p>I have experience developing fast and optimised back-end systems and APIs. I used Springboot and ASP .NET Web API.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;