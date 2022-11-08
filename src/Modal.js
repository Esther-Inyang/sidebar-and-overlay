import React, { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import "./index.css";
import { Context } from "./context";

const Modal = () => {
  const { modalOpen, closeModal } = useContext(Context);

  return (
    <section className={`${modalOpen ? "modal show-modal" : "modal"}`}>
      <article className="modal-container">
        <div className="modal-btn-container">
          <button className="close-modal-btn" onClick={closeModal}>
            <FaTimes />
          </button>
        </div>

        <h3>Modal</h3>
        <p>
          Whatever you want to say goes here. Thank you for checking this page.
        </p>
      </article>
    </section>
  );
};

export default Modal;
