import React from "react";
import { ProjectData } from "./Data/ProjectData";
import Divider from "../Divider/Divider";
import ProjectCard from "./Project Cards/ProjectCard";
import "./projects.scss";

export default function Projects() {
  const data = ProjectData;
  return (
    <div className="projects" id="projects">
      <Divider />
      <label className="projectTitle">Projects</label>
      {data.map((project, index) => {
        return <ProjectCard project={project} key={index} />;
      })}
    </div>
  );
}
