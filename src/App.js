import { Header } from "./components/Header/Header";
import { Container, Snackbar } from '@mui/material';
import { SendNotes } from "./components/SendNotes/SendNotes";
import React, {useState, useEffect}  from 'react'
import { COMMENTS_STORAGE } from "./utils/constants";
import { ListComments } from "./components/ListComments/ListComments";


function App() {


  const [toastProps, setToastProps] = useState({
    open: false,
    text: null
  })

  const [allComments, setAllComments] = useState([])
  const [reloaded, setReloaded] = useState(false)

 useEffect(() => {
   
  const allCommentsStorage = localStorage.getItem(COMMENTS_STORAGE)

  const allComments = JSON.parse(allCommentsStorage)

  setAllComments(allComments)
  setReloaded(false)
 }, [reloaded])


 const deleteComments = (index) =>{
  allComments.splice(index, 1)
  setAllComments(allComments)
  localStorage.setItem(COMMENTS_STORAGE, JSON.stringify(allComments))
  setReloaded(false)
  setToastProps({
    open: true,
    text: 'Comentario eliminado correctamente'
  })


 }

 const handleClose = () => {

  setToastProps({
    open: false,
    text: null
  })
 }
 


  return (
    <Container className="notes-simulator" maxWidth={false}>
      <Header />
      <SendNotes setToastProps={setToastProps} allComments={allComments}/>
       <ListComments allComments={allComments} deleteComments={deleteComments}/>
      <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={toastProps.open}
      autoHideDuration={2000}
      message={<span id='message-id'>{toastProps.text}</span>}
      onClose={handleClose}
      />
    </Container>
  );
}

export default App;
