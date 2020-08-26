import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.scss';
import Menu from './component/Menu'
import { DISHES } from './shared/dishes'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      dishes: DISHES
    }
  }

  render() {
    return (
      <div className="app" >
        <Navbar color="dark" light expand="md">
          <div className="container">
            <NavbarBrand href="/"> My menu of the most beautiful dishes</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} />
      </div>
    );
  }
}

export default App;
