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
          <div className="text">
          <img src="./assets/me.png" style={{ height: "35vh" }} />
            Hi my name is Tifanny! I live in Colorado and I have lived here for
            the majority of my life. I am currently a personal banker offering
            five years of diversified experience with excellent communication
            and problem-solving skills. I am able to focus on projects, develop
            strategies and meet or exceed company expectations.
            <br />
            I am a recent Coding Bootcamp graduate with fundamental
            knowledge of software design, development, and testing. Seeking to
            utilize broad educational background with excelent analytical,
            technical, and programming skills to thrive as an entry-level
            software engineer. <br />
            View my{" "}
            <a className="link"
              href="https://www.credly.com/badges/5baf8c6e-b123-4aa6-93b4-630af8b31a97/linked_in"
              target="_blank"
            >
              verifed badge
            </a>
            {" "}

            and my
            {/* <a
              href="https://drive.google.com/file/d/1BGVKC7ko9hxC-JgvzyfjBU3LOKJkH1ZM/view?usp=sharing"
              target="_blank"
            >
              certificate of competion
            </a> */}
            from the University of Denver.
          </div>
        </div>
      </div>
    </div>
  );
}
