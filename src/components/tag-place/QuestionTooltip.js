import Tooltip from "react-bootstrap/Tooltip";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faQuestionCircle} from "@fortawesome/free-regular-svg-icons";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import React from "react";

export default function QuestionTooltip(props) {

    return (

        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">{props.text}</Tooltip>}>
                      <span className="d-inline-block">
                        <FontAwesomeIcon
                            id="logo-icon-1"
                            icon={faQuestionCircle}
                            className="ml-1 tagPlaceQuestionIcon"/>
                      </span>
        </OverlayTrigger>

    )



}
