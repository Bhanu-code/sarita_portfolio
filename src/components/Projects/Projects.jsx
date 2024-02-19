import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';

const projects = [
  {
    idx: 1,
    name: "Amazon",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quisquam nam error, excepturi vero at eius eos ullam! Ratione, itaque.",
    img: "blank",
    link: "amazon_link",
  },
  {
    idx: 2,
    name: "Flipkart",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quisquam nam error, excepturi vero at eius eos ullam! Ratione, itaque.",
    img: "blank",
    link: "amazon_link",
  }

]

const Projects = () => {
  return (
    <div className='container mt-5'>
      <h3 className='text-center mb-5 project-header'
      style={{
          fontFamily: "Old Standard TT",
          fontWeight: "500",
          fontStyle: "normal",
      }} >Projects</h3>
      {
        projects.map((project) => (
          <ProjectCard
            key={project.idx}
            idx={project.idx}
            projectName={project.name}
            projectImg={project.img}
            projectDesc={project.desc}
            projectLink={project.link}

          />
          // console.log(project)
        ))
      }
    </div>
  )
}

export default Projects
