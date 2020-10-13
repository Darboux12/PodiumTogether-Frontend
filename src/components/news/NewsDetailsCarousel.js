
import React from "react";
import Carousel from "react-bootstrap/Carousel";

import "../../styles/news-page/NewsImagesCarousel.css"

export default function NewsDetailsCarousel(props) {

    const images = props.images;

    return(

        <div>

            <Carousel className="" interval="4000" data-pause="false" pause="false">


                {images.map(item =>



                <Carousel.Item>

                    <img
                        className="d-block w-100 newsCarouselImage"
                        src={`data:image/jpeg;base64,${item.content}`}
                        alt="First slide"
                    />

                </Carousel.Item>

                )}



            </Carousel>

        </div>
    )

}