import React from 'react'
import { Modal } from '@mui/material';

import './ModalContainer.scss'




export const ModalContainer = ({isOpenModal,closeModal, children}) => {
  console.log(isOpenModal)

  return (
 <Modal
  className="modal-container"
  open={isOpenModal}
  onClose={closeModal}
  closeAfterTransitions
>
  <div>{children}</div>
 </Modal>
  )
}