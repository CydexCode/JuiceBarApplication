import React from 'react';
import { Container, Typography, makeStyles } from '@material-ui/core';
import Order from './components/Order';
import { fontWeight } from '@mui/system';
import myImage from './images/front image 01.jpg'; // Replace with the actual path to your image


const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: '#f4f4f4',
    
    backgroundSize: 'cover', // You can adjust these properties based on your design requirements
    backgroundRepeat: 'no-repeat',
    padding: theme.spacing(4),
    display: 'fix',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
  },
  
  title: {
    marginBottom: theme.spacing(4),
    fontSize: '3.5rem',
    marginTop: '-30px', // Move the title up by 10 pixels
    marginBottom: '50px', // Move the title up by 10 pixels
    color: '#00796b', // Green color
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
    fontWeight: 700,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth="md">
      
      <Typography className={classes.title} gutterBottom variant="h2" align="center">
        Agriculture Juice Bar
           <img src={myImage} alt="Description of the image" />

      </Typography>
      <Order />
    </Container>
  );
}

export default App;
