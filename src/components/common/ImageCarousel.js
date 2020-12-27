
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../../styles/common/ImagesCarousel.css"
import Container from "react-bootstrap/Container";

import emptyImage from "../../images/emptyPlaceImage.jpg"

export default function ImageCarousel(props) {

    let {images} = props;


    if(images.length !== 0)

    return(

        <Container>

            <Carousel className="" interval="4000" data-pause="false" pause="false">

                {images.map(item =>

                    <Carousel.Item className={"ImageCarouselItem"}>

                        <img
                            className="d-block w-100 ImagesCarouselImage"
                            src={`data:image/jpeg;base64,${item.content}`}
                            alt="First slide"
                        />

                    </Carousel.Item>

                )}

            </Carousel>

        </Container>
    );

    else return (

        <Container>

            <Carousel className="" interval="4000" data-pause="false" pause="false">

                <Carousel.Item className={"ImageCarouselItem"}>

                    <img
                        className="d-block w-100 ImagesCarouselImage"
                        src={emptyImage}
                        alt="First slide"
                    />

                </Carousel.Item>



            </Carousel>

        </Container>

    );

}
