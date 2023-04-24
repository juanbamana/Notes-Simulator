import React, {useState}  from 'react'
import { Fab } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import './SendNotes.scss'
import moment from 'moment';
import { ModalContainer } from '../Modal/ModalContainer';

export const SendNotes = () => {


const [isOpenModal, setIsOpenModal]  = useState(false);

const openModal = () =>{ 
  setIsOpenModal(true)
}

const closeModal = () =>{ 
  setIsOpenModal(false)
}


  return (
    <div className='send-notes'>
<Fab color="primary" aria-label="add" className='send-notes__open-modal' onClick={openModal}>
  <AddIcon />
</Fab>

<ModalContainer isOpenModal={isOpenModal} closeModal={closeModal}>

  Probando mi puto Modal


</ModalContainer>
    </div>
  )
}
