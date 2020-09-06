import React from 'react'
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap'


function Dishdetail({ dish, onDishSelect }) {

    if (!dish) {
        return null
    }

    return (
        <div key={dish.id} className="col-12 col-md-6">
            <Card onClick={onDishSelect} className="m-1">
                <CardImg object src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle heading>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Card>
        </div>
    );
}

export default Dishdetail;