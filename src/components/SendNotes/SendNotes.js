import React, { useState } from "react";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import "./SendNotes.scss";
import moment from "moment";
import { ModalContainer } from "../Modal/ModalContainer";
import { FormNotes } from "../FormNotes/FormNotes";
import { COMENTS_STORAGE } from "../../utils/constants";

export const SendNotes = ({ setToastProps }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const sendNotes = (event, formState) => {
    event.preventDefault();
    const { name, coment } = formState;
    let allComents = [];
    if(!name || !coment){
       setToastProps({
          open: true,
          text: "Por favor, rellena todos los campos",
        })
     }else{ (formState.time = moment().format("HH:mm:ss"));
    allComents.push(formState);
    localStorage.setItem(COMENTS_STORAGE, JSON.stringify(allComents));
    setToastProps({
      open: true,
      text: "Comentario enviado correctamente",
    });
    closeModal();
  }
    allComents = [];
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
