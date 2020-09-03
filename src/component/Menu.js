import React from 'react'
import { Card, CardImg, CardBody, CardTitle, Row, Col } from 'reactstrap'
import Dishdetail from './Dishdetail'
import './Menu.scss';


function RenderMenuItem({ dish }) {
    return (
        <Card>
            <div className="m-1">
                <CardImg object src={dish.image} alt={dish.name} />
                <CardBody >
                    <CardTitle heading><h1>{dish.name}</h1></CardTitle>
                    <CardTitle> {dish.description}</CardTitle>
                </CardBody>
            </div>
        </Card>
    )
}

const Menu = props => {

    const menu = props.dishes.map((dish) => {
        return (
            <Dishdetail
                dish={dish}
                onDishSelect={() => props.onDishSelect(dish.id)}
            />
        )
    });

    return (
        <div className="container">
            <div className="row">
                {menu}
            </div>
            {renderDish(props.selectedDish)}
        </div>
    )
}

function renderDish(dish) {
    if (dish != null) {
        return (
            <Row>
                <Col className="col-12 col-md-6">
                    <RenderMenuItem dish={dish} />
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

export default Menu;