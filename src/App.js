import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
/*import {Container, Grid} from '@material-ui/core';
import { makeStyles,  useTheme} from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';*/

import HomePageContainer from './components/homepage/';
import AboutPageContainer from './components/aboutpage/';
import ContactPageContainer from './components/contactpage/';


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Route exact path={`/`}>
          <HomePageContainer/>
        </Route>
        <Route exact path={`/about`}>
          <AboutPageContainer />
        </Route>
        <Route exact path={`/contact`}>
          <ContactPageContainer />
        </Route>
      </div>
    </Router>
  );
}

export default App;


