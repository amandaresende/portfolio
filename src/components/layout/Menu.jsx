import './Menu.css'
import React from 'react'

import { Link } from 'react-router-dom'

const Menu = props => (
    <header className="Menu">
        <h1 className="titulo">Amanda Resende</h1>
        <nav>
            <Link to="/home"> Início </Link>
            <Link to="/about"> Sobre </Link>
            <Link to="/habilidades"> Habilidades </Link>
            <Link to="/projects"> Projetos </Link>
        </nav>
    </header>
)

export default Menu
