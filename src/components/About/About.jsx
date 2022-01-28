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
          Hi my name is Tifanny! I come from a small town in Colorado called
          Greeley. I was born in Mexico but raised in Colorado the majority of
          my life.
          <br />
          For the past five years I have been working in the banking industry.
          Five years is a long time. For me anyway.
          <br />
          One day as I was browsing through job postings, I came across a job
          that required coding experience. I wasn't really sure what that was,
          looked into coding, and that's what started it all.
          <br />I immediately enrolled myself in a Coding Bootcamp that was
          offered at the University of Denver. Six months later and about 500
          hours plus of bootcamp structure, I received a
          {" "}
          <a
            href="https://www.credly.com/badges/5baf8c6e-b123-4aa6-93b4-630af8b31a97/linked_in"
            target="_blank"
          >
          verifed badge 
          </a>
          {" "}
           and a 
           {" "}
           <a
           href="https://drive.google.com/file/d/1BGVKC7ko9hxC-JgvzyfjBU3LOKJkH1ZM/view?usp=sharing"
           target="_blank"

           >
           certificate of competion.
           </a>
           {" "}
        </div>
      </div>
    </div>
  );
}
