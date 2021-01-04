import "../../../styles/place-details/rows-web/PlaceDetailsTagPlaceRow.css"
import React from "react";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import {faMapMarkedAlt, faPrint, faShare} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-regular-svg-icons";

export default function PlaceDetailsTagPlaceRow(props) {

    let {displayModal} = props;

    return(

        <Row className={"PlaceDetailsJoinPlaceContainer"}>

            <Col>

                <Row className={"PlaceDetailsJoinPlaceUpperRow"}>
                    <Button
                        className={"PlaceDetailsJoinPlaceButton"}
                        variant={"success"}
                        onClick={displayModal}
                    >Add review
                    </Button>
                </Row>

                <Row className={"PlaceDetailsJoinPlaceLowerRow"}>

                    <Col className={"PlaceDetailsJoinPlaceLowerColumn"}>
                        <a className={"PlaceDetailsJoinPlaceLink"} href={"#"}>
                            <FontAwesomeIcon className={"PlaceDetailsJoinPlaceIcon"} icon={faStar}/>
                            <h className={"PlaceDetailsJoinPlaceHeader"}>Save</h>
                        </a>
                    </Col>

                    <Col className={"PlaceDetailsJoinPlaceLowerColumn"}>
                        <a className={"PlaceDetailsJoinPlaceLink"} href={"#"}>
                            <FontAwesomeIcon className={"PlaceDetailsJoinPlaceIcon"} icon={faShare}/>
                            <h className={"PlaceDetailsJoinPlaceHeader"}>Share</h>
                        </a>
                    </Col>

                    <Col className={"PlaceJonLastColumn"}>
                        <a className={"PlaceDetailsJoinPlaceLink"} href={"#"}>
                            <FontAwesomeIcon className={"PlaceDetailsJoinPlaceIcon"} icon={faPrint}/>
                            <h className={"PlaceDetailsJoinPlaceHeader"}>Print</h>
                        </a>
                    </Col>








                </Row>





            </Col>

        </Row>





    )

}
