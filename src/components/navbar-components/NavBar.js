import React, {Component} from "react";
import {Navbar, Nav, Container} from "react-bootstrap/esm/index";
import navBarImage from "../../images/ball-logo.png"
import Logo from "../common-components/Logo";
import LogoIcons from "../common-components/LogoIcons";
import NavDropdown from "react-bootstrap/NavDropdown";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import "../../styles/navbar-styles/Navbar.css"
import SignInModal from "./SignInModal";
import SignUpModal from "./SignUpModal";


class NavBar extends Component {

    constructor(props){
        super(props);
        this.state = {
            isSignInModalVisible : false,
            isSignUpModalVisible : false
        }
    }

    closeSignInModal(){
        this.setState({isSignInModalVisible : false})
    }

    openSignInModal(){
        this.setState({isSignInModalVisible : true});
    }

    closeSignUpModal(){
        this.setState({isSignUpModalVisible : false})
    }

    openSignUpModal(){
        this.setState({isSignUpModalVisible : true});
    }

    render() {
        return (

            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" sticky="top">

                <Navbar.Brand href="home"><Logo /></Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="mr-auto">
                        <Nav.Link href="#AboutUs">About us</Nav.Link>
                        <Nav.Link href="#Contact">Contact</Nav.Link>
                        <Nav.Link href="#News">News</Nav.Link>

                        <NavDropdown title="Events"  id="eventDropdown">
                            <NavDropdown.Item href="createEvent">New Event</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#Football">Football</NavDropdown.Item>
                            <NavDropdown.Item href="#Jogging">Jogging</NavDropdown.Item>
                            <NavDropdown.Item href="#Volleyball">Volleyball</NavDropdown.Item>
                            <NavDropdown.Item href="#Swimming">Swimming</NavDropdown.Item>
                            <NavDropdown.Item href="#Basketball">Basketball</NavDropdown.Item>
                        </NavDropdown>

                    </Nav>

                    <Nav>
                        <Nav.Item>
                            <Button
                                className={"mt-md-0 mt-3"}
                                id="signInButton"
                                variant="outline-light"
                                onClick={() => this.openSignInModal()}
                            >
                                Sign In</Button>
                        </Nav.Item>

                        <Nav.Item>
                            <Button
                                className={"mt-md-0 mt-3"}
                                id="signUpButton"
                                variant="outline-light"
                                onClick={() => this.openSignUpModal()}

                            >Sign Up</Button>
                        </Nav.Item>

                </Nav>

                </Navbar.Collapse>

                <SignInModal
                    isSignInModalVisible={this.state.isSignInModalVisible}
                    closeSignInModal={() => this.closeSignInModal()}
                />

                <SignUpModal
                    isSignUpModalVisible={this.state.isSignUpModalVisible}
                    closeSignUpModal={() => this.closeSignUpModal()}
                />

            </Navbar>





    );
    }

}
export default NavBar;