import './About.css'
import React from 'react'
/* import { ReactComponent as Curriculo } from '../../assets/Curriculo/Curriculo-Amanda-Resende' */



const About = props => (
    <div className="about">
        <div className="text-principal">
            <span className="first-text-about">Quem eu sou</span>

        </div>

        <div className="algo">
            <span className="background"></span>
            <span className="background"></span>
            <span className="background"></span>

            <div class="text-about">
                <h1> Iniciei minha vida profissional com atendimento ao público, como vendedora e representante de atendimento,
                     mas me encontrei na tecnologia, hoje busco uma oportunidade para pôr em prática meus estudos em Frontend 
                     e adquirir a experiência que o mercado demanda.</h1>
                
                <a href="CV - Amanda Resende.pdf" class="btn" >Download CV</a>
            </div>
        </div>




    </div>


)


export default About

