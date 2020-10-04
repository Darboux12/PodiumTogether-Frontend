import React, {Component, useEffect, useState} from "react";

import "../../../styles/navbar/Navbar.css"

import NavBarUserNotLogged from "./NavBarUserNotLogged";
import NavBarUserLogged from "./NavBarUserLogged";
import NavBarUserAdmin from "./NavBarUserAdmin";

function NavBar(){

    const [isUserLogged, setIsUserLogged] = useState(false);
    const [isUserAdmin, setIsUSerAdmin] = useState(true);

    useEffect(() => {

        let userLoggedSession = localStorage.getItem('userLogged');

        if(userLoggedSession)
            setIsUserLogged(true);

    });

    if(!isUserLogged)
        return <NavBarUserNotLogged/>;
    if(isUserLogged && !isUserAdmin)
        return <NavBarUserLogged/>;
    if(isUserAdmin)
        return <NavBarUserAdmin/>;

}

export default NavBar;