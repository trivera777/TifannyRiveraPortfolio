import React from "react";
import "./about.scss";

export default function About() {
  return (
    <div className="about" id="about">
      <div className="aboutTop">
        <div className="aboutInfo">
          Hello there, I am
          <br />
          <span className="infoName">Tifanny Rivera</span>
          <br />
          front-end developer.
        </div>
        <div className="aboutPhoto">
          <img
            src="../assets/Hand coding-rafiki.png"
            className="picture"
            alt="gif"
          />{" "}
        </div>
      </div>
      <div className="aboutBottom"></div>
    </div>
  );
}
