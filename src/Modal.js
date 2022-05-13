import React from "react";
import { motion } from "framer-motion";
import Backdrop from "./Backdrop";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffnes: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const Modal = ({ modal, closeModal }) => {
  return (
    <Backdrop closeModal={closeModal}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="modal-content">
          <div className="modal-left">
            <img
              className="modal-image"
              src={`https://image.tmdb.org/t/p/w500${modal.backdrop_path}`}
              alt={"cover of " + modal.title}
            />
          </div>

          <h1>title: {modal.title}</h1>
          <p>year: {modal.release_date.substring(0, 4)}</p>
          <p className="overview">{modal.overview}</p>
        </div>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
