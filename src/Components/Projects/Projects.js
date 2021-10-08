import React from 'react';
import '../Projects/Projects.css'
import { constant } from '../../Constants/Constants'

const Projects = () => {
    return (
        <>

        
        
        <div className='project-container' >
            <h2 className='project-title'>My Projects</h2>
        
            
            
            <div className="project-cards">
            {constant.map(({ id, image, title, description, tags, source, visit }) => (
                
                <div key={id}className="card">
                    <div className="card-body">
                        <h5 className="card-title">{title}<br />
                        <span>{tags}</span></h5>
                        <img className="card-image" src={image}></img>
                        <p className="card-subtitle">{description}</p>
                        
                        <div className="card-button">
                           <a href={source} target='_blank'>Github Repo</a>
                            <a href={visit} target='_blank'>Deployed App</a>
                        </div>
                        

                    
                    </div>
                    
                </div>
            ))}
            </div>
        </div>
        </>
    );
};

export default Projects;