import React, { Component } from 'react';
import Menu from './Menu'
import Home from './Home'
import { DISHES } from '../shared/dishes'
import Header from './Header'
import Footer from './Footer'
import { Route, Switch, Redirect } from 'react-router-dom';

class Main extends Component {

    constructor(props) {
        super(props)

        this.state = {
            dishes: DISHES,
        }
    }

    render() {

        const HomePage = () => {
            return (
                <Home />
            )
        }

        return (
            <div className="app">
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;
