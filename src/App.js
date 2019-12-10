import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { Global, css } from '@emotion/core'
import CardPage from './components/cards/index';
import normalize from "normalize.css";

function App() {
  return (
    <div className="App">
        <Global
          styles={{
            [['html', 'body']]: {
              height: '100%',
            },
            body: {
              margin: 0,
              padding: 0,
              fontFamily: "Roboto, Source Sans Pro', sans-serif",
              backgroundColor: '#eee',
              color: '#343c5a',
            },
            '#root': {
              display: 'flex',
              flexDirection: 'row',
              minHeight: '100%',
            },
            '*': {
              boxSizing: 'border-box',
            },
            [['h1', 'h2', 'h3', 'h4', 'h5', 'h6']]: {
              margin: 0,
              fontWeight: 600,
            }
            
            
          }}
        />
        <CardPage/>
    </div>
  );
}

export default App;
