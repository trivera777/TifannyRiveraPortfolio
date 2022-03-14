import React from "react";
import Projects from "./components/Projects/Projects";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work"
import Contact from "./components/Contact/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.scss";

function App() {
  return (
    <>
    <Home />
    <Projects />
    <Skills />
    <Work />
    <Contact />
    </>
  );
}

export default App;
