import React, { useState } from "react";
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
      As a newbie front end developer, I was very grateful that my client took a chance on me.
      I was able to pull it off all while still working full time at the bank.
      Yes it got tough at times but the final results motivate me to continue
      to get better as a front end developer.`,
      link: "https://www.merakioasis.store/",
      img: "./assets/meraki.png",
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
            <div className="title">freelance work.</div>
            <div className="bodyContainer">
              <h2>{d.title}</h2>
              <p>{d.desc}</p>
              <br />
              <a href={d.link} target="_blank">
                Live Website
              </a>
              <br />

              <img src={d.img}></img>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
