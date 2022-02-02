import React from 'react';
import { useState } from 'react';
import Navbar from './components/Navbar/Navbar'
import Menu from './components/Menu/Menu'
import Intro from './components/Intro/Intro'
import Works from './components/Works/Works'
import About from './components/About/About'
import Clients from './components/Clients/Clients'
import './app.scss'

function App() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className="app">
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <Menu />
            <div className="sections">
                <Intro />
                <About />
                <Works />
                <Clients />
            </div>
        </div>
    )
}

export default App;