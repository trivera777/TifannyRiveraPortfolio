import React from "react";
import Social from '../SocialBar/Social'
import "./about.scss";

export default function About() {
  return (
    <div className="about" id="about">
      <div className="aboutTop">
        <div className="aboutInfo">
          Hello there, I am
          <br /><span className="infoName">Tifanny Rivera.</span>
          <br />Front-end developer.
          <i className="fi fi-brands-instagram"></i>
        </div>
        <div className="aboutPhoto">
          <img
            src="../assets/Source code-pana.png"
            className="aboutPhoto"
            alt="gif"
          />{" "}
        </div>
      </div>
      <Social />
    </div>
  );
}
 