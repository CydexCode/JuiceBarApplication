import React from 'react';
import { Container, Typography, makeStyles } from '@material-ui/core';
import Order from './components/Order';
import { fontWeight } from '@mui/system';
import myImage from './images/2.jpg'; // Replace with the actual path to your image



const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: '#fff',
  
    padding: theme.spacing(4),
    display: 'fixed',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
  },
  title: {
    marginBottom: theme.spacing(4),
    marginTop: '-10px', // Move the title up by 10 pixels
    marginBottom: '50px', // Move the title up by 10 pixels
   letterSpacing: '2px',
    fontWeight: 700,
  },
  titleImage: {
    width: '80%', // Adjust the width as needed
    height: '125px', // Maintain aspect ratio
    borderRadius: '8px', // Optional: Add border radius for rounded corners
    margin: '10px 0 0 0 ',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth="md">
      
      <Typography className={classes.title} gutterBottom variant="h2" align="center">
      <img src={myImage} alt="Title Image" className={classes.titleImage} />

      
      </Typography>
      <Order />
    </Container>
  );
}

export default App;
