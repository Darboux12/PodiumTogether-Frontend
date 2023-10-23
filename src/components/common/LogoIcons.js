import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBiking, faRunning, faSkating} from "@fortawesome/free-solid-svg-icons";
import "../../styles/logo/LogoIcons.css"
import Container from "react-bootstrap/Container";

export default function LogoIcons(){

        return(
                <Container
                    className={"d-inline-block align-items-center justify-content-center logo-icons"}
                >
                    <FontAwesomeIcon id="logo-icon-1" icon={faRunning} className="logo-icon"/>
                    <FontAwesomeIcon id="logo-icon-3" icon={faBiking} className="logo-icon"/>
                    <FontAwesomeIcon id="logo-icon-2" icon={faSkating} className="logo-icon"/>
                </Container>
        );

}




