
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../../styles/common/ImagesCarousel.css"
import Container from "react-bootstrap/Container";

export default function ImageCarousel(props) {

    const images = props.images;

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
    )

}