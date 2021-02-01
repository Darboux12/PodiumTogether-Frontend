import React from "react";
import {faTrash, faUserMinus, faUserSlash} from "@fortawesome/free-solid-svg-icons/index";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index";
import "../../../styles/admin/ActionIcons.css"
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

export default function PlaceActionIcons(props) {

    const toolTipShowDelay = 1000;
    const toolTipHideDelay = 100;

    const renderDeleteTooltip = (props) => (
        <Tooltip id="button-tooltip-place" {...props}>
            Delete place
        </Tooltip>);

    return(

        <div className={"ActionIconsContainer"}>

            <OverlayTrigger
                placement="top"
                delay={{ show: toolTipShowDelay, hide: toolTipHideDelay }}
                overlay={renderDeleteTooltip}
            >
                <FontAwesomeIcon
                    icon={faTrash}
                    className="AdminActionIcon DeleteIcon"
                    onClick={() => props.deletePlace(props.placeId)}
                />
            </OverlayTrigger>

        </div>

    );

}
