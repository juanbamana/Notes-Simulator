import React, { useState } from "react";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import "./SendNotes.scss";
import moment from "moment";
import { ModalContainer } from "../Modal/ModalContainer";
import { FormNotes } from "../FormNotes/FormNotes";
import { COMMENTS_STORAGE } from "../../utils/constants";

export const SendNotes = ({ setToastProps, allComments }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const sendNotes = (event, formState) => {
    event.preventDefault();
    const { name, comment } = formState;
    let allCommentsArray = [];

    if (allComments) {
      allCommentsArray = allComments;
    }
    if (!name || !comment) {
      setToastProps({
        open: true,
        text: "Por favor, rellena todos los campos",
      });
    } else {
      formState.time = moment();
      allCommentsArray.push(formState);
      localStorage.setItem(COMMENTS_STORAGE, JSON.stringify(allCommentsArray));
      setToastProps({
        open: true,
        text: "Comentario enviado correctamente",
      });
      closeModal();
    }
    allCommentsArray = [];
  };

  return (
    <div className="send-notes">
      <Fab
        color="primary"
        aria-label="add"
        className="send-notes__open-modal"
        onClick={openModal}
      >
        <AddIcon />
      </Fab>

      <ModalContainer isOpenModal={isOpenModal} closeModal={closeModal}>
        <FormNotes sendNotes={sendNotes} />
      </ModalContainer>
    </div>
  );
};
