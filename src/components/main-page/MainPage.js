import React, {Component} from "react";

import Container from "react-bootstrap/esm/Container";
import MainPageCarousel from "./MainPageCarousel";
import "../../styles/mainpage/MainPage.css"
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