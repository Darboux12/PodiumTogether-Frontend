import React from "react";
import Container from "react-bootstrap/Container";
import Slide from "react-reveal";
import "../../styles/about-page/AboutPage.css"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AboutImage from "../../images/AboutPageImage.jpg"

export default function AboutPage() {

    return (

        <Container className={"AboutContainer"}>

            <h2 className={"aboutPageHeader"}>About podium together</h2>

            <Row>

                <Col className={"d-flex flex-column"}>

                    <Slide left>

                        <h className={"aboutPageElement"}>
                            Podium together is a web application, designed and developed by one university student
                            as an engineering thesis to graduate from Cracow University of Technology.
                            sport events in their neighbourhood.
                        </h>

                        <h className={"aboutPageElement"}>
                            The idea
                            of creating application was derived from sports passion and strong will of creating
                            tool, that let people share their interests and sort out and simplify organizing
                            sport events in their neighbourhood.
                        </h>

                        <h className={"aboutPageElement"}>
                            Major technologies used in this project are:
                        </h>

                        <ul className={"aboutPageElement"}>
                            <li>ReactJS </li>
                            <li>React Hooks</li>
                            <li>React Bootstrap</li>
                            <li>React Reveal</li>
                            <li>Spring</li>
                            <li>Spring Boot</li>
                        </ul>

                    </Slide>

                </Col>

                <Col className={"d-md-flex d-none"}>
                    <img className={"AboutImage"} src={AboutImage} alt={"About Image"}/>
                </Col>

            </Row>

        </Container>



        );




}

