import React from 'react';
import { useState } from 'react';
import Navbar from './components/Navbar/Navbar'
import Menu from './components/Menu/Menu'
import Intro from './components/Intro/Intro'
import Works from './components/Works/Works'
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
                <Works />
            </div>
        </div>
    )
}

export default App;