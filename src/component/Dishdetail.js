import React from 'react'
import { Card, CardImg, CardImgOverlay, CardTitle, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import CommentForm from './CommentForm.js'
import { Loading } from './Loading';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';


function Dishdetail({ dish, comments, postComment, isLoading, errMess }) {


    if (isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if (errMess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{errMess}</h4>
                </div>
            </div>
        );
    }
    else if (!dish) {
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
                    <FadeTransform
                        in
                        transformProps={{
                            exitTransform: 'scale(0.5) translateY(-50%)'
                        }}>
                        <Card className="m-1">
                            <Link to={`/menu/${dish.id}`}>
                                <CardImg top src={baseUrl + dish.image} alt={dish.name} />
                                <CardImgOverlay>
                                    <CardTitle heading>{dish.name}</CardTitle>
                                </CardImgOverlay>
                            </Link>
                        </Card>
                    </FadeTransform>
                </div>
                <div key={dish.id} className="col-6 col-md-6">
                    <Card>
                        <div className="m-1 cardtext">
                            <CardBody>
                                <h4>Comment </h4>
                                <Stagger in>
                                    {comments.map((comment) => (
                                        <ul>
                                            <Fade in>
                                                <li>{comment.comment}</li>
                                                <li>-- {comment.author}, {comment.date}</li>
                                            </Fade>
                                        </ul>
                                    ))}
                                </Stagger>
                            </CardBody>
                        </div>
                        <CommentForm
                            dishId={dish.id}
                            postComment={postComment}
                        />
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Dishdetail;