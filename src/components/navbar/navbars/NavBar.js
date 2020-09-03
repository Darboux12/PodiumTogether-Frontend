import React, {Component, useState} from "react";

import "../../../styles/navbar/Navbar.css"

import NavBarUserNotLogged from "./NavBarUserNotLogged";
import NavBarUserLogged from "./NavBarUserLogged";

function NavBar(props){

    const userLogged = props.userLogged;

    if(!userLogged)
        return <NavBarUserNotLogged/>
    if(userLogged)
        return <NavBarUserLogged/>

}

export default NavBar;