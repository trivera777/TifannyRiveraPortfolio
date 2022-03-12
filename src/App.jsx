import "bootstrap/dist/css/bootstrap.min.css";
import "./app.scss";

import React from "react";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import GlobalStyle from "./globalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/themes";
import { Route, Switch } from "react-router";

function App() {
  return (
    <>
    <GlobalStyle />
    <ThemeProvider theme={lightTheme}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/" component={About} />
      <Route exact path="/" component={Skills} />
      <Route exact path="/" component={Work} />
      <Route exact path="/" component={Contact} />
    </Switch>
    </ThemeProvider>
        <Home />
    </>
  );
}

export default App;
