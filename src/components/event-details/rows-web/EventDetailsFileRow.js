import React from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import {faCalendarAlt, faFileAlt} from "@fortawesome/free-regular-svg-icons/index";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index";
import {faFileDownload} from "@fortawesome/free-solid-svg-icons/faFileDownload";
import "../../../styles/event-details/rows-web/EventDetailsFileRow.css"

export default function EventDetailsFileRow() {

    return(

        <Row className={"EventDetailsFileRowContainer"}>

            <Col  className={"EventDetailsFileIconRowContainer"} md={2}>
                <FontAwesomeIcon className={"EventDetailsFileIcon"} icon={faFileAlt}/>
            </Col>

            <Col  className={"EventDetailsFilesColumn"} >


                <a className={"EventDetailsFileLinkIcon"} href={"#file"}>
                    <FontAwesomeIcon className={"EventDetailsFileLinkIcon"} icon={faFileDownload}/>
                    <h className={"EventDetailsFileLinkText"}>Permission.pdf</h>
                </a>

                <a className={"EventDetailsFileLinkIcon"} href={"#file"}>
                    <FontAwesomeIcon className={"EventDetailsFileLinkIcon"} icon={faFileDownload}/>
                    <h className={"EventDetailsFileLinkText"}>Permission.pdf</h>
                </a>

                <a className={"EventDetailsFileLinkIcon"} href={"#file"}>
                    <FontAwesomeIcon className={"EventDetailsFileLinkIcon"} icon={faFileDownload}/>
                    <h className={"EventDetailsFileLinkText"}>Permission.pdf</h>
                </a>




            </Col>





        </Row>

    )

}