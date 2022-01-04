import React from 'react';
import '../Footer/Footer.css';

import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
    return(
    
    <div className='footer-bottom' id= {'contact'} >
        <div className='about-icons'>
            <a className='linkedin' href= 'https://www.linkedin.com/in/kcrawford117/' target='_blank'><FaLinkedin /></a>                    
            <a href= 'https://github.com/kcrawford101' target='_blank'><FaGithub /></a>
            <br />
            <a className='email' href='mailto:crawfordkevin101@gmail.com'>crawfordkevin101@gmail.com</a>
        </div>
        <hr />
       <p> &copy; Portfolio | Designed by Kevin Crawford </p>
    </div>            
    );
};

export default Footer;