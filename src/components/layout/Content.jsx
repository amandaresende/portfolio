import './Content.css'
import React from 'react'


import { Routes, Route } from "react-router-dom"
import About from '../../views/About/About';

const Content = props => (
    <main className="Content">
        <Routes>
            <Route path="/about" element={<About/>} />

        </Routes>
        {/* --------------------------------------------------- */}
    </main>
);

export default Content