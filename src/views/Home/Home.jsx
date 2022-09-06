import "./Home.css";
import React from "react";
import { ReactComponent as Girl } from "../../assets/image/girl.svg";

import ReactTypingEffect from "react-typing-effect";

const Home = (props) => (
  <div className="home">
    <div className="text-home">
      <span className="first-text">Olá, meu nome é Amanda</span> 
      <span className="third-text"> e eu sou </span>
      <ReactTypingEffect
        className="text-typing"
        text={["Desenvolvedora", "Front-End"]}
        speed={[500]}
        eraseDelay={[90]}
        eraseSpeed={[200]}
        typingDelay={[150]}
      />
    </div>
    <Girl className="img-home"></Girl>
  </div>
);

export default Home;

