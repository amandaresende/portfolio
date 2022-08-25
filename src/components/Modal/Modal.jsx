import "./Modal.css";

const Modal = ({ modalState, handlerCloseModal }) => {
  return (
    <div >
      {modalState.open ? (
        <div className={"modal"}
        style={{width: modalState.width, height: modalState.height}}>
          <button 
            className="btn-modal"
            onClick={
                () => handlerCloseModal()
            }
          >
            X
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
