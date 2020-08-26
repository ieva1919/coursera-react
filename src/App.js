import React from 'react';
import './App.css';
import { Navbar, Nav } from 'reactstrap';

function App() {
  return (
    <div className="app">
      <Navbar color="dark" light expand="md">
        <div className="container">
          <h1>My menu</h1>
        </div>
      </Navbar>
    </div>
  );
}

export default App;
