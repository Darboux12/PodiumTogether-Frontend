import React, {Component} from "react";
import NavBar from "./NavBar";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import MainPageCarousel from "./MainPageCarousel";
import "../styles/MainPage.css"
import MainPageAbout from "./MainPageAbout";

class MainPage extends Component{

    render() {
        return(

            <Container className="MainPageContainer">
                <MainPageCarousel/>
                <MainPageAbout/>



            </Container>








        );
    }

}

export default MainPage;