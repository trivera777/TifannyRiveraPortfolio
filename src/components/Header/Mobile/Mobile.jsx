import React from "react";
import "../Mobile/mobile.scss";

export default function Mobile({ isOpen, setIsOpen }) {
  return (
    <div className="mobile" id="mobile">
      <div className="closeIcon" onClick={() => setIsOpen(!isOpen)} >
        <i className="fi fi-rr-cross"></i>
      </div>
      <div className="mobileOptions">
      <div className="mobileOption">
        <a href="#projects">
          <i className="fi fi-rr-edit-alt optionIcon"></i>Projects
        </a>
      </div>
      <div className="mobileOption">
        <a href="#skills">
          <i className="fi fi-rr-laptop optionIcon"></i>Skills
        </a>
      </div>
      <div className="mobileOption">
        <a href="#work">
          <i className="fi fi-rr-briefcase optionIcon"></i>Work
        </a>
      </div>
      <div className="mobileOption">
        <a href="#contact">
          <i className="fi fi-rr-user optionIcon"></i>Contact
        </a>
      </div>
      </div>
    </div>
  );
}
