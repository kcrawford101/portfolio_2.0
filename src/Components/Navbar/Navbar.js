import React from 'react';
import '../Navbar/Navbar.css';
import { GiDeer } from "react-icons/gi";

const Navbar = () => {
    return(
    <>
        <div className='navbar'>            
            <h1>Kevin Crawford's Portfolio</h1>
            <GiDeer className='deer-icon' />            
            <nav>
                <ul class="nav__links">                    
                    <li><a href='https://drive.google.com/file/d/12opDn-6dw1WqHyJxWJyzSJ-J2vRs_k1I/view?usp=sharing' target= '_blank'>My Resume</a></li>
                    <li><a href='/Footer/#contact'>Contact Me</a></li>
                </ul>
            </nav>            
        </div>
    </>
    )
}

export default Navbar;