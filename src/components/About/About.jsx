import React from "react";
import "./about.scss";

export default function About() {
  return (
    <div className="about" id="about">
      <div className="wrapper">
        <div className="title">
          <h1>about.</h1>
        </div>
        <div className="aboutContainer">
          <a
            href="https://www.credly.com/badges/5baf8c6e-b123-4aa6-93b4-630af8b31a97/linked_in"
            target="_blank"
          >
            <img src="./assets/badge.png" className="badge"></img>
          </a>

          <div className="aboutSection">
            Recent graduate from the University of Denver's Coding Boot Camp.
            Worked through 500+ hours of boot camp structure to develop projects
            using HTML5, CSS3, JavaScript, React, GitHub, Heroku, and other
            programming languages.
          </div>
        </div>
      </div>
    </div>
  );
}
