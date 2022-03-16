import React from "react";
import Social from '../SocialBar/Social'
import "./about.scss";

export default function About() {
  return (
    <div className="about" id="about">
      <div className="aboutTop">
        <div className="aboutInfo">
          Hello there, I am
          <br /><span className="infoName">Tifanny Rivera</span>
          <br />a front-end developer.
        </div>
        <div className="aboutPhoto">
          <img
            src="../assets/Source code-pana.png"
            className="picture"
            alt="gif"
          />{" "}
        </div>
      </div>
      <Social />
    </div>
  );
}
 