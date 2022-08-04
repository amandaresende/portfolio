import './Menu.css'
import React from 'react'

import { Link } from 'react-router-dom'

const Menu = props => (
    <header className="Menu">
        <h1 className="titulo">Portfolio</h1>
        <nav>
            <Link to="/home"> Início </Link>
            <Link to="/about"> Sobre </Link>
            <Link to="/projects"> Projetos </Link>
            <Link to="/skills"> Skills </Link>
        </nav>
    </header>
)

export default Menu
