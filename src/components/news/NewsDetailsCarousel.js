
import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default function NewsDetailsCarousel(props) {

    const images = props.images;

    return(

        <div>

            <Carousel className="" interval="4000" data-pause="false" pause="false">


                {images.map(item =>



                <Carousel.Item>

                    <img
                        className="d-block w-100"
                        src={`data:image/jpeg;base64,${images[0].content}`}
                        alt="First slide"
                    />

                </Carousel.Item>

                )}



            </Carousel>

        </div>
    )

}