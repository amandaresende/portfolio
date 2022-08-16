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

  const openExternalLink = (externalLink) => {
    window.open(externalLink, "_blank");
  };

  return (
    <div className="titulo-projects">
      <h1> Projetos </h1>
      <div className="content-projects">
        <div className="projects">
          {projectsList.map((project) => (
            <div>
              <p>{project.nome}</p>
              <img 
                src={project.image}
                className="image-projects"
                onClick={() => {
                  project.page
                    ? openExternalLink(project.page)
                    : handlerOpenModal(project);
                }} 
                />
                <a onClick={() => {
                  openExternalLink(project.gitHub)
                }}>github</a>
            </div>
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
