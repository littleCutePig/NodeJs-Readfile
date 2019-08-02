import React, { Component } from 'react';
import route from './route/config';
import Html from './route/index';
import { BrowserRouter, Redirect } from 'react-router-dom';
import './App.css';
// import Index from './views/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Html route={route}></Html>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
