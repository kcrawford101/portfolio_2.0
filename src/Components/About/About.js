import React from 'react';
import '../About/About.css';
import profilePic from '../../Images/Me-and-jack.png'
import { FaGithub, FaLinkedin, FaEnvelope, FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from 'react-icons/fa'
import { SiAdobephotoshop } from "react-icons/si";

const About = () => {
    return (
        <>
        

        <div className='about-container'>

            <div className='profile-pic'>
                <img src={profilePic} />
            </div>

            <div className='about-info'>
                <h2 className='about-title'>About Me</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>

                <div className='about-icons'>
                    <a href= 'https://www.linkedin.com/in/kcrawford117/' target='_blank'><FaLinkedin /></a>                    
                    <a href= 'https://github.com/kcrawford101' target='_blank'><FaGithub /></a>
                    <a href='mailto:crawfordkevin101@gmail.com'><FaEnvelope /></a>
                </div>
            </div>

            <div className='tech-container'>
                <h3 className='tech-title'>Technologies</h3>
                <ul className='tech-list'>
                    <li>
                    <FaHtml5 /> HTML 
                    </li>
                    <li>
                    <FaCss3Alt /> CSS
                    </li>
                    <li>
                    <FaJsSquare /> Javascript 
                    </li>
                    <li>
                    <FaReact /> React 
                    </li>
                    <li>
                    <SiAdobephotoshop /> Photoshop 
                    </li>
                    
                </ul>
            </div>

        </div>
        </>
    );
};

export default About;