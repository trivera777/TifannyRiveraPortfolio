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
                <div className="download">
                    
                </div>
            </div>
        </div>
    )
}