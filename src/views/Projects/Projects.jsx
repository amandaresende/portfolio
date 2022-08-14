import "./Projects.css";
import React from "react";
import Modal from "../../components/Modal/Modal";
import { useState } from "react";

const Projects = (props) => {
  const [openModal, setOpenModal] = useState(false);

  const handlerOpenModal = () => {
    setOpenModal(true);
  };
  const handlerCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div className="titulo-projects">
      <h1> Projetos </h1>
      <div className="content-projects">
        <div className="algo">
          <span
            className="background"
            onClick={() => {
              window.open("/instagram.html", "_blank");
            }}
          ></span>
          <span
            className="background"
            onClick={() => {
              handlerOpenModal();
            }}
          ></span>
          <span
            className="background"
            onClick={() => {
              handlerOpenModal();
            }}
          ></span>
        </div>
      </div>
      <Modal openModal={openModal} handlerCloseModal={handlerCloseModal} />
    </div>
  );
};

export default Projects;
