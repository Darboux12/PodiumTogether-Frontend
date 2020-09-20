import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFileAlt} from "@fortawesome/free-regular-svg-icons";
import {faFileDownload} from "@fortawesome/free-solid-svg-icons/faFileDownload";
import React from "react";

import "../../../styles/event-details/rows-mobile/EventDetailsFileRowMobile.css"

export default function EventDetailsFileRowMobile() {

    return(

        <Row className={"EventDetailsFileRowContainerMobile"}>

            <Col  className={"EventDetailsFileIconRowContainerMobile"} md={2}>
                <FontAwesomeIcon className={"EventDetailsFileIconMobile"} icon={faFileAlt}/>
            </Col>

            <Col  className={"EventDetailsFilesColumnMobile"} >

                <a className={"EventDetailsFileLinkIconMobile"} href={"#file"}>
                    <FontAwesomeIcon className={"EventDetailsFileLinkIconMobile"} icon={faFileDownload}/>
                    <h className={"EventDetailsFileLinkTextMobile"}>Permission.pdf</h>
                </a>

                <a className={"EventDetailsFileLinkIconMobile"} href={"#file"}>
                    <FontAwesomeIcon className={"EventDetailsFileLinkIconMobile"} icon={faFileDownload}/>
                    <h className={"EventDetailsFileLinkTextMobile"}>Permission.pdf</h>
                </a>

                <a className={"EventDetailsFileLinkIconMobile"} href={"#file"}>
                    <FontAwesomeIcon className={"EventDetailsFileLinkIconMobile"} icon={faFileDownload}/>
                    <h className={"EventDetailsFileLinkTextMobile"}>Permission.pdf</h>
                </a>

            </Col>





        </Row>

    )

}