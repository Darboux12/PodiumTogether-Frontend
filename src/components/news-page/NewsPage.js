import React, {Component} from "react";

import "../../styles/news-page/NewsPage.css"
import News from "./News";
import Container from "react-bootstrap/Container";
import NewsMobile from "./NewsMobile";

export default function NewsPage(){

        return(

            <Container>

                <div className={"d-md-flex flex-column d-none"}>

                <News/>
                <News/>
                <News/>
                <News/>

                </div>

                <div className={"d-md-none d-flex flex-column"}>

                    <NewsMobile/>
                    <NewsMobile/>
                    <NewsMobile/>
                    <NewsMobile/>

                </div>

            </Container>

        );

}

