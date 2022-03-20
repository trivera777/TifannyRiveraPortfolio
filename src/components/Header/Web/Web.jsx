import React from "react";
import "./web.scss";

export default function Web() {
  return (
    <div className="web" id="web">
      <div className="webOption">
        <a href="#projects">
          <i className="fi fi-rr-edit-alt optionIcon"></i>Projects
        </a>
      </div>
      <div className="webOption">
        <a href="#skills">
          <i className="fi fi-rr-laptop optionIcon"></i>Skills
        </a>
      </div>
      <div className="webOption">
        <a href="#contact">
          <i className="fi fi-rr-user optionIcon"></i>Contact
        </a>
      </div>
    </div>
  );
}
