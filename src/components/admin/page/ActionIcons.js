import React from "react";
import {faUserMinus, faUserSlash} from "@fortawesome/free-solid-svg-icons/index";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index";
import "../../../styles/admin/ActionIcons.css"
import {faUserCheck} from "@fortawesome/free-solid-svg-icons/faUserCheck";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

export default function ActionIcons(props) {

    const toolTipShowDelay = 1000;
    const toolTipHideDelay = 100;

    const renderDeleteTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Delete user
        </Tooltip>);

    const renderBanTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Ban user
        </Tooltip>);

    const renderUnBanTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Unban user
        </Tooltip>);

    return(

        <div className={"ActionIconsContainer"}>

            <OverlayTrigger
                placement="top"
                delay={{ show: toolTipShowDelay, hide: toolTipHideDelay }}
                overlay={renderDeleteTooltip}
            >
                <FontAwesomeIcon
                    icon={faUserMinus}
                    className="AdminActionIcon DeleteIcon"
                    onClick={() => props.deleteUser(props.username)}
                />
            </OverlayTrigger>

            <OverlayTrigger
                placement="top"
                delay={{ show: toolTipShowDelay, hide: toolTipHideDelay }}
                overlay={renderBanTooltip}
            >
                <FontAwesomeIcon
                    icon={faUserSlash}
                    className="AdminActionIcon BanIcon"
                    onClick={() => props.banUser}
                />
            </OverlayTrigger>

            <OverlayTrigger
                placement="top"
                delay={{ show: toolTipShowDelay, hide: toolTipHideDelay }}
                overlay={renderUnBanTooltip}
            >
                <FontAwesomeIcon
                    icon={faUserCheck}
                    className="AdminActionIcon UnBanIcon"
                    onClick={() => props.unbanUser}
                />
            </OverlayTrigger>

        </div>

    );

}