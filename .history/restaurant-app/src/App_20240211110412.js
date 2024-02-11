import React from 'react';
import { Container, Typography, makeStyles } from '@material-ui/core';
import Order from './components/Order';
import myImage from './images/front image 01.jpg';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: '#', // Make sure to use a valid color code
    backgroundImage: `url(${myImage})`, // Use the imported image variable
   
    backgroundRepeat: 'no-repeat',
    padding: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
  },
  
  title: {
    marginBottom: theme.spacing(4),
    fontSize: '3.5rem',
    marginTop: '-30px',
    marginBottom: '50px',
    color: '#00796b',
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
      </Typography>
      <Order />
    </Container>
  );
}

export default App;
