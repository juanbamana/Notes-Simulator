import { Header } from "./components/Header/Header";
import { Container, Snackbar } from '@mui/material';
import { SendNotes } from "./components/SendNotes/SendNotes";
import React, {useState}  from 'react'


function App() {


  const [toastProps, setToastProps] = useState({
    open: false,
    text: null
  })


  return (
    <Container className="notes-simulator" maxWidth={false}>
      <Header />
      <SendNotes setToastProps={setToastProps}/>

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
