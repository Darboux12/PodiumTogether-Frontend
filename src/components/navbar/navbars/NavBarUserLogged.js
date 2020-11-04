import {Nav, Navbar} from "react-bootstrap";
import Logo from "../../common/Logo";
import NavDropdown from "react-bootstrap/NavDropdown";
import userProfileImage from "../../../images/person.jpg";
import Dropdown from "react-bootstrap/Dropdown";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarCheck, faUserCircle} from "@fortawesome/free-regular-svg-icons";
import {faCog, faGlobeEurope, faMapMarkerAlt, faRunning, faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import SignInModal from "../modals/SignInModal";
import SignUpModal from "../modals/SignUpModal";
import React, {useEffect, useState} from "react";
import LogoNavbar from "../../common/LogoNavbar";
import {faUserCog} from "@fortawesome/free-solid-svg-icons/faUserCog";
import emptyProfile from "../../../images/emptyProfile.png"
import podiumStorage from "../../config/Storage";
import jwtDecode from "jwt-decode";

function NavBarUserLogged(props){

    const [signInModalVisible,setSignInModalVisible] = useState(false);
    const [signUpModalVisible,setSignUpModalVisible] = useState(false);
    const logOut = props.logOut;
    const [profileImage,setProfileImage] = useState(emptyProfile);
    const username = jwtDecode(podiumStorage.get("authorizationToken")).sub;

    useEffect(() =>{

        if(podiumStorage.get("profileImage")){

            setProfileImage(
                `data:image/jpeg;base64,${ podiumStorage.get("profileImage").content}`
            );
        }

        });

    return (

        <Navbar className={"Navbar"} sticky={"top"} collapseOnSelect expand="md" bg="dark" variant="dark">

            <Navbar.Brand href="/home"><LogoNavbar/></Navbar.Brand>

            <Navbar.Brand className={"d-md-none d-flex"}>

                <Dropdown className={"d-flex flex-column align-items-center"}>

                <Dropdown.Toggle as={"header"} className={"dataToggle"}>
                    <FontAwesomeIcon id="logo-icon-1" icon={faUserCircle} className="logo-icon"/>
                </Dropdown.Toggle>

                <Dropdown.Menu className={"dropdown-menu-center"}>

                    <Dropdown.Item href="/user/profile">
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

                    <Dropdown.Item href="/user/profile/edit">
                        <FontAwesomeIcon className={"profileIcon"} icon={faCog}/>
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

                <Nav.Item className={"d-flex flex-row align-items-center userProfileIcon"}>

                    <Dropdown>

                        <Dropdown.Toggle as={"header"} className={"dataToggle d-md-flex d-none"}>
                            <img
                                className={"userProfileImage"}
                                src={profileImage}
                                alt="userProfileImage"/>
                        </Dropdown.Toggle>

                        <Dropdown.Menu className={"dropdown-menu-center"}>

                            <Dropdown.ItemText className={"ProfileNavbarUser"}>{username}</Dropdown.ItemText>

                            <NavDropdown.Divider />

                            <Dropdown.Item href="/user/profile">
                                <FontAwesomeIcon className={"profileIcon"} icon={faUserCircle}/>
                                See your profile
                            </Dropdown.Item>

                            <Dropdown.Item href="/userEvents">
                                <FontAwesomeIcon className={"profileIcon"} icon={faCalendarCheck}/>
                                My events
                            </Dropdown.Item>

                            <Dropdown.Item href="/userPlaces">
                                <FontAwesomeIcon className={"profileIcon"} icon={faGlobeEurope}/>
                                My places
                            </Dropdown.Item>

                            <Dropdown.Item href="/user/profile/edit">
                                <FontAwesomeIcon className={"profileIcon"} icon={faCog}/>
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