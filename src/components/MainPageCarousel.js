import React, {Component} from "react";
import Container from "react-bootstrap/Container";


import carouselImageOne from "../images/carouselPictureOne.jpg"
import carouselImageTwo from "../images/carouselPictureTwo.jpg"
import carouselImageThree from "../images/carouselPictureThree.jpg"
import Carousel from "react-bootstrap/Carousel";

class MainPageCarousel extends Component{

    render() {
        return(
            <Container>

                <Carousel>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={carouselImageOne}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={carouselImageOne}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={carouselImageOne}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>

            </Container>



        );
    }

}

export default MainPageCarousel;