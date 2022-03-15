import React from "react";
import Web from "./Web";
import Mobile from "./Mobile";
import "./header.scss";

export default function Header() {
  return (
    <div className="header" id="header">
        <div className="menu">
            <div className="webMenu" >
                <Web />
            </div>
            <div className="mobileMenu">
                <Mobile />
            </div>
        </div>
      header
    </div>
  );
}
