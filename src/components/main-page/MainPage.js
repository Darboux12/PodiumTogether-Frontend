import React, {Component} from "react";

import Container from "react-bootstrap/esm/Container";

import "../../styles/mainpage/MainPage.css"
import {Rotate} from "react-reveal";
import AboutItem from "./AboutItem";
import MainPageAbout from "./MainPageAbout";
import MainPageCarousel from "./MainPageCarousel";




class MainPage extends Component{

    render() {
        return(

            <Container className="MainPageContainer">

                <MainPageCarousel/>











            </Container>








        );
    }

}

export default MainPage;