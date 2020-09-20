import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import EventDetailsTitleRow from "../rows-web/EventDetailsTitleRow";
import EventDetailsFreeSlotsRow from "../rows-web/EventDetailsFreeSlotsRow";
import EventDetailsInformationIconRow from "../rows-web/EventDetailsInformationIconsRow";
import EventDetailsDescriptionRow from "../rows-web/EventDetailsDescriptionRow";
import EventDetailsFileRow from "../rows-web/EventDetailsFileRow";
import EventDetailsJoinEventRow from "../rows-web/EventDetailsJoinEventRow";
import Container from "react-bootstrap/Container";
import React from "react";

export default function EventDetailsPageWeb() {

    return (

        <Container fluid className={"EventDetailsMainContainerWeb d-md-flex d-none"}>
            <Row>

                <Col md={7} className={"eventDetailsMainInformationContainer"}>

                    <Badge className={"eventDetailsBadge"} variant="primary">Football</Badge>

                    <EventDetailsTitleRow/>

                    <EventDetailsFreeSlotsRow/>

                    <EventDetailsInformationIconRow/>

                    <EventDetailsDescriptionRow/>

                    <EventDetailsFileRow/>

                </Col>


                <Col className={"EventDetailsApplyAnotherEventsContainer"}>

                    <EventDetailsJoinEventRow/>



                </Col>

            </Row>
        </Container>

        )

}