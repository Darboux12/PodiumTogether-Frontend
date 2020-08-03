import React, {Component} from "react";
import "../styles/MainPageAbout.css"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class MainPageAbout extends Component{

    render() {

        return(

            <Container>

                <Row>

                    <Col id="column">Column Column Column Column Column Column</Col>
                    <Col id="column2">Column Column Column Column Column Column</Col>



                </Row>



            </Container>
        );


    }


}

export default MainPageAbout;