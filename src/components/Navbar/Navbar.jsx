import React from "react";
import "./navbar.scss";
import {
  Person,
  Mail,
  GitHub,
  LinkedIn,
  Instagram,
  Attachment,
  VerifiedUser
} from "@material-ui/icons";

export default function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"navbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            tifanny rivera
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>970-515-8586</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>trivera51580@gmail.com</span>
          </div>
          <div className="itemContainer">
            <Attachment className="icon" />
            <a
              href="https://drive.google.com/file/d/103sPP1J2jF5nt-DJ1V0DuZ2HbS6Li7YQ/view?usp=sharing"
              target="_blank"
            >
              view resume
            </a>
          </div>
          <div className="itemContainer">
            <VerifiedUser className="icon" />
            <a
              href="https://www.credly.com/badges/5baf8c6e-b123-4aa6-93b4-630af8b31a97/linked_in"
              target="_blank"
            >
              verifed badge from DU
            </a>
          </div>
          <div className="itemContainer">
            <a href="https://github.com/trivera777" target="_blank">
              <GitHub className="icon" style={{ fontSize: "45px" }} />
            </a>
          </div>
          <div className="itemContainer">
            <a
              href="https://www.linkedin.com/in/tifannyrivera/"
              target="_blank"
            >
              <LinkedIn className="icon" style={{ fontSize: "45px" }} />
            </a>
          </div>
          <div className="itemContainer">
            <a href="https://www.instagram.com/tifann_y/" target="_blank">
              <Instagram className="icon" style={{ fontSize: "45px" }} />
            </a>
            </div>
        </div>
        <div className="right" style={{ float: "right" }}>
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
