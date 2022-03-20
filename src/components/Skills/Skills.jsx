import React from "react"; 

import "./skills.scss";
import { SkillsData } from './Data/SkillsData';
import SkillCard from './Skill Card/SkillCard'
import Separator from "../Separator/Separator";

export default function Skills() {
  const data = SkillsData;
  return (
    <div className="skills" id="skills">
      <Separator />
      <label className="skillsTitle">Skills</label>
      <div className="skillsContainer">
        {data.map((item) => {
          return (
              <div className="skillsSection">
                  <label className="label" >{item.type}</label>
                  <div className="skillsList">
                      {item.list.map((skill)=>{
                          return (
                              <SkillCard skill={skill}/>
                          )
                      })}
                  </div>
              </div>
          )
        })}
      </div>
    </div>
  );
}
