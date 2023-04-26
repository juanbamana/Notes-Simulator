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

 useEffect(() => {
   
  const allCommentsStorage = localStorage.getItem(COMMENTS_STORAGE)

  const allComments = JSON.parse(allCommentsStorage)

  setAllComments(allComments)
 
 }, [])
 


  return (
    <Container className="notes-simulator" maxWidth={false}>
      <Header />
      <SendNotes setToastProps={setToastProps} allComments={allComments}/>
       <ListComments allComments={allComments}/>
      <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={toastProps.open}
      autoHideDuration={100}
      message={<span id='message-id'>{toastProps.text}</span>}
      
      />
    </Container>
  );
}

export default App;
