import Calculator from "../components/Calculator/Calculator";
import calculadora from "../assets/image/calculadora.png"
import snakeGame from "../assets/image/snake-game.png"
import instagram from "../assets/image/projeto-instagram.png"
import netflix from "../assets/image/projeto-netflix.png"

export const projectsList = [
    {
        nome: "Calculadora",
        gitHub: "https://github.com/amandaresende/calculadora-react",
        content: <Calculator/>,
        image: calculadora,
        heigth: 320,
        width: 235
    },
    {
        nome: "Snake Game",
        gitHub: "https://github.com/amandaresende/jogo-da-cobrinha",
        content: <p> Lorem</p>,
        image: snakeGame,
    },
    {
        nome: "Instagram",
        gitHub: "https://github.com/amandaresende/projeto-instagram",
        page: "/instagram/instagram.html",
        image: instagram
    },
    {
        nome: "Netflix",
        gitHub: "https://github.com/amandaresende/projeto-netflix",
        page: "/netflix/netflix.html",
        image:netflix
    }
]
