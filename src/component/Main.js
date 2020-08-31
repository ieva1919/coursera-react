import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './Menu'
import { DISHES } from '../shared/dishes'
import Dishdetail from './Dishdetail'

class Main extends Component {

    constructor(props) {
        super(props)

        this.state = {
            dishes: DISHES,
            selectedDish: null
        }
    }

    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId })
    }

    render() {
        return (
            <div className="app" >
                <Navbar color="dark" light expand="md">
                    <div className="container">
                        <NavbarBrand href="/"> My menu of the most beautiful dishes</NavbarBrand>
                    </div>
                </Navbar>
                <Menu
                    dishes={this.state.dishes}
                    onDishSelect={(dish) => this.onDishSelect(dish)}
                    selectedDish={this.state.dishes.find((dish) => dish.id === this.state.selectedDish)}
                />
            </div>
        );
    }
}

export default Main;
