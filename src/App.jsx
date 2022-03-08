import React from "react";
import Home from "./components/Home/Home";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.scss";

function App() {
  return (
    <div className="app">
        <Home />
        <Body />
        <Footer />
    </div>
  );
}

export default App;
