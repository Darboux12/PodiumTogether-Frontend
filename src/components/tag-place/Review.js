import React, {useEffect, useState} from "react";
import {faRunning} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-regular-svg-icons";
import "../../styles/tag-place/Review.css"

import Ratings from 'react-ratings-declarative';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Review(props){

    const [rating,setRating] = useState(0);

    useEffect(() => {

       if(rating === 1)
           document.getElementById(props.id).innerText = "Horrible";
        if(rating === 2)
            document.getElementById(props.id).innerText = "Bad";
        if(rating === 3)
            document.getElementById(props.id).innerText = "Average";
        if(rating === 4)
            document.getElementById(props.id).innerText = "Good";
        if(rating === 5)
            document.getElementById(props.id).innerText = "Excellent";

        props.onChange(rating);
    });

    return(

        <Container className={"mb-1 mt-1"}>

            <Row>

                <Col className={"col-md-3 col-12"}>
                    <h className={"reviewHeader mr-5 FormLabel"}>{props.title}</h>
                </Col>

                <Col className={"col-md-4 col-10"}>

                        <Ratings
                            className={"ratings"}
                            rating={rating}
                            widgetRatedColors="gold"
                            changeRating={(newRating) => setRating(newRating)}
                            widgetDimensions={"2em"}
                        >
                            <Ratings.Widget />
                            <Ratings.Widget />
                            <Ratings.Widget />
                            <Ratings.Widget />
                            <Ratings.Widget />

                        </Ratings>

                </Col>

                <Col className={"col-md-4 d-md-flex d-none"}>
                    <h id={props.id} className={"ratingHeader ml-3"}> </h>
                </Col>

            </Row>

        </Container>

    );

}