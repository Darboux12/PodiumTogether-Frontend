import React, {useEffect, useState} from "react";
import {faRunning} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-regular-svg-icons";
import "../../styles/tag-place/Review.css"

import Ratings from 'react-ratings-declarative';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function ReviewTagForm(props){

    const [rating,setRating] = useState(0);

    const handleRatingChange = (newRating) => {

        if(newRating === 1)
            document.getElementById(props.id).innerText = "Horrible";
        if(newRating === 2)
            document.getElementById(props.id).innerText = "Bad";
        if(newRating === 3)
            document.getElementById(props.id).innerText = "Average";
        if(newRating === 4)
            document.getElementById(props.id).innerText = "Good";
        if(newRating === 5)
            document.getElementById(props.id).innerText = "Excellent";

        setRating(newRating);

        if(newRating !== 0)
            props.onChange(newRating);
    };

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
                            changeRating={(newRating) => handleRatingChange(newRating)}
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
