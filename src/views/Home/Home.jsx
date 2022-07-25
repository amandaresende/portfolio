import './Home.css'
import React from 'react'
import { ReactComponent as Girl } from '../../assets/image/girl.svg'

const Home = props => (
    <div className="home">
        <div className="text-home">
            <h1> Seja Bem vindx ao meu site!</h1>
            <h2>Aqui você irá conhecer um pouco sobre mim, minhas habilidades e meus projetos.</h2>
            
        </div>
        <div><Girl className="img-home" /></div>
    </div>


)

export default Home