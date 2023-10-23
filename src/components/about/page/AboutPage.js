import React from "react";
import Container from "react-bootstrap/esm/Container";
import "../../../styles/about-page/AboutPage.css"
import Row from "react-bootstrap/Row";
import PodiumTogetherItem from "../standard-items/PodiumTogetherItem";
import FrontendItem from "../standard-items/FrontendItem";
import BackendItem from "../standard-items/BackendItem";
import TestItem from "../standard-items/TestItem";
import PodiumTogetherItemMobile from "../mobile-items/PodiumTogetherItemMobile";
import FrontendItemMobile from "../mobile-items/FrontendItemMobile";
import BackendItemMobile from "../mobile-items/BackendItemMobile";
import TestItemMobile from "../mobile-items/TestItemMobile";

export default function AboutPage() {

    return (

        <Container className={"AboutContainer flex-column "}>

            <Row className={"d-md-flex flex-column d-none"}>

                <PodiumTogetherItem/>

                <FrontendItem/>

                <BackendItem/>

            </Row>

            <Row className={"d-md-none flex-column d-flex"}>

                <PodiumTogetherItemMobile/>

                <FrontendItemMobile/>

                <BackendItemMobile/>

                <TestItemMobile/>

            </Row>

        </Container>

    );

}

