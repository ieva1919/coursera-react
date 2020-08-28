import React, { Component } from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap'

class DishdetailComponent extends Component {

    render() {

        const dish = this.props.dish

        return (
            <div key={dish.id} className="col-12 col-md-6">
                <Card onClick={this.props.onDishSelect} className="m-1">
                    <CardImg object src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle heading>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Card>
            </div>
        );
    }

}

export default DishdetailComponent;