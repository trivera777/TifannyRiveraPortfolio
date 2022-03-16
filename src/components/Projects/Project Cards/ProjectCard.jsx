import React from "react";


export default function ProjectCard({ project }) {
  return (
    <div className="projectCard">
    <div className="projectInfo">
      <label className="projectTitle" >{project.title}</label>
      <div className="projectLinks">
        {
        project.demo && 
        <a className="projectLink" href={project.demo}>
          <div className="linkButton" >
          <i className="fi fi-rr-globe"></i>
          </div>
        </a>
          }
      </div>
      <img src={project.image} className="projectImg" alt="Project" />
    </div>
    </div>
  );
}
