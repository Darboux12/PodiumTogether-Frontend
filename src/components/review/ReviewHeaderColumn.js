import "../../styles/review/ReviewModal.css"
import Col from "react-bootstrap/Col";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPenSquare} from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function ReviewHeaderColumn() {

    return (

        <Col className={"ReviewHeaderColumn d-flex flex-row align-items-center"}>
            <FontAwesomeIcon className={"ReviewPenIcon"} icon={faPenSquare}/>
            <h className={"ReviewMainHeader"}>Review this place</h>
        </Col>

    )
}
