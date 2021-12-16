import React from 'react'
import './projects.scss'

export default function Projects(){
    return (
        <div className="projects" id="projects">
            <h1>projects.</h1>
            <div className="container">
                <div className="item">
                    <img src="./assets/scrypts.png" alt="Scrypts of Betrayal"></img>
                    <h3>Scrypts of Betrayal</h3>
                </div>
                <div className="item">
                    <img src="./assets/np.png" alt="National Parks Day Trip Planner"></img>
                    <h3>National Parks Day Trip Planner</h3>
                </div>
                {/* <div className="item">
                    <img src="./assets/merakioasis.png" alt="Meraki Oasis"></img>
                    <h3>Meraki Oasis</h3>
                </div> */}
                <div className="item">
                    <img src="./assets/radmedia.png" alt="Rad Media"></img>
                    <h3>Rad Media</h3>
                </div>
            </div>
        </div>
    )
}