import {Nav, Navbar} from "react-bootstrap";
import Logo from "../../common/Logo";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import SignInModal from "../modals/SignInModal";
import SignUpModal from "../modals/SignUpModal";
import React, {useState} from "react";
import LogoNavbar from "../../common/LogoNavbar";
import SignUpSuccessModal from "../modals/SignUpSuccessModal";

function NavBarUserNotLogged(props){

    const [signInModalVisible,setSignInModalVisible] = useState(false);
    const [signUpModalVisible,setSignUpModalVisible] = useState(false);

    const [signUpSuccessModalVisible,setSignUpSuccessModalVisible] = useState(false);

    const showSignUpSuccessModal = () => {

        setSignUpModalVisible(false);
        setSignUpSuccessModalVisible(true);

    };

    return (

        <Navbar className={"Navbar"} sticky={"top"} collapseOnSelect expand="md" bg="dark" variant="dark">

        <Navbar.Brand href="/home"><LogoNavbar/></Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">

            <Nav className="mr-auto">
                <Nav.Link href="/about">About us</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
                <Nav.Link href="/news">News</Nav.Link>

                <NavDropdown variant="dark" title="Events"  id="eventDropdown">
                    <NavDropdown.Item  href="/event/create">New Event</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/event/display">All disciplines</NavDropdown.Item>
                    <NavDropdown.Item href="#Football">Football</NavDropdown.Item>
                    <NavDropdown.Item href="#Jogging">Jogging</NavDropdown.Item>
                    <NavDropdown.Item href="#Volleyball">Volleyball</NavDropdown.Item>
                    <NavDropdown.Item href="#Swimming">Swimming</NavDropdown.Item>
                    <NavDropdown.Item href="#Basketball">Basketball</NavDropdown.Item>
                    <NavDropdown.Item href="#Other">Other</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown variant="dark" title="Places & Objects"  id="placesDropdown">
                    <NavDropdown.Item  href="/place/create">Tag place</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/place/display">All places & objects</NavDropdown.Item>
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
                        className={"mt-md-0 mt-3 mr-3"}
                        id="signInButton"
                        variant="outline-light"
                        onClick={() => setSignInModalVisible(true)}
                    >
                        Sign In</Button>
                </Nav.Item>

                <Nav.Item>
                    <Button
                        className={"mt-md-0 mt-3"}
                        id="signUpButton"
                        variant="outline-light"
                        onClick={() => setSignUpModalVisible(true)}

                    >Sign Up</Button>
                </Nav.Item>
            </Nav>

        </Navbar.Collapse>

        <SignInModal
            isSignInModalVisible={signInModalVisible}
            closeSignInModal={() => setSignInModalVisible(false)}
            signInUser = {() => props.signInUser()}
        />

        <SignUpModal
            isSignUpModalVisible={signUpModalVisible}
            closeSignUpModal={() => setSignUpModalVisible(false)}
            showSignUpSuccessModal = {() =>  showSignUpSuccessModal()}
        />

        <SignUpSuccessModal
            isSignUpModalVisible={signUpSuccessModalVisible}
            closeSignUpModal={() => setSignUpSuccessModalVisible(false)}
        />

    </Navbar>

    );

}

export default NavBarUserNotLogged;