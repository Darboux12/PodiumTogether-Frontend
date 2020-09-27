import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import EventDetailsFileRow from "../../event-details/rows-web/EventDetailsFileRow";
import EventDetailsJoinEventRow from "../../event-details/rows-web/EventDetailsJoinEventRow";
import Container from "react-bootstrap/Container";
import React from "react";
import PlaceDetailsTitleRow from "../rows-web/PlaceDetailsTitleRow";
import PlaceDetailsMapRow from "../rows-web/PlaceDetailsMapRow";
import PlaceDetailsInformationIconRow from "../rows-web/PlaceDetailsInformationRow";
import PlaceDetailsStarRatingRow from "../rows-web/PlaceDetailsStarRatingRow";
import PlaceDetailsCommentRow from "../rows-web/PlaceDetailsCommentRow";
import PlaceDetailsTagPlaceRow from "../rows-web/PlaceDetailsTagPlaceRow";


export default function PlaceDetailsPageWeb() {

    return(

        <Container fluid className={"PlaceDetailsMainContainerWeb d-md-flex d-none"}>

            <Row>

                <Col md={8} className={"PlaceDetailsMainInformationContainer"}>

                    <Badge className={"PlaceDetailsBadge"} variant="primary">Football</Badge>

                    <PlaceDetailsTitleRow/>

                    <PlaceDetailsMapRow/>

                    <PlaceDetailsInformationIconRow/>

                    <PlaceDetailsStarRatingRow/>

                    <PlaceDetailsCommentRow/>

                </Col>


                <Col className={"PlaceDetailsApplyAnotherEventsContainer"}>

                    <PlaceDetailsTagPlaceRow/>



                </Col>

            </Row>
        </Container>
    )

}