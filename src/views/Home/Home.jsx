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

            <ReactTypingEffect 
                className="text-typing" 
                text={["Desenvolvedora", "Front-End"]}
                 speed={[500]}
                 eraseDelay={[90]}
                 eraseSpeed={[200]}
                 typingDelay={[150]}

                /> 
                <Girl className="img-home"></Girl>


        </div>
       




    </div>


)

export default Home

 {/* <Girl className="img-home" /> */}
