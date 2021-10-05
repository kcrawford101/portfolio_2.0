import React from 'react';
import '../Navbar/Navbar.css';

const Navbar = () => {
    return(
    <>
        <div className='navbar'>            
            <h1>Kevin Crawford's Portfolio</h1>            
            <nav>
                <ul class="nav__links">
                    <li><a href="#">About Me</a></li>
                    <li><a href="#">My Work</a></li>
                    <li><a href="assets\Kevin Crawford's Resume 2021.pdf">My Resume</a></li>
                    <li><a href="#">Contact Me</a></li>
                </ul>
            </nav>            
        </div>
    </>
    )
}

export default Navbar;