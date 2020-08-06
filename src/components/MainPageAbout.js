import React, {Component} from "react";
import "../styles/MainPageAbout.css"
import MainPageCards from "./MainPageCards";
import Container from "react-bootstrap/Container";

class MainPageAbout extends Component{

    render() {

        return(

            <Container>
                <h>A few word about podium together</h>
                <MainPageCards/>
            </Container>











        );


    }


}

export default MainPageAbout;