import eventImage from "../../../images/event-football.jpg";
import Row from "react-bootstrap/esm/Row";
import React from "react";

import "../../../styles/event-details/EventDetailsTitleRow.css"

export default function EventDetailsTitleRow() {

    return(

        <Row className={"eventDetailsImageTitleRow"}>

            <img className={"eventDetailsImage"} src={eventImage} alt={"Event Image"}/>

            <div className={"d-flex flex-column"}>
                <h className={"eventDetailsTitle"}>Common play on Orlik</h>

                <div className={"d-flex flex-row"}>
                    <h className={"eventDetailsAuthor"}>Posted by: Janek126p</h>
                    <a href={"/user/profile"} className={"eventDetailsAuthorLink"}>About Author</a>
                </div>

            </div>

        </Row>




    );

}