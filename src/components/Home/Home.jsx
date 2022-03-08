import React from "react";
import Header from '../Header/Header'
import Body from "../Body/Body";
import Footer from "../Footer/Footer";
import "./home.scss";


export default function Home() {
  return (
    <div className="home" id="home">
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    </div>
  );
}
