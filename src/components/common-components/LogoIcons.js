import React, {Component} from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome/index";
import { faRunning} from "@fortawesome/free-solid-svg-icons/index";
import { faBiking} from "@fortawesome/free-solid-svg-icons/index";
import { faSkating} from "@fortawesome/free-solid-svg-icons/index";

import "../../styles/common-styles/LogoIcons.css"

class LogoIcons extends Component{

    render() {
        return(
                <div className={"logo-icons"}>
                    <FontAwesomeIcon id="logo-icon-1" icon={faRunning} className="logo-icon"/>
                    <FontAwesomeIcon id="logo-icon-3" icon={faBiking} className="logo-icon"/>
                    <FontAwesomeIcon id="logo-icon-2" icon={faSkating} className="logo-icon"/>

                </div>
        );
    }


}

export default LogoIcons;


