import React, { useState } from "react";
import { ArrowForwardIos, ArrowBackIos } from "@material-ui/icons";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      title: "Social Media App",
      desc: "This is a mock social media application where user can login, create, post, and delete content.",
      img: "./assets/newpost.png",
      link: "https://tr-socialmediaapp.herokuapp.com/",
      github: "https://github.com/trivera777/SocialMediaApp"
    },
    {
      id: "2",
      title: "Scrypts of Betrayal",
      desc: "This is a javascript fueled web based video game. The user is able to login, and play a basic 2d pixel art top-down video game. I took over the front end side of this application and am very pleased with the results! ",
      img: "./assets/scrypts.png",
      link: "https://scrypts-of-betrayal.herokuapp.com/",
      github: "https://github.com/DMosca2021/Scrypts_of_Betrayal",
    },
    {
      id: "3",
      title: "National Parks Day Trip Planner",
      desc: "Our project allows a user to search different National Parks in a specific state they want to travel to. I enjoyed developing the front end of this project.",
      img: "./assets/np.png",
      link: "https://trivera777.github.io/National-Parks-Day-Trip-Planner/",
      github: "https://github.com/trivera777/National-Parks-Day-Trip-Planner"
    },
    {
      id: "4",
      title: "Furever Home",
      desc: "Use this app to find a Furever friend near you! This app calls the petfinder API and returns pets near you that are ready for their FurEver Home!",
      img: "./assets/fureverhome.png",
      link: "https://fureverhome.herokuapp.com/",
      github: "https://github.com/trivera777/Furever-Home"
    },
    {
      id: "5",
      title: "Rad Media",
      desc: "This is a simple and fun site that I created for a friend. I wanted to showcase his awesome photography and show off a different style of design that I have never done before. I enjoyed adding the distorted title on the site.",
      img: "./assets/radmedia.png",
      link: "https://trivera777.github.io/RadMedia/",
      github: "https://github.com/trivera777/RadMedia"
    },
    {
      id: "6",
      title: "Tech Blog",
      desc: "This app is a tech blog that allows users to create a profile to be able to create, edit and delete their own blog posts. User is also able to comment on other users posts.",
      img: "./assets/techblog.png",
      link: "https://tr-techblog.herokuapp.com/",
      github: "https://github.com/trivera777/TechBlog"
    },
    {
      id: "7",
      title: "Note Taker",
      desc: "An application to create and store notes with Express.js and retrieve note data from JSON file.",
      img: "./assets/notetaker.png",
      link: "https://tr-notetaker.herokuapp.com/",
      github: "https://github.com/trivera777/NoteTaker"
    }
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="worksContainer">
            <div className="item">
            <div className="worksTitle">freelance work.</div>
              <div className="left">
                <div className="leftContainer">
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <p>{d.list}</p>
                  <a href={d.link} target="_blank">Live Website</a>
                  <a href={d.github} target="_blank">GitHub Repo</a>
                </div>
              </div>
              <div className="right">
                <img src={d.img}></img>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ArrowBackIos
        className="worksArrow left"
        onClick={() => handleClick("left")}
      />
      <ArrowForwardIos
        className="worksArrow right"
        onClick={() => handleClick("right")}
      />
    </div>
  );
}
