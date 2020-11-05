import React from "react";
import LogoIcons from "./LogoIcons";
import "../../styles/logo/LogoNavbar.css"
import Container from "react-bootstrap/Container";

export default function LogoNavbar(){

    return(

        <Container className={"d-flex flex-column align-items-center justify-content-center navbar-logo"}>
            <LogoIcons/>
            <h className={"logo-header"}>Podium Together</h>
        </Container>

    );

}

