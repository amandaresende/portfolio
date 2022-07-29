import './Home.css'
import React from 'react'
import { ReactComponent as Girl } from '../../assets/image/girl.svg'

const Home = props => (
    <div className="home">
        <div className="text-home">
            <span className="first-text">Olá, meu nome é</span>
            <span className="second-text">Amanda</span>
            <h1> </h1>
        </div>
        <div><Girl className="img-home" /></div>
    </div>


)

export default Home