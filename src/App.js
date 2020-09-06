import React, { Component } from 'react';
import Main from './component/Main'
import './App.scss';
import { BrowserRouter } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="app" >
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
