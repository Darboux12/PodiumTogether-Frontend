import React, {Component} from "react";
import Container from "react-bootstrap/esm/Container";
import "../../styles/mainpage/MainPage.css"
import MainPageAbout from "./MainPageAbout";
import MainPageCarousel from "./MainPageCarousel";

export default function MainPage(){

        return(

            <Container className="MainPageContainer">

                <MainPageCarousel/>
                <h className={"w-100 align-items-start mainPageHeaderDesktop d-md-flex d-none "}
                >With Podium Together you can...
                </h>
                <h className={"w-100 align-items-start mainPageHeaderMobile d-md-none d-flex "}
                >With Podium Together you can...
                </h>

                <div className={"d-md-flex d-none"}>
                    <MainPageAbout/>
                </div>

                <div className={"d-md-none d-flex"}>
                    <MainPageAbout mobile={true}/>
                </div>

                <h className={"d-md-flex d-none w-100 align-items-start mainPageHeaderBottomDesktop"}
                >Don't hesitate! Sign up and join the best sport app in the world!
                </h>

                <h className={"d-md-none d-flex w-100 align-items-start mainPageHeaderBottomMobile"}
                >Don't hesitate! Sign up and join the best sport app in the world!
                </h>

            </Container>

        );
}

