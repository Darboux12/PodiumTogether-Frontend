import React, {Component} from "react";
import Container from "react-bootstrap/Container";

import "../../styles/terms-page/TermsPage.css"

export default function TermsPage(){

        return(

            <Container className={"d-flex flex-column align-items-center"}>

            <div className={"col-10 d-flex flex-column align-items-start"}>

                    <h className={"agreementHeader"}>User Agreement</h>

                    <p className={"agreementText"}>This is agreement text</p>

            </div>

            </Container>

        );
}

