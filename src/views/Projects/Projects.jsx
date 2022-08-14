import "./Projects.css";
import React from "react";
import Modal from "../../components/Modal/Modal";
import { useState } from "react";
import { projectsList } from "../../utills/projects";

const Projects = (props) => {
  const [modalState, setModalState] = useState({
    open: false
  });

  const handlerOpenModal = (project) => {
    setModalState({
      open: true,
      content: project.content,
      heigth: project.heigth,
      width: project.width
    });
  };

  const handlerCloseModal = () => {
    setModalState({
      open: false
    });
  };

  const openHtmlProject = (htmlProject) => {
    window.open(htmlProject, "_blank");
  };

  return (
    <div className="titulo-projects">
      <h1> Projetos </h1>
      <div className="content-projects">
        <div className="algo">
          {projectsList.map((project) => (
            <span
              className="background"
              onClick={() => {
                project.page
                  ? openHtmlProject(project.page)
                  : handlerOpenModal(project);
              }}
            />
          ))}
        </div>
      </div>
      <Modal 
        modalState={modalState} 
        handlerCloseModal={handlerCloseModal} 
      />
    </div>
  );
};

export default Projects;
