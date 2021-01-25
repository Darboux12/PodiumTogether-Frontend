import React, {Component, useEffect, useState} from "react";

import "../../../styles/navbar/Navbar.css"

import podiumStorage from "../../config/Storage";
import jwtDecode from "jwt-decode";
import {Nav, Navbar} from "react-bootstrap";
import LogoNavbar from "../../common/LogoNavbar";
import Button from "react-bootstrap/Button";
import SignInModal from "../modals/SignInModal";
import SignUpModal from "../modals/SignUpModal";
import SignUpSuccessModal from "../modals/SignUpSuccessModal";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarCheck, faUserCircle} from "@fortawesome/free-regular-svg-icons";
import {faCog, faGlobeEurope, faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import emptyProfile from "../../../images/emptyProfile.png";
import {faUserCog} from "@fortawesome/free-solid-svg-icons/faUserCog";

function NavBar(){

    const [isUserAdmin, setIsUserAdmin] = useState(false);
    const [isUserSigned,setIsUserSigned] = useState(false);

    const [signInModalVisible,setSignInModalVisible] = useState(false);
    const [signUpModalVisible,setSignUpModalVisible] = useState(false);
    const [signUpSuccessModalVisible,setSignUpSuccessModalVisible] = useState(false);

    const [profileImage,setProfileImage] = useState(emptyProfile);

    const username = podiumStorage.get("authorizationToken")
        ? jwtDecode(podiumStorage.get("authorizationToken")).sub : "";

    const signInUser = () => {

        window.location.reload();
    };

    const logOut = () => {

            localStorage.clear();
            window.location = "/home";

    };

    const showSignUpSuccessModal = () => {

        setSignUpModalVisible(false);
        setSignUpSuccessModalVisible(true);

    };

    useEffect(() => {

        if(podiumStorage.get("authorizationToken")){
            setIsUserSigned(true);
        }

    });

    useEffect(() =>{

        if(podiumStorage.get("profileImage"))

            setProfileImage(
                `data:image/jpeg;base64,
                ${ podiumStorage.get("profileImage").content}`);

    });

    const SignInAndOutNav = isUserSigned ? <div/> :  <Nav>
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
    </Nav> ;

    const UserDropdownMobile = isUserSigned && !isUserAdmin ? <Dropdown className={"d-flex flex-column align-items-center"}>

        <Dropdown.Toggle as={"header"} className={"dataToggle"}>
            <FontAwesomeIcon id="logo-icon-1" icon={faUserCircle} className="logo-icon"/>
        </Dropdown.Toggle>

        <Dropdown.Menu className={"dropdown-menu-center"}>

            <Dropdown.Item href="/user/profile">
                <FontAwesomeIcon className={"profileIcon SeeProfileIcon"} icon={faUserCircle}/>
                See your profile
            </Dropdown.Item>

            <NavDropdown.Divider />

            <Dropdown.Item href="/userEvents">
                <FontAwesomeIcon className={"profileIcon MyEventsIcon"} icon={faCalendarCheck}/>
                My events
            </Dropdown.Item>

            <Dropdown.Item href="/userPlaces">
                <FontAwesomeIcon className={"profileIcon MyPlacesIcon"} icon={faGlobeEurope}/>
                My places
            </Dropdown.Item>

            <Dropdown.Item href="/user/profile/edit">
                <FontAwesomeIcon className={"profileIcon SettingsIcon"} icon={faCog}/>
                Settings
            </Dropdown.Item>

            <Dropdown.Item onClick={logOut}>
                <FontAwesomeIcon className={"profileIcon SignOutIcon"} icon={faSignOutAlt}/>
                Sign Out
            </Dropdown.Item>

        </Dropdown.Menu>

    </Dropdown> : <div/> ;

    const UserAdminDropdownMobile = isUserSigned && isUserAdmin ? <Dropdown className={"d-flex flex-column align-items-center"}>

        <Dropdown.Toggle as={"header"} className={"dataToggle"}>
            <FontAwesomeIcon id="logo-icon-1" icon={faUserCircle} className="logo-icon"/>
        </Dropdown.Toggle>

        <Dropdown.Menu className={"dropdown-menu-center"}>

            <Dropdown.Item href="/user/profile">
                <FontAwesomeIcon className={"profileIcon"} icon={faUserCircle}/>
                See your profile
            </Dropdown.Item>

            <Dropdown.Item href="/admin/panel">
                <FontAwesomeIcon className={"profileIcon"} icon={faUserCog}/>
                Admin panel
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

    </Dropdown> : <div/> ;

    const UserNavStandard = isUserSigned && !isUserAdmin ? <Nav>

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
                        <FontAwesomeIcon className={"profileIcon SeeProfileIcon"} icon={faUserCircle}/>
                        See your profile
                    </Dropdown.Item>

                    <Dropdown.Item href="/userEvents">
                        <FontAwesomeIcon className={"profileIcon MyEventsIcon"} icon={faCalendarCheck}/>
                        My events
                    </Dropdown.Item>

                    <Dropdown.Item href="/userPlaces">
                        <FontAwesomeIcon className={"profileIcon  MyPlacesIcon"} icon={faGlobeEurope}/>
                        My places
                    </Dropdown.Item>

                    <Dropdown.Item href="/user/profile/edit">
                        <FontAwesomeIcon className={"profileIcon SettingsIcon"} icon={faCog}/>
                        Settings
                    </Dropdown.Item>

                    <Dropdown.Item onClick={logOut}>
                        <FontAwesomeIcon className={"profileIcon SignOutIcon"} icon={faSignOutAlt}/>
                        Sign Out
                    </Dropdown.Item>

                </Dropdown.Menu>

            </Dropdown>


        </Nav.Item>

    </Nav> : <div/> ;

    const AdminNavStandard = isUserSigned && isUserAdmin  ? <Nav>

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

                    <Dropdown.Item href="/admin/panel">
                        <FontAwesomeIcon className={"profileIcon"} icon={faUserCog}/>
                        Admin panel
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

    </Nav> : <div/> ;

    return ( <Navbar className={"Navbar"} sticky={"top"} collapseOnSelect expand="md" bg="dark" variant="dark">

            <Navbar.Brand href="/home"><LogoNavbar/></Navbar.Brand>

            <Navbar.Brand className={"d-md-none d-flex"}>

                {UserDropdownMobile}

                {UserAdminDropdownMobile}

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

                {UserNavStandard}

                {AdminNavStandard}

                {SignInAndOutNav}



            </Navbar.Collapse>

            <SignInModal
                isSignInModalVisible={signInModalVisible}
                closeSignInModal={() => setSignInModalVisible(false)}
                signInUser = {() => signInUser()}
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

        </Navbar> )

}

export default NavBar;
