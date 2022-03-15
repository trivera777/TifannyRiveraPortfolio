import React from "react";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work"
import Header from "./components/Header/Header"
import Contact from "./components/Contact/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.scss";

function App() {
  return (
    <>
    <Header />
    <Projects />
    <Skills />
    <Work />
    <Contact />
    </>
  );
}

export default App;
