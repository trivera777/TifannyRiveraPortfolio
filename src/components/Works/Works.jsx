import React from "react";
import {PhoneIphone, ArrowForwardIos, ArrowBackIos} from "@material-ui/icons";
import "./works.scss";

export default function Works() {
  return (
    <div className="works" id="works">
      <div className="slider">
        <div className="worksContainer">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <PhoneIphone className="icon" />
                </div>
                <h2>Scrypts of Betrayal</h2>
                <p>description</p>
                <span>projects</span>
              </div>
            </div>
            <div className="right">
                <img src="./assets/scrypts.png"></img>
                </div>
          </div>
        </div>
      </div>
      <ArrowBackIos className="worksArrow left" />
      <ArrowForwardIos className="worksArrow right" />

    </div>
  );
}
