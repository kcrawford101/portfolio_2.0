import React from 'react';
import '../About/About.css';
import profilePic from '../../Images/Me-and-jack.png'
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from 'react-icons/fa'
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
                <span style={{fontWeight:'300'}}>Hey, I’m Kevin!</span> I am a full-stack developer with a certificate from the University of Toronto School of Continuing Studies Coding Bootcamp.
                <br />
                My goal is to help improve and optimize your business to be more efficient and generate more traffic to your website. Your clients expect a certain standard from you, and I am here to help you go beyond your client expectations.
                <br /> 
                I offer a wide range of skills from HTML, CSS, Javascript, and React; I’m also proficient in Photoshop.
                <br />
                As a goal-oriented onboarding specialist, I have developed strong communication and project management skills in the customer service industry, which has empowered my colleagues and clients over the years. With the strengths I have outlined, I would love to transfer that over and be the very definition of creating your dream team.

                </p>       
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