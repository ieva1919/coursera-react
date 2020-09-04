import React, { Component } from 'react';
import Menu from './Menu'
import { DISHES } from '../shared/dishes'
import Dishdetail from './Dishdetail'
import Header from './Header'
import Footer from './Footer'

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
            <div className="app">
                <Header />
                <Menu
                    dishes={this.state.dishes}
                    onDishSelect={(dish) => this.onDishSelect(dish)}
                    selectedDish={this.state.dishes.find((dish) => dish.id === this.state.selectedDish)}
                />
                <Footer />
            </div>
        );
    }
}

export default Main;
