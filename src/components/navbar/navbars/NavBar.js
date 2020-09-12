import React, {Component, useEffect, useState} from "react";

import "../../../styles/navbar/Navbar.css"

import NavBarUserNotLogged from "./NavBarUserNotLogged";
import NavBarUserLogged from "./NavBarUserLogged";

function NavBar(){

    const [isUserLogged, setIsUserLogged] = useState(false);

    useEffect(() => {

        let userLoggedSession = localStorage.getItem('userLogged');

        if(userLoggedSession)
            setIsUserLogged(true);

    });

    if(!isUserLogged)
        return <NavBarUserNotLogged/>
    if(isUserLogged)
        return <NavBarUserLogged/>

}

export default NavBar;