import React from "react";

export default function Web() {
  return (
    <div className="web" id="web">
      <div className="webOption">
        <a href="project">
        <i className="fi fi-rr-edit-alt optionIcon"> </i> Projects
        </a>
      </div>
      <div className="webOption">
        <a href="project">
        <i className="fi fi-rr-laptop optionIcon"></i>Skills
        </a>
      </div>
      <div className="webOption">
        <a href="project">
        <i className="fi fi-rr-briefcase optionIcon"></i>Work
        </a>
      </div>
      <div className="webOption">
        <a href="project">
        <i className="fi fi-rr-user optionIcon"></i>Contact
        </a>
      </div>
    </div>
  );
}
