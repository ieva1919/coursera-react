import React, { Component } from 'react'
import { Card, CardImg, CardBody, CardTitle, Row, Col } from 'reactstrap'
import Dishdetail from './Dishdetail'
import './Menu.scss';

class Menu extends Component {

    constructor(props) {
        super(props)

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
                            <div className="m-1 cardtext">
                                <CardBody>
                                    <h4>Comment </h4>
                                    {dish.comments.map((comment) => (
                                        <ul>
                                            <li>{comment.comment}</li>
                                            <li>-- {comment.author}, {comment.date}</li>
                                        </ul>
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
                <Dishdetail
                    dish={dish}
                    onDishSelect={() => this.props.onDishSelect(dish.id)}
                />
            )
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                {this.renderDish(this.props.selectedDish)}
            </div>
        )
    }

}

export default Menu;