import React, {useEffect, useState} from "react";
import "../../styles/review/ReviewAdd.css"

import Ratings from 'react-ratings-declarative';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function ReviewAdd(props){

    const [rating,setRating] = useState(0);

    const handleRatingChange = (newRating) => {

        setRating(newRating);

        if(newRating !== 0)
            props.onChange(newRating);
    };

    return(

        <Container className={"mb-1 mt-1"}>

            <Row>

                <Col className={"col-md-5 col-12"}>
                    <h className={"reviewAddHeader FormLabel"}>{props.title}</h>
                </Col>

                <Col className={"col-md-auto col-10"}>

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

            </Row>

        </Container>

    );

}
