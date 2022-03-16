import React from "react";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Contact from "./components/Contact/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.scss";

export default function App() {
  return (
    <div className="body">
      <Header />
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="work">
        <Work />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};
