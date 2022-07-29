import './Content.css'
import React from 'react'


import { Routes, Route } from "react-router-dom"
import About from '../../views/About/About';
import Home from '../../views/Home/Home';
import Projects from '../../views/Projects/Projects';
import Contact from '../../views/Contact/Contact';

const Content = props => (
    <main className="Content">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    </main>
);

export default Content