import React from "react";
import Row from "react-bootstrap/Row";

import mapImage from "../../../images/googleMap.png"
import stadiumImage from "../../../images/stadium.jpg";

import "../../../styles/place-details/rows-web/PlaceDetailsMapRow.css"

export default function PlaceDetailsMapRow() {

    return(

        <Row className={"PlaceDetailsMapRow"}>

            <img className={"PlaceDetailsMapRowImage"} src={mapImage} alt={"Map Image"}/>



        </Row>


    )

}