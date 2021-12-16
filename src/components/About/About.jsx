import React from "react";
import "./about.scss";

export default function About() {
  return (
    <div className="about" id="about">
      <div className="wrapper">
        {/* <div className="left">
                <div className="title">skills.</div>
                <div className="list">
                <ul>
                    <li>Adaptability</li>
                    <li>Information Technology</li>
                    <li>Analytical Skills</li>
                    <li>HTML5</li>
                    <li>SCSS/CSS3</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Redux</li>
                </ul>
                </div>
            </div> */}
        <div className="right">
          <div className="title">about.</div>
          <div className="about">
            <p>
              Recent graduate from the University of Denver's Coding Boot Camp,
              completed December 12, 2021. Worked through 500+ hours of bootcamp
              structure to develop projects using HTML5, CSS3, JavaScript,
              React, GitHub, Heroku, and other programming languages.
              <br></br>
              <br></br>I found my passion for frontend development as well as
              for UX/UI Design. I'm eager to take on a new profession as a web
              developer or web designer which will allow me to contribute my
              excellent analytical, coordination and problem-solving skills. I
              work efficiently in a highly pressured work environment, with
              background knowledge of sales, account management and risk
              management.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
