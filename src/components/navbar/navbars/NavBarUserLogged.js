import {Nav, Navbar} from "react-bootstrap";
import Logo from "../../common/Logo";
import NavDropdown from "react-bootstrap/NavDropdown";
import userProfileImage from "../../../images/person.jpg";
import Dropdown from "react-bootstrap/Dropdown";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarCheck, faUserCircle} from "@fortawesome/free-regular-svg-icons";
import {faGlobeEurope, faMapMarkerAlt, faRunning, faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import SignInModal from "../modals/SignInModal";
import SignUpModal from "../modals/SignUpModal";
import React, {useState} from "react";
import LogoNavbar from "../../common/LogoNavbar";

function NavBarUserLogged(){

    const [signInModalVisible,setSignInModalVisible] = useState(false);
    const [signUpModalVisible,setSignUpModalVisible] = useState(false);

    const logOut = () => {

        let userLogged = localStorage.getItem('userLogged');

        if(userLogged){
            localStorage.clear();
            window.location.reload();
        }


    };

    return (

        <Navbar className={"Navbar"} collapseOnSelect expand="md" bg="dark" variant="dark">

            <Navbar.Brand href="/home"><LogoNavbar/></Navbar.Brand>

            <Navbar.Brand className={"d-md-none d-flex"}>

                <Dropdown className={"d-flex flex-column align-items-center"}>

                <Dropdown.Toggle as={"header"} className={"dataToggle"}>
                    <FontAwesomeIcon id="logo-icon-1" icon={faUserCircle} className="logo-icon"/>
                </Dropdown.Toggle>

                <Dropdown.Menu className={"dropdown-menu-center"}>

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

                    <Dropdown.Item onClick={logOut}>
                        <FontAwesomeIcon className={"profileIcon"} icon={faSignOutAlt}/>
                        Sign Out
                    </Dropdown.Item>

                </Dropdown.Menu>

            </Dropdown>

            </Navbar.Brand>

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
                    <NavDropdown.Item  href="/places/create">Tag place</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/places/display">All places & objects</NavDropdown.Item>
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

                        <Dropdown.Toggle as={"header"} className={"dataToggle d-md-flex d-none"}>
                            <h className={"userProfileHeader"}>Janek126p</h>
                        </Dropdown.Toggle>

                        <Dropdown.Menu className={"dropdown-menu-center"}>

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

                            <Dropdown.Item onClick={logOut}>
                                <FontAwesomeIcon className={"profileIcon"} icon={faSignOutAlt}/>
                                Sign Out
                            </Dropdown.Item>

                        </Dropdown.Menu>

                    </Dropdown>


                </Nav.Item>

            </Nav>

        </Navbar.Collapse>

            <SignInModal
            isSignInModalVisible={signInModalVisible}
            closeSignInModal={() => setSignInModalVisible(false)}
            />

            <SignUpModal
            isSignUpModalVisible={signUpModalVisible}
            closeSignUpModal={() => setSignUpModalVisible(false)}
             />

        </Navbar>

    );

}

export default NavBarUserLogged;