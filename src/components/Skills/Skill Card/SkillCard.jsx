import React from "react";
import '../Skill Card/skillCard.scss'

export default function SkillCard({ skill }) {
  return (
    <div className="skillCard" id="skillCard">
      <div className="skillIcon">{skill.icon}</div>
        <label className="skillName" >{skill.name}</label>
    </div>
  );
}
