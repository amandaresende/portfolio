import './Content.css'
import React from 'react'


import { Routes, Route } from "react-router-dom"
import About from '../../views/About/About';
import Home from '../../views/Home/Home';
import Projects from '../../views/Projects/Projects';

const Content = props => (
    <main className="Content">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
        </Routes>
    </main>
);

export default Content