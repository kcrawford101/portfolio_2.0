import React from 'react';
import '../Projects/Projects.css'
import { constant } from '../../Constants/Constants'

const Projects = () => {
    return (
        <>
        <h2 className='project-title'>Projects</h2>
        
        <div className="project-container">
        
            
            
            
            {constant.map(({ id, image, title, description, tags, source, visit }) => (
                
                <div key={id}className="card">
                    <div className="card-body">
                        <h5 className="card-title">{title} | <span style={{fontSize:'20px'}}>{tags}</span></h5>
                        <img className="card-image" src={image}></img>
                        <p className="card-subtitle">{description}</p>
                        
                        <div className="card-button">
                           <a href={source} target='_blank'><button >Github Repo</button></a>
                            <a href={visit} target='_blank'><button>Deployed App</button></a>
                        </div>
                        

                    
                    </div>
                    
                </div>
            ))}
        </div>
        </>
    );
};

export default Projects;