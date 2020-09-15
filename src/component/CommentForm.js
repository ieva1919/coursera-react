import React, { useState } from 'react'
import { Row, Col, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap'
import { Control, LocalForm, Errors } from 'react-redux-form'

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);


function CommentForm({ addComment, dishId }) {

    const [isModalOpenForComment, setIsModalOpenForComment] = useState(false);

    function renderComments(data) {
        setIsModalOpenForComment(false)
        addComment(dishId, data.rating, data.name, data.comment)
    }


    return (
        <React.Fragment>
            <Row className="form-group">
                <Col md={{ size: 10, offset: 2 }}>
                    <Button type="submit" outline color="secondary" onClick={() => setIsModalOpenForComment(true)}>
                        <span className="fa fa-pencil fa-lg">
                        </span> Submit Comment
                </Button>
                </Col>
            </Row>
            <Modal isOpen={isModalOpenForComment}>
                <ModalHeader>Submit Comment</ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={(data) => renderComments(data)}>
                        <Row className="form-group">
                            <Label htmlFor="select" md={2}>Raiting</Label>
                            <Col md={{ size: 3 }}>
                                <Control.select
                                    model=".select"
                                    name="select"
                                    id="exampleSelect"
                                    className="form-control"
                                >
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                                <Errors
                                    className="text-danger"
                                    model="local.name"
                                    show="touched"
                                    messages={{
                                        required: 'Required'
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="name" md={2}>Your name</Label>
                            <Col md={10} >
                                <Control.text
                                    model=".name"
                                    id="name"
                                    name="name"
                                    placeholder="Your name"
                                    className="form-control"
                                    validators={{
                                        required,
                                        minLength: minLength(3),
                                        maxLength: maxLength(15)
                                    }}
                                />
                                <Errors
                                    className="text-danger"
                                    model="local.name"
                                    show="touched"
                                    messages={{
                                        required: 'Required ',
                                        minLength: 'Mus be greater than 2 characters',
                                        maxLength: 'Must be 15 characters or less'
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="comment" md={2}>Your comment</Label>
                            <Col md={10}>
                                <Control.textarea
                                    model=".comment"
                                    id="comment"
                                    name="comment"
                                    rows="10"
                                    className="form-control"
                                />
                            </Col>
                        </Row>
                        <Button type="submit" value="submit" color="primary">
                            Submit
                        </Button>
                    </LocalForm>
                </ModalBody>
            </Modal>
        </React.Fragment >
    )
}

export default CommentForm;