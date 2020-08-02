import React, {Component} from "react";
import {Navbar, Nav, Container} from "react-bootstrap";
import navBarImage from "../images/ball-logo.png"
import Logo from "./Logo";
import LogoIcons from "./LogoIcons";
import NavDropdown from "react-bootstrap/NavDropdown";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import "../styles/Navbar.css"


class NavBar extends Component {

    render() {
        return (

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

                <Navbar.Brand href="#home"><Logo/></Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="mr-auto">
                        <Nav.Link href="#AboutUs">About us</Nav.Link>
                        <Nav.Link href="#Contact">Contact</Nav.Link>
                        <Nav.Link href="#News">News</Nav.Link>

                        <NavDropdown title="Events"  id="eventDropdown">
                            <NavDropdown.Item href="#OrganizeEvent">New Event</NavDropdown.Item>
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
                            <Button id="signInButton" variant="outline-light">Sign In</Button>
                        </Nav.Item>

                        <Nav.Item>
                            <Button id="signUpButton" variant="outline-light">Sign Up</Button>
                        </Nav.Item>




                </Nav>


                </Navbar.Collapse>
            </Navbar>








    );
    }

}
export default NavBar;