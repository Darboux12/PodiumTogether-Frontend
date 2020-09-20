import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import peopleWeb from "../../../images/peopleWeb.png";
import React from "react";

import "../../../styles/event-details/rows-mobile/EventDetailsFreeSlotsRowMobile.css"

export default function EventDetailsFreeSlotsRowMobile() {

    return(

        <Row className={"eventDetailFreeSlotsLeftRowMobile"}>


            <Col className={"d-flex align-items-center justify-content-center"}>
                <h className={"eventDetailFreeSlotsLeftHeaderMobile"}>There are 3 free spots left!</h>
            </Col>

        </Row>

    )

}