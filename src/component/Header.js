import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { NavLink } from 'react-router-dom'

class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        }
        this.toggleNav = this.toggleNav.bind(this)
        this.toggleModal = this.toggleModal.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })

    }

    handleLogin(event) {
        this.toggleModal()
        alert("Username: " + this.username.value + " Password: " + this.password.value + " Remember: " + this.remember.checked)
        event.preventDefault()
    }

    render() {
        return (
            <React.Fragment>
                <Navbar light expand="md" className="navbar-dark">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand href="/">
                            <img src="assets/images/logo.jpg" height="30" width="41" alt="logo" />
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar className="mr-auto">
                                <NavItem>
                                    <NavLink className="nav-Link" to="/home">
                                        <span className="fa fa-home fa-lg"> </span>Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-Link" to="/aboutus">
                                        <span className="fa fa-info fa-lg"> </span> About Us
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-Link" to="/menu">
                                        <span className="fa fa-list fa-lg"> </span> Menu
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-Link" to="/contactus">
                                        <span className="fa fa-address-card fa-lg"> </span> Contact Us
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button pitline onClick={this.toggleModal}>
                                        <span className="fa fa-sign-in fa-lg">
                                        </span> Login
                                    </Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-md-6">
                                <h1>My menu of the most beautiful dishes</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Modal isOpen={this.state.isModalOpen} toggle={this.state.toggleModal}>
                    <ModalHeader toggle={this.state.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username" innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password" innerRef={(input) => this.password = input} />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember" />
                                    Remenber me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary" innerRef={(input) => this.remember = input}>Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

export default Header;
