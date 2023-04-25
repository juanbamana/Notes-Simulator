import { Header } from "./components/Header/Header";
import { Container, Snackbar } from '@mui/material';
import { SendNotes } from "./components/SendNotes/SendNotes";
import React, {useState, useEffect}  from 'react'
import { COMENTS_STORAGE } from "./utils/constants";


function App() {


  const [toastProps, setToastProps] = useState({
    open: false,
    text: null
  })

  const [allComents, setAllComents] = useState([])

 useEffect(() => {
   
  const allComentsStorage = localStorage.getItem(COMENTS_STORAGE)

  const allComents = JSON.parse(allComentsStorage)

  setAllComents(allComents)
 
 }, [])
 


  return (
    <Container className="notes-simulator" maxWidth={false}>
      <Header />
      <SendNotes setToastProps={setToastProps} allComents={allComents}/>

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
