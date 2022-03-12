import "bootstrap/dist/css/bootstrap.min.css";
import "./app.scss";

import React from "react";
import Home from "./components/Home/Home";
import GlobalStyle from "./globalStyles";

function App() {
  return (
    <>
    <GlobalStyle />
        <Home />
    </>
  );
}

export default App;
