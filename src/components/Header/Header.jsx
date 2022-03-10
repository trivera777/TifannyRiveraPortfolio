import React from "react";
import "./header.scss";

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="container d_flex">
          <div className="logo">header</div>
        </div>
        <div className="navLink">
          <ul className="link f_flex uppercase">
            <li>
              <a href="home">home</a>
            </li>
            <li>
              <a href="portfolio">portfolio</a>
            </li>
            <li>
              <a href="resume">resume</a>
            </li>
            <li>
              <a href="clients">clients</a>
            </li>
            <li>
              <a href="contact">contact</a>
            </li>
          </ul>
        </div>
      </header>
          <button className="toggle">toggle</button>
    </>
  );
}
