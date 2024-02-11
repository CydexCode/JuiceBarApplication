import React from 'react';
import { Container, Typography, makeStyles } from '@material-ui/core';
import Order from './components/Order';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: '#f4f4f4',
    padding: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
  },
  title: {
    marginBottom: theme.spacing(4),
    fontSize: '3rem',
    font-wei
    color: '#00796b', // Green color
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
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
