import React, {useEffect, useState} from "react";
import {faRunning} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-regular-svg-icons";
import "../../styles/tag-place/Review.css"

import Ratings from 'react-ratings-declarative';

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

        <div className={"d-flex flex-row align-items-center ReviewContainer"}>

            <h className={"reviewHeader mr-3"}>{props.title}</h>

                <Ratings
                    rating={rating}
                    widgetRatedColors="blue"
                    changeRating={(newRating) => setRating(newRating)}
                    widgetDimensions={"2em"}
                >
                    <Ratings.Widget />
                    <Ratings.Widget />
                    <Ratings.Widget />
                    <Ratings.Widget />
                    <Ratings.Widget />
                </Ratings>

            <h id={props.id} className={"ratingHeader ml-3"}> </h>

        </div>






    );





}