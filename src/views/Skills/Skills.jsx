import './Skills.css'
import React from 'react'
import { ReactComponent as Skill } from "../../assets/image/skills.svg";


const Skills = props => (
    <div className="skills">
        <div className="text-principal">
            <span className="first-text-skill">Minhas Habilidades</span>

        </div>

        <div className="icon-skills">

        <Skill className="icon-skills"></Skill>


            <div className="text-skill">
                <div className="text-skills-skills">
                    <p>
                        No momento estou me aplicando ao desenvolvimento de projetos que envolvem as linguagens de programação
                        Front-End como o JavaScript e React. Todos os projetos têm sido compartilhados no meu <a href="https://github.com/amandaresende"class="social-network"> <b>GitHub</b> </a> 
                        <a href="https://github.com/amandaresende" />.
                    </p>
                </div>



            </div>

        </div>


    </div>
)

export default Skills