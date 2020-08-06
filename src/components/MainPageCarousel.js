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
                <Carousel className="MainPageCarousel" interval="4000" data-pause="false" pause="false">

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={carouselImageOne}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Make friends</h3>
                            <p>
                                Nothing connects people better then shared passion.
                                Meet new people, who love sports as you.

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
                            <h3>Make a team</h3>
                            <p>Strength is in numbers.
                                Make your dream team and compete with the best</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={carouselImageThree}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Share your passion</h3>
                            <p>Find people who love the same stuff and shere with them your amazing experience.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>


        );
    }

}

export default MainPageCarousel;