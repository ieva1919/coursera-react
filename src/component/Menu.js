import React from 'react'
import { Card, CardImg, CardBody, CardTitle, Row, Col, Breadcrumb, BreadcrumbItem, CardImgOverlay } from 'reactstrap'
import './Menu.scss';
import { Link } from 'react-router-dom'
import { Loading } from './Loading';


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

    const menu = props.dishes.dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-12 col-md-6">
                <Card className="m-1">
                    <Link to={`/menu/${dish.id}`}>
                        <CardImg object src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle heading>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Link>
                </Card>
            </div>
        )
    });

    if (props.dishes.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.dishes.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    else
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>
                </div>
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
            <div>

                <Row>
                    <Col className="col-12 col-md-6">
                        <RenderMenuItem dish={dish} />
                    </Col>
                    <Col className="col-12 col-md-6">
                    </Col>
                </Row >
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }
}

export default Menu;