import React from 'react'
import './intro.scss'

export default function Intro(){
    return (
        <div className="intro" id="intro">
            <div className="left">
                <img src="./assets/antelope.png" alt="Tifanny Rivera"></img>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi I'm</h2>
                    <h1>Tifanny Rivera</h1>
                    <h3>Front End Developer</h3>
                <a href="#about">
                    <img src="/assets/down-arrow.webp" alt="down arrow"></img>
                </a>
            </div>
            </div>
            
        </div>
        
    )
}