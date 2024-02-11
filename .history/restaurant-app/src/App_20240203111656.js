import logo from './logo.svg';
import './App.css';
import { Container, Typography } from "@material-ui/core";
import Order from './components/Order';


function App() {
  return (
    <Container maxwidth="md">
          <Typography
          gutterBottom
          variant="h2"
          align="center">
            Agriculture Juice Bar
          </Typography>
          <Order />
    </Container>
  );
}

export default App;
