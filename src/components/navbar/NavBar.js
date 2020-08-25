import React, {Component} from "react";
import {Navbar, Nav} from "react-bootstrap/esm/index";
import Logo from "../common/Logo";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/esm/Button";
import "../../styles/navbar-styles/Navbar.css"
import SignInModal from "./SignInModal";
import SignUpModal from "./SignUpModal";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRunning} from "@fortawesome/free-solid-svg-icons";
import userProfileImage from "../../images/person.jpg"
import Dropdown from "react-bootstrap/Dropdown";

class NavBar extends Component {

    constructor(props){
        super(props);
        this.state = {
            isSignInModalVisible : false,
            isSignUpModalVisible : false,
            isUserLogged : false
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

        let NavBar;

        if(!this.state.isUserLogged){

            NavBar =

                <Navbar className={"Navbar"} collapseOnSelect expand="md" bg="dark" variant="dark">

                <Navbar.Brand href="/home"><Logo isNavbarBrand="true"/></Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="mr-auto">
                        <Nav.Link href="#AboutUs">About us</Nav.Link>
                        <Nav.Link href="#Contact">Contact</Nav.Link>
                        <Nav.Link href="#News">News</Nav.Link>

                        <NavDropdown variant="dark" title="Events"  id="eventDropdown">
                            <NavDropdown.Item  href="/event/create">New Event</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/event/display">All disciplines</NavDropdown.Item>
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

            </Navbar>;
        }

        else{

            NavBar =

                <Navbar className={"Navbar"} collapseOnSelect expand="md" bg="dark" variant="dark">

                <Navbar.Brand href="/home"><Logo isNavbarBrand="true"/></Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="mr-auto">
                        <Nav.Link href="#AboutUs">About us</Nav.Link>
                        <Nav.Link href="#Contact">Contact</Nav.Link>
                        <Nav.Link href="#News">News</Nav.Link>

                        <NavDropdown variant="dark" title="Events"  id="eventDropdown">
                            <NavDropdown.Item  href="/event/create">New Event</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/event/display">All disciplines</NavDropdown.Item>
                            <NavDropdown.Item href="#Football">Football</NavDropdown.Item>
                            <NavDropdown.Item href="#Jogging">Jogging</NavDropdown.Item>
                            <NavDropdown.Item href="#Volleyball">Volleyball</NavDropdown.Item>
                            <NavDropdown.Item href="#Swimming">Swimming</NavDropdown.Item>
                            <NavDropdown.Item href="#Basketball">Basketball</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                    <Nav>
                        <Nav.Item className={"d-flex flex-row align-items-center"}>
                            <a href={"#profile"}><img className={"userProfileImage"} src={userProfileImage} alt="userProfileImage"/></a>

                            <Dropdown>

                                <Dropdown.Toggle as={"header"} className={"dataToggle"}>
                                    <h className={"userProfileHeader"}>Janek126p</h>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>

                            </Dropdown>


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

            </Navbar>;

        }

        return NavBar;

    }
}

export default NavBar;