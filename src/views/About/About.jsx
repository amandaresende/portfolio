import "./About.css";
import React from "react";
import curriculo from "../../assets/Curriculo/Curriculo-Amanda-Resende.pdf";

const About = (props) => (
  <div className="about">
    <div className="text-principal">
      <span className="first-text-about">Sobre mim :)</span>
    </div>

    <div className="algo">
      <span className="background"></span>
      <span className="background"></span>
      <span className="background"></span>

      <div className="text-about">
        <h1>
          Iniciei minha vida profissional com atendimento ao público, como
          vendedora e representante de atendimento, mas me encontrei na
          tecnologia, hoje busco uma oportunidade para pôr em prática meus
          estudos em Frontend e adquirir a experiência que o mercado demanda.
        </h1>

        <button
          onClick={() => window.open(curriculo, "_blank")}
          href="CV - Amanda Resende.pdf"
          className="btn"
        >
          Download
        </button>
      </div>
    </div>
  </div>
);

export default About;
