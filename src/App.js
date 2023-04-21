import { Header } from "./components/Header/Header";
import { Container, Snackbar } from '@mui/material';


function App() {
  return (
    <Container className="notes-simulator" maxWidth={false}>
      <Header />
    </Container>
  );
}

export default App;
