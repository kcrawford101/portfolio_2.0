import React from 'react';
import '../Projects/Projects.css'
import { constant } from '../../Constants/Constants'

const Projects = () => {
    return (
        <div className="project-container">
            {constant.map(({ id, image, title, description, tags, source, visit }) => (
                <div key={id}className="card">
                    <div className="card-body">
                        <h5 className="card-title">{title} | <span style={{fontSize:'20px'}}>{tags}</span></h5>
                        <img className="card-image" src={image}></img>
                        <p className="card-subtitle">{description}</p>
                        
                        <div className="card-button">
                            <button href={source}>Github Rep</button>
                            <button href={visit}>Deployed App</button>
                        </div>
                        

                    
                    </div>
                    
                </div>
            ))}
        </div>
    );
};

export default Projects;