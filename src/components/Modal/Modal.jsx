import "./Modal.css";

const Modal = ({ modalState, handlerCloseModal }) => {
  return (
    <div>
      {modalState.open ? (
        <div className={"modal"}>
          <button 
            className="btn"
            onClick={
                () => handlerCloseModal()
            }
          >
            fechar
          </button>
          {modalState.content}
        </div>
      ) : (
        <div/>
      )}
    </div>
  );
};

export default Modal;
