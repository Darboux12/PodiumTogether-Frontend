import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import peopleWeb from "../../../images/peopleWeb.png";
import React from "react";

import "../../../styles/event-details/rows-web/EventDetailsFreeSlotsRow.css"

export default function EventDetailsFreeSlotsRow() {

    return(

        <Row className={"eventDetailFreeSlotsLeftRow"}>

            <Col md={3}>
                <img className={"eventDetailFreeSlotsLeftImage"} src={peopleWeb} alt={"People Web Image"}/>
            </Col>

            <Col className={"d-flex align-items-center justify-content-center"}>
                <h className={"eventDetailFreeSlotsLeftHeader"}>There are 3 free spots left!</h>
            </Col>

        </Row>

    )

}