import React from "react";
import Web from "./Web/Web";
import Mobile from "./Mobile/Mobile";
import { useState } from "react";
import "./header.scss";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="header" id="header">
      <div className="menu">
        <div className="webMenu">
          <Web />
        </div>
        <div className="mobileMenu">
          <div onClick={() => setIsOpen(!isOpen)}>
            <i className="fi fi-rr-apps menuIcon"> </i>
          </div>
          {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </div>
    </div>
  );
}
