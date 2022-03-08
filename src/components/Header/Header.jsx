import React from "react";
import Web from './web/Web'
import "./header.scss";

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        tifanny rivera
        <div className="menu">
          <div className="webMenu">
            {/* <Web /> */}
          </div>
          <div className="mobileMenu">
           <Widgets />
            mobile</div>
        </div>
      </div>
    </div>
  );
}
