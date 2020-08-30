import React, {Component} from "react";
import {Navbar, Nav} from "react-bootstrap/esm/index";
import Logo from "../common/Logo";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/esm/Button";
import "../../styles/navbar/Navbar.css"
import SignInModal from "./SignInModal";
import SignUpModal from "./SignUpModal";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGlobeEurope, faMapMarkerAlt, faRunning, faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import userProfileImage from "../../images/person.jpg"
import Dropdown from "react-bootstrap/Dropdown";
import {faCalendarCheck, faUserCircle} from "@fortawesome/free-regular-svg-icons";

class NavBar extends Component {

    constructor(props){
        super(props);
        this.state = {
            isSignInModalVisible : false,
            isSignUpModalVisible : false,
            isUserLogged : true
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
                        <Nav.Link href="/about">About us</Nav.Link>
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
                        <Nav.Link href="/about">About us</Nav.Link>
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
                        <Nav.Item className={"d-flex flex-row align-items-center userProfileIcon"}>
                            <a href={"/userProfile"} className={"d-md-flex d-none"}>
                                <img className={"userProfileImage"} src={userProfileImage} alt="userProfileImage"/>
                            </a>

                            <Dropdown>

                                <Dropdown.Toggle as={"header"} className={"dataToggle"}>
                                    <h className={"userProfileHeader"}>Janek126p</h>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>

                                    <Dropdown.Item href="/userProfile">
                                        <FontAwesomeIcon className={"profileIcon"} icon={faUserCircle}/>
                                        See your profile
                                    </Dropdown.Item>

                                    <NavDropdown.Divider />

                                    <Dropdown.Item href="/userEvents">
                                        <FontAwesomeIcon className={"profileIcon"} icon={faCalendarCheck}/>
                                        My events
                                    </Dropdown.Item>

                                    <Dropdown.Item href="/userPlaces">
                                        <FontAwesomeIcon className={"profileIcon"} icon={faGlobeEurope}/>
                                        My places
                                    </Dropdown.Item>

                                    <Dropdown.Item href="/settings">
                                        <FontAwesomeIcon className={"profileIcon"} icon={faMapMarkerAlt}/>
                                        Settings
                                    </Dropdown.Item>

                                    <Dropdown.Item href="/signOut">
                                        <FontAwesomeIcon className={"profileIcon"} icon={faSignOutAlt}/>
                                        Sign Out
                                    </Dropdown.Item>

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