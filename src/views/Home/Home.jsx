import './Home.css'
import React from 'react'
import { ReactComponent as Girl } from '../../assets/image/girl.svg'

import ReactTypingEffect from 'react-typing-effect';

const Home = props => (
    <div className="home">
        <div className="text-home">
            <span className="first-text">Olá, meu nome é </span>
            <span className="second-text">Amanda </span>
            <span className="">eu sou </span>
            <ReactTypingEffect 
                className="text-typing" 
                text={["Desenvolvedora", "Front-End"]} 
            />
            
        </div>
        <Girl className="img-home" />
    </div>


)

export default Home