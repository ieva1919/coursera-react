import React, { useState } from 'react'
import { Row, Col, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap'

function CommentForm({ raiting, name, comment }) {

    const [isModalOpenForComment, setIsModalOpenForComment] = useState(false);
    const [data, setData] = useState({ raiting: '', name: '', comment: '' })

    function renderComments(event) {
        setIsModalOpenForComment(false)
        alert("Your Raiting: " + event.raiting.value + " Your Name: " + event.name.value + " Comment: " + event.comment.value)
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
                    <Form>
                        <FormGroup>
                            <Label htmlFor="select">Raiting</Label>
                            <Input type="select" name="select" id="exampleSelect" value={data.raiting} onChange={e => setData({ ...data, raiting: e.target.value })} >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="name">Your name</Label>
                            <Input type="text" id="name" name="name" placeholder="Your name" value={data.name} onChange={e => setData({ ...data, name: e.target.value })} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="comment">Your comment</Label>
                            <Input type="textarea" id="comment" name="comment" rows="10" value={data.comment} onChange={e => setData({ ...data, comment: e.target.value })} />
                        </FormGroup>
                        <Button type="submit" value="submit" color="primary" onClick={() => renderComments()}>
                            Submit
                        </Button>
                    </Form>
                </ModalBody>
            </Modal>
        </React.Fragment >
    )
}

export default CommentForm;