import React from 'react'
import Social from '../SocialBar/Social'
import Divider from '../Divider/Divider'
import './contact.scss'

export default function Contact(){
    return (
        <div className="contact" id="contact">
            <Divider />
            <label className="contactLabel">Contact</label>
            <div className="contactContainer">
                <div className="contactLeft">
                    <p>Get in touch.</p>
                    <Social />
                </div>
                <div className="resume">
                    <a download href="https://docs.google.com/document/d/1gppOgqWC_P0gN5zJT8u9jNp083smO5lA/edit?usp=sharing&ouid=109568298851160236684&rtpof=true&sd=true">
                    <i className="fi fi-rr-document"></i>
                        view resume
                    </a>
                </div>
            </div>
        </div>
    )
}