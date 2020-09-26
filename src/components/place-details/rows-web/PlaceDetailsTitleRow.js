import eventImage from "../../../images/event-football.jpg";
import Row from "react-bootstrap/esm/Row";
import React from "react";

import "../../../styles/place-details/rows-web/PlaceDetailsTitleRow.css"

import stadiumImage from "../../../images/stadium.jpg"

export default function PlaceDetailsTitleRow() {

    return(

        <Row className={"PlaceDetailsImageTitleRow"}>

            <img className={"PlaceDetailsImage"} src={stadiumImage} alt={"Event Image"}/>

            <div className={"d-flex flex-column"}>
                <h className={"PlaceDetailsTitle"}>Orlik na Starowiślnej</h>

            </div>

        </Row>




    );

}