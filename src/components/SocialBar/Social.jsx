import React from "react";
import "./social.scss";

export default function Social() {
  const data = SocialData;
  return (
    <div className="social" id="social">
      {data.map((item) => {
        return (
          <a href={item.link}>
            <div className="socialBar">
              <img src={item.icon} className="socialIcon" />
            </div>
          </a>
        );
      })}
    </div>
  );
}
