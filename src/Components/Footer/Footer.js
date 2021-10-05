import React from 'react';
import '../Footer/Footer.css';

const Footer = () => {
    return(
        <div className='main-footer'>
            <div className='footer-content'>
                <div className='footer-section-about'></div>
                <div className='footer-section-links'></div>
                <div className='footer-section-contact'></div>
            </div>
            
            <div className='footer-bottom'>
                &copy; Portfolio | Designed by Kevin Crawford
            </div>
        </div>                
    );
};

export default Footer;