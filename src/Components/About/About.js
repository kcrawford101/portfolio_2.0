import React from 'react';
import '../About/About.css';
import profilePic from '../../Images/Me-and-jack.png'

const About = () => {
    return (
        <>
        <h2 className='about-title'>About Me</h2>

        <div className='about-container'>

            <div className='profile-pic'>
                <img src={profilePic} />
            </div>

            <div className='about-info'>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>

            <div>
                <h3 className='about-tech'>Technologies</h3>
                <ul>
                    <li>
                        HTML
                    </li>
                    <li>
                        CSS
                    </li>
                    <li>
                        Javascript
                    </li>
                </ul>
            </div>

        </div>
        </>
    );
};

export default About;