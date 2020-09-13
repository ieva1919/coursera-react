import React from 'react'
import { Card, CardImg, CardImgOverlay, CardTitle, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import CommentForm from './CommentForm.js'


function Dishdetail({ dish, comments }) {

    if (!dish) {
        return null
    }

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{dish.name}</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                <div key={dish.id} className="col-6 col-md-6">
                    <Card className="m-1">
                        <Link to={`/menu/${dish.id}`}>
                            <CardImg object src={dish.image} alt={dish.name} />
                            <CardImgOverlay>
                                <CardTitle heading>{dish.name}</CardTitle>
                            </CardImgOverlay>
                        </Link>
                    </Card>
                </div>
                <div key={dish.id} className="col-6 col-md-6">
                    <Card>
                        <div className="m-1 cardtext">
                            <CardBody>
                                <h4>Comment </h4>
                                {comments.map((comment) => (
                                    <ul>
                                        <li>{comment.comment}</li>
                                        <li>-- {comment.author}, {comment.date}</li>
                                    </ul>
                                ))}
                            </CardBody>
                        </div>
                        <CommentForm />
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Dishdetail;