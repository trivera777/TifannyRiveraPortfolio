import React from 'react'
import './menu.scss'

export default function Menu({ menuOpen, setMenuOpen }){
    return (
        <div className={'menu ' + (menuOpen && 'active')}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#about">about</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#works">projects</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#clients">freelance work</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#contact">contact</a>
                </li>
            </ul>
        </div>
    )
}