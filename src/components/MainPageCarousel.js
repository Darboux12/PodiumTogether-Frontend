import React, {Component} from "react";
import Container from "react-bootstrap/Container";


import carouselImageOne from "../images/carouselPictureOne.jpg"
import carouselImageTwo from "../images/carouselPictureTwo.jpg"
import carouselImageThree from "../images/carouselPictureThree.jpg"
import Carousel from "react-bootstrap/Carousel";
import "../styles/MainPageCarousel.css"

class MainPageCarousel extends Component{

    render() {
        return(
                <Carousel className="MainPageCarousel">

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={carouselImageOne}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Find motivation</h3>
                            <p>
                                Nothing motivates more then
                                sharing hard work and tears with other person.

                                Find your training partner to achieve incredible goals together.

                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={carouselImageTwo}
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
                            src={carouselImageThree}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>





        );
    }

}

export default MainPageCarousel;