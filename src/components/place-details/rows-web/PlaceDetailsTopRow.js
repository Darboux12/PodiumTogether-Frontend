import Row from "react-bootstrap/Row";
import ImageCarousel from "../../common/ImageCarousel";
import Badge from "react-bootstrap/Badge";
import React from "react";

import "../../../styles/place-details/rows-web/PlaceDetailsTopRow.css"

export default function PlaceDetailsTopRow(props) {

    let {name} = props;


    return(

        <Row className={"PlaceDetailsTopRowContainer d-flex flex-column align-items-center"}>

                <div className={"d-flex flex-column"}>
                    <h className={"PlaceDetailsTitle"}>{name}</h>
                </div>
        </Row>

    );

}
