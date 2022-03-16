import React from "react";
import { SocialData } from  './data.jsx';
import "./social.scss";

export default function Social() {
  const data = SocialData;
  return (
    <div className="social" id="social">
      {data.map((item) => {
        return (
          <a href={item.link} key={item.link}>
            <div className="socialBar">
              <img src={item.icon} className="socialIcon" alt="Social Media Icon"/>
    

            </div>
          </a>
        );
      })}
    </div>
  );
}
