import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Container, Grid} from '@material-ui/core';

import { makeStyles,  useTheme} from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import HomePageContainer from './components/homepage/';



const gridLGAndXl = makeStyles({
  root: props => ({
    height: "110vh",
    background: "#000",
    color: "#fff",
    fontSize: props.matches ? "1em": "2em"
  }),

  fullWidth: {
    width: "100vw"
  },
  blackColor: {
    color: "#000"
  },
  whiteColor: {
    color: "#fff"
  },
  sectionThirdTextContainer: {
    right: "150px",
    top: "350px",
    
    position: "absolute",
    margin: 0,
    maxWidth: "500px",
    textAlign: "left",
    
    
  },
  outerContainer: {
    
    background: "url('https://content.readymag.com/5d7ae84c6d212c0a00da6054/1538099/upload-47c55c2f-fea3-4500-93ab-f106d73a18a7.jpg')",
    backgroundSize: "100%",
    height: "110vh",


  },
  marginRight: {
    marginRight: "8%",
    '& h3': {
      color: "#fff",
      fontSize: "2em",
      margin: 0
    },
    '& p': {
      color: "#000",
      margin: "30px 0 0 0",
      fontSize: "1em",
      maxWidth: "450px"
    }, 
  },
  marginZero: {
    margin: 0
  }
})

function App() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const classes =  gridLGAndXl({matches});
  return (
    <div className="App">
      <HomePageContainer/>      

      <Grid>
        <Container>
          <Grid container direction="row" justify="center" alignItems="center" className={classes.root}>
            <Grid item lg={6} xl={3}>
              <h1>You are the future of clean energy.</h1>
            </Grid>
          </Grid>
        </Container>
      </Grid>
      <Grid container className={classes.outerContainer}  direction="row" justify="flex-end" alignItems="center">
         
          <Grid item sm={12} md={6} lg={4} className={classes.marginRight}>
            <h3>Societal-scale change</h3>
            <h3>starts with you </h3>
            <p> The time is now for companies to buy zero carbon energy. Our clean energy concierge sources and manages renewables for you and your supply chain.</p>
          </Grid>
      </Grid>

    </div>
  );
}

export default App;
