import "./Modal.css";

const Modal = ({ openModal, handlerCloseModal }) => {
  return (
    <div>
      {openModal ? (
        <div className={"modal"}>
          <button className="btn" onClick={() => handlerCloseModal()}>fechar</button>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Modal;
