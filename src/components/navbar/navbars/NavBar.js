import React, {Component, useEffect, useState} from "react";

import "../../../styles/navbar/Navbar.css"

import NavBarUserNotLogged from "./NavBarUserNotLogged";
import NavBarUserLogged from "./NavBarUserLogged";
import NavBarUserAdmin from "./NavBarUserAdmin";

function NavBar(){

    const [isUserLogged, setIsUserLogged] = useState(false);
    const [isUserAdmin, setIsUSerAdmin] = useState(true);

    const username = localStorage.getItem('Username');

    useEffect(() => {

        let userLoggedSession = localStorage.getItem('userLogged');

        if(userLoggedSession)
            setIsUserLogged(true);

    });

    if(!isUserLogged)
        return <NavBarUserNotLogged username = {username}/>;
    if(isUserLogged && !isUserAdmin)
        return <NavBarUserLogged username = {username}/>;
    if(isUserAdmin)
        return <NavBarUserAdmin username = {username}/>;

}

export default NavBar;