import React from "react";
import Container from "react-bootstrap/Container";
import Slide from "react-reveal";
import "../../styles/about-page/AboutPage.css"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import achieveGreatThingsImage from "../../images/achieveGreatThings.jpg";
import AboutItemMobile from "../about-item/AboutItemMobile";
import AboutItem from "../about-item/AboutItem";

import universityBrand from "../../images/universityBrand.jpg"
import aboutIdea from "../../images/aboutIdea.jpg"
import reactBrand from "../../images/reactBrand.png"
import springBrand from "../../images/springBrand.png"

export default function AboutPage() {

    return (

        <Container className={"AboutContainer d-md-flex  flex-column d-none"}>

            <AboutItem
                header = "Podium together?"
                paragraph = "
                        Podium together is a web application, designed and developed by one university student
                            as an engineering thesis to graduate from Cracow University of Technology.

                        "
                image={ universityBrand}
            />

            <AboutItem

                header="The Idea"

                paragraph = "
                         The idea
                            of creating application was derived from sports passion and strong will of creating
                            tool, that let people share their interests and sort out and simplify organizing
                            sport events in their neighbourhood.

                        "
                image={aboutIdea}
            />

            <AboutItem

                header="Frontend & User Interface"

                paragraph =
                         "All frontend & user Interface was designed and implemented
                         using java script library ReactJS, including
                         react hooks, react bootstrap and react reveal"

                image={reactBrand}
            />

            <AboutItem

                header="Backend & Server side"

                paragraph =
                    "Backend & Server side was designed and implemented
                        using java framework spring, including spring boot"

                image={springBrand}
            />


        </Container>

    );

}

