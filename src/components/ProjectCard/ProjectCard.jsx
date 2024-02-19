import React from 'react';
import './projectcard.css'

const ProjectCard = ({ idx, projectName, projectImg, projectDesc, projectLink }) => {
    return (
        <div className=' p-cont m-auto d-flex flex-column-reverse flex-sm-row  justify-content-between rounded shadow mb-4' >
             <div className="left border p-4 bg-white rounded ">
                <h3 className='mb-3'>{projectName}</h3>
                <p className='mt-3'>{projectDesc}</p>
                <button className='btn border border-black mt-3 rounded-pill'>View Project</button>
             </div>
             <div className="right border rounded" >
                <img className='profilepic' src="/demo.png" alt="Project image" />
             </div>
        </div>
    )
}

export default ProjectCard
