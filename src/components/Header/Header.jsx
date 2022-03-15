import React from "react";
import Web from "./Web";
import Mobile from "./Mobile";
import { useState } from 'react'
import "./header.scss";

export default function Header() {
    const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="header" id="header">
        <div className="menu">
            <div className="webMenu" >
                <Web />
            </div>
            <div className="mobileMenu">
                <div onClick={() => setIsOpen(!isOpen)} >
                <i className="fi fi-rr-apps"></i>
                </div>
                { isOpen && <Mobile />}
            </div>
        </div>
      header
    </div>
  );
}
