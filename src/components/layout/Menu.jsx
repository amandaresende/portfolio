import './Menu.css'
import React from 'react'

import { Link } from 'react-router-dom'

const Menu = props => (
    <header className="Menu">
        <nav>
            <ul>
                <li>
                    <Link to="/home"> Início </Link>
                </li>
                <li>
                    <Link to="/about"> Sobre </Link>
                </li>
                <li>
                    <Link to="/projects"> Projetos </Link>
                </li>
            </ul>
        </nav>
    </header>
)

export default Menu