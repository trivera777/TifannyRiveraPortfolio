import React from "react";
import './projectCard.scss'

export default function ProjectCard({ project }) {
  return (
    <div className="projectCard">
      <div className="projectInfo">
        <label className="projectTitle">{project.title}</label>
        <div className="projectLinks">
          {project.demo && (
            <a className="projectLink" href={project.demo}>
              <div className="linkButton">
                <i className="fi fi-rr-globe"></i>Demo
              </div>
            </a>
          )}
          {project.github && (
            <a className="projectLink" href={project.github}>
              <div className="linkButton">
              <i className="devicon-github-original"></i>Github
              </div>
            </a>
          )}
        </div>
        <p>{project.about}</p>
        <div className="projectTags">
          {project.tags.map((tag)=>{
            return <label className="tag" key={tag}>{tag}</label>
          })}
        </div>
      </div>
        <img src={project.image} className="projectImg" alt="Project" />
    </div>
  );
}
