import React from 'react'
import Social from '../SocialBar/Social'
import Divider from '../Divider/Divider'
import './contact.scss'

export default function Contact(){
    return (
        <div className="contact" id="contact">
            <Divider />
            <label className="contactLabel">Contact.</label>
            <div className="contactContainer">
                <div className="contactLeft">
                    <p>
                    <i className="fi fi-rr-envelope icon"></i> trivera51580@gmail.com <br />
                    <i className="fi fi-rr-call-incoming icon"></i>970.515.8586
                    </p>
                    <Social />
                </div>
                <div className="resume">
                    <a download href="https://docs.google.com/document/d/1QmGmosKB2iWCT3piZTI7rnziVmv2oPVZ/edit?usp=sharing&ouid=109568298851160236684&rtpof=true&sd=true">
                    <i className="fi fi-rr-document"></i>
                        view resume
                    </a>
                </div>
            </div>
        </div>
    )
}