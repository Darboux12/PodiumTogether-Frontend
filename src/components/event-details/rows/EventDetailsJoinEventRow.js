import "../../../styles/event-details/EventDetailsJoinEventRow.css"
import React from "react";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import {faMapMarkedAlt, faPrint, faShare} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-regular-svg-icons";

export default function EventDetailsJoinEventRow() {

    return(

        <Row className={"EventDetailsJoinEventContainer"}>

            <Col>

                <Row className={"EventDetailsJoinEventUpperRow"}>
                    <Button className={"EventDetailsJoinEventButton"} variant={"success"}>Join Now</Button>
                </Row>

                <Row className={"EventDetailsJoinEventLowerRow"}>

                    <Col className={"EventDetailsJoinEventLowerColumn"}>
                        <a className={"EventDetailsJoinEventLink"} href={"#"}>
                        <FontAwesomeIcon className={"EventDetailsJoinEventIcon"} icon={faStar}/>
                        <h className={"EventDetailsJoinEventHeader"}>Save</h>
                        </a>
                    </Col>

                    <Col className={"EventDetailsJoinEventLowerColumn"}>
                        <a className={"EventDetailsJoinEventLink"} href={"#"}>
                        <FontAwesomeIcon className={"EventDetailsJoinEventIcon"} icon={faShare}/>
                        <h className={"EventDetailsJoinEventHeader"}>Share</h>
                        </a>
                    </Col>

                    <Col className={"EventJonLastColumn"}>
                        <a className={"EventDetailsJoinEventLink"} href={"#"}>
                        <FontAwesomeIcon className={"EventDetailsJoinEventIcon"} icon={faPrint}/>
                        <h className={"EventDetailsJoinEventHeader"}>Print</h>
                        </a>
                    </Col>








                </Row>





            </Col>

        </Row>





    )

}