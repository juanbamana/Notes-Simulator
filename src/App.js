import { Header } from "./components/Header/Header";
import { Container, Snackbar } from '@mui/material';
import { SendNotes } from "./components/SendNotes/SendNotes";


function App() {
  return (
    <Container className="notes-simulator" maxWidth={false}>
      <Header />
      <SendNotes/>
    </Container>
  );
}

export default App;
