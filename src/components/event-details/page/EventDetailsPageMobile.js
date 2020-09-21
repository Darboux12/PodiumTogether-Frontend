import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import EventDetailsTitleRow from "../rows-web/EventDetailsTitleRow";
import EventDetailsFreeSlotsRow from "../rows-web/EventDetailsFreeSlotsRow";
import EventDetailsInformationIconRow from "../rows-web/EventDetailsInformationIconsRow";
import EventDetailsDescriptionRow from "../rows-web/EventDetailsDescriptionRow";
import EventDetailsFileRow from "../rows-web/EventDetailsFileRow";
import EventDetailsJoinEventRow from "../rows-web/EventDetailsJoinEventRow";
import React from "react";
import EventDetailsTitleRowMobile from "../rows-mobile/EventDetailsTitleRowMobile";
import EventDetailsFreeSlotsRowMobile from "../rows-mobile/EventDetailsFreeSlotsRowMobile";
import EventDetailsInformationIconsRowMobile from "../rows-mobile/EventDetailsInformationIconsRowMobile";
import EventDetailsFileRowMobile from "../rows-mobile/EventDetailsFileRowMobile";

export default function EventDetailsPageMobile() {

    return (

        <Container fluid className={"EventDetailsMainContainerMobile d-md-none"}>
            <Row>

                <Col md={7} className={"eventDetailsMainInformationContainerMobile"}>


                    <EventDetailsTitleRowMobile/>

                    <EventDetailsFreeSlotsRowMobile/>

                    <EventDetailsInformationIconsRowMobile/>

                    <EventDetailsDescriptionRow/>

                    <EventDetailsFileRowMobile/>

                </Col>


                <Col className={"EventDetailsApplyAnotherEventsContainer"}>

                    <EventDetailsJoinEventRow/>



                </Col>

            </Row>
        </Container>

    )

}