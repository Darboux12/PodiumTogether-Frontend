import React from "react";
import Container from "react-bootstrap/Container";
import "../../styles/about-page/AboutPage.css"
import AboutItemMobile from "../about-item/AboutItemMobile";
import AboutItem from "../about-item/AboutItem";

import universityBrand from "../../images/universityBrand.jpg"
import aboutIdea from "../../images/aboutIdea.jpg"
import reactBrand from "../../images/reactBrand.png"
import springBrand from "../../images/springBrand.png"
import restAssuredBrand from "../../images/restAssuredBrand.jpg"

export default function AboutPage() {

    return (

        <Container className={"AboutContainer flex-column "}>

            <div className={"d-md-flex flex-column d-none"}>

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

                <AboutItem

                    header="Testing & validating"

                    paragraph =
                        "Testing of REST service was implemented using
                        REST assured and JUnit"

                    image={restAssuredBrand}
                />

            </div>

            <div className={"d-md-none flex-column d-flex"}>

                <AboutItemMobile
                    header = "Podium together?"
                    paragraph = "
                        Podium together is a web application, designed and developed by one university student
                            as an engineering thesis to graduate from Cracow University of Technology.

                        "
                    image={ universityBrand}
                />

                <AboutItemMobile

                    header="The Idea"

                    paragraph = "
                         The idea
                            of creating application was derived from sports passion and strong will of creating
                            tool, that let people share their interests and sort out and simplify organizing
                            sport events in their neighbourhood.

                        "
                    image={aboutIdea}
                />

                <AboutItemMobile

                    header="Frontend & User Interface"

                    paragraph =
                        "All frontend & user Interface was designed and implemented
                         using java script library ReactJS, including
                         react hooks, react bootstrap and react reveal"

                    image={reactBrand}
                />

                <AboutItemMobile

                    header="Backend & Server side"

                    paragraph =
                        "Backend & Server side was designed and implemented
                        using java framework spring, including spring boot"

                    image={springBrand}
                />

                <AboutItemMobile

                    header="Testing & validating"

                    paragraph =
                        "Testing of REST service was implemented using
                        REST assured and JUnit"

                    image={restAssuredBrand}
                />

            </div>



        </Container>

    );

}

