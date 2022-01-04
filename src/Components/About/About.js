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
                <span style={{fontWeight:'300'}}>Hey, I’m Kevin!</span> I’m a full-stack developer who recently completed a three month coding bootcamp course through University of Toronto School of Continuing Studies in August of 2021. 
                My goal is to help improve and optimize your business to be more efficient and generate more traffic to your website. Your clients expect a certain standard from you and I’m here to help you go beyond your clients expectations. 
                I offer a wide range of skills from basic HTML, CSS, Javascript, and React. I’m also very proficient with Photoshop.
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