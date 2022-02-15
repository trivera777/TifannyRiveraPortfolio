import React from "react";
import "./about.scss";

export default function About() {
  return (
    <div className="about" id="about">
      <div className="wrapper">
        <div className="title">
          <h1>about.</h1>
        </div>
        <div className="aboutContainer" style={{ color: "black" }}>
          <img src="./assets/me.png" style={{ height: "45vh" }} />
          <div className="text">
            Hi my name is Tifanny! I design websites.
            
            <br />
            <br />
            <span class="logged-in">●</span> Available for hire
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}


// Your portfolio website is essentially like your 
// business card where it’s the initial point of 
// contact your potential customers make contact
//  with you and your work. So, it’s always a 
//  good practice to include an about page where 
//  you communicate important information about 
//  yourself, your work, your experience, your
//   approach, skills, and completed courses.