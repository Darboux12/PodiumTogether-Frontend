import React from "react";
import LogoIcons from "./LogoIcons";
import "../../styles/logo/Logo.css"
import Container from "react-bootstrap/Container";

export default function Logo(){

        return(

            <Container
                className={"d-flex flex-column align-items-center justify-content-center"}
            >
                <LogoIcons/>
                <h className={"logo-header"}>Podium Together</h>
            </Container>

        );

}




