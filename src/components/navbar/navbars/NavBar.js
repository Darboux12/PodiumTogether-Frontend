import React, {Component, useEffect, useState} from "react";

import "../../../styles/navbar/Navbar.css"

import NavBarUserNotLogged from "./NavBarUserNotLogged";
import NavBarUserLogged from "./NavBarUserLogged";
import NavBarUserAdmin from "./NavBarUserAdmin";
import serverAddress, {findUserByUsernameEndpoint, findUsernameFromTokenEndpoint} from "../../config/Constants";
import SecureLS from "../modals/SignInForm";
import podiumStorage from "../../config/Storage";

function NavBar(props){

    const [isUserAdmin, setIsUSerAdmin] = useState(false);
    const [profileImage,setProfileImage] = useState();

    const [isUserSigned,setIsUserSigned] = useState(false);
    const username = podiumStorage.get("username");

    useEffect(() =>{



        if(podiumStorage.get('authorizationToken'))
            setIsUserSigned(true);
        });

    const logOut = () => {

            localStorage.clear();
            window.location = "/home";

    };

        if (!isUserSigned)
            return <NavBarUserNotLogged
                username={username}
                signInUser = {() => setIsUserSigned(true)}
            />;

        if (isUserSigned && !isUserAdmin)
            return <NavBarUserLogged
                username={username}
                profileImage={profileImage}
                logOut={() => logOut()}
               />;

        if (isUserSigned && isUserAdmin)
            return <NavBarUserAdmin
                username={username}
                profileImage={profileImage}
                logOut={() => logOut()}/>;

        return <div/>



}

export default NavBar;