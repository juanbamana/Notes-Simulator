import React from 'react'
import { Fab } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import './SendNotes.scss'
import moment from 'moment';

export const SendNotes = () => {
  return (
    <div className='send-notes'>
<Fab color="primary" aria-label="add" className='send-notes__open-modal'>
  <AddIcon />
</Fab>
    </div>
  )
}
