import React, { useState } from "react";
import { ArrowForwardIos, ArrowBackIos } from "@material-ui/icons";
import "./clients.scss";

export default function Clients() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      title: "Meraki Oasis",
      desc: `I had the pleasure of working with business 
      owner Jasmin Ponce and her clothing brand, Meraki Oasis. 
      I enjoyed designing her website and it was done with the help of Wix. 
      As a newbie front end developer, I was very grateful that I had the chance
      to show my work. The fact that this was my first paying client made all the
      late nights working on the website worth it.`,
      img: "./assets/meraki.png",
      link: "https://www.merakioasis.store/",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  return (
    <div className="clients" id="clients">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="clientsContainer">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <a href={d.link} target="_blank">
                    Live Website
                  </a>
                </div>
              </div>
              <div className="right">
                <img src={d.img}></img>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <ArrowBackIos
        className="clientsArrow left"
        onClick={() => handleClick("left")}
      />
      <ArrowForwardIos
        className="clientsArrow right"
        onClick={() => handleClick("right")}
      /> */}
    </div>
  );
}
