import './Home.css'
import React from 'react'
import { ReactComponent as Girl } from '../../assets/image/girl.svg'

import ReactTypingEffect from 'react-typing-effect';

const Home = props => (
    <div className="home">
        <div className="text-home">
            <span className="first-text">Olá, meu nome é </span> <br />
            <span className="second-text">Amanda</span> <br/>
            <span className="third-text">eu sou </span>
        </div>
        <div className="text-home-second">
            
        </div>

        {/* <ReactTypingEffect 
                className="text-typing" 
                text={["Desenvolvedora", "Front-End"]} 
            />  */}


        {/* <Girl className="img-home" /> */}
    </div>


)

export default Home