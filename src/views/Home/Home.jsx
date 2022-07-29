import './Home.css'
import React from 'react'
import { ReactComponent as Girl } from '../../assets/image/girl.svg'

const Home = props => (
    <div className="home">
        <div className="text-home">
            <h1> Olá, meu nome é</h1>
            <h2>Amanda</h2>
            
        </div>
        <div><Girl className="img-home" /></div>
    </div>


)

export default Home