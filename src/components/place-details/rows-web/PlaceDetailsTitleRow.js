import eventImage from "../../../images/event-football.jpg";
import Row from "react-bootstrap/esm/Row";
import React from "react";

import "../../../styles/place-details/rows-web/PlaceDetailsTitleRow.css"

import Badge from "react-bootstrap/Badge";
import ImageCarousel from "../../common/ImageCarousel";

export default function PlaceDetailsTitleRow(props) {

    let {images,discipline} = props;


    return(

        <Row className={"PlaceDetailsImageTitleRow d-flex flex-column align-items-center"}>

            <Row className={"placeImagesRow"}>
                <ImageCarousel images = {images}  />
            </Row>

            <Badge className={"PlaceDetailsBadge"} variant="primary">{discipline}</Badge>

        </Row>




    );

}
