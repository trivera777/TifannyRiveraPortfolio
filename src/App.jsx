import React from "react";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work"
import Contact from "./components/Contact/Contact";
import GlobalStyle from "./globalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/themes";
import { Router, Switch } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.scss";

function App() {
  return (
    <>
    <GlobalStyle />
    <ThemeProvider theme={lightTheme}>
    <Switch>
      <Router exact path="/" component={Home} />
      <Router exact path="/" component={About} />
      <Router exact path="/" component={Skills} />
      <Router exact path="/" component={Work} />
      <Router exact path="/" component={Contact} />
    </Switch>
    </ThemeProvider>
    </>
  );
}

export default App;
