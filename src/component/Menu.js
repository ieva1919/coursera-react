import React, { Component } from 'react'
import { Card, CardImg, CardBody, CardTitle, Row, Col } from 'reactstrap'
import DishdetailComponent from './DishdetailComponent'

class Menu extends Component {

    constructor(props) {
        super(props)

        this.state = {
            selectedDish: null
        }
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish })
    }

    renderDish(dish) {
        if (dish != null) {
            return (
                <Row>
                    <Col className="col-12 col-md-6">
                        <Card>
                            <div className="m-1">
                                <CardImg object src={dish.image} alt={dish.name} />
                                <CardBody >
                                    <CardTitle heading><h1>{dish.name}</h1></CardTitle>
                                    <CardTitle> {dish.description}</CardTitle>
                                </CardBody>
                            </div>
                        </Card>
                    </Col>
                    <Col className="col-12 col-md-6">
                        <Card>
                            <div className="m-1">
                                <CardBody>
                                    <h2>Comment </h2>
                                    {dish.comments.map((comment) => (
                                        <div>
                                            <p>{comment.comment}</p>
                                            <p>-- {comment.author}, {comment.date}</p>
                                        </div>
                                    ))}
                                </CardBody>
                            </div>
                        </Card>
                    </Col>
                </Row >
            )
        } else {
            return (
                <div></div>
            )
        }
    }

    render() {

        const menu = this.props.dishes.map((dish) => {
            return (
                <DishdetailComponent
                    dish={dish}
                    onDishSelect={() => this.onDishSelect(dish)}
                />
            )
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                {this.renderDish(this.state.selectedDish)}
            </div>
        )
    }

}

export default Menu;