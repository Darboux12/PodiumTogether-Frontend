import React, {Component} from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome/index";
import { faRunning} from "@fortawesome/free-solid-svg-icons/index";
import { faBiking} from "@fortawesome/free-solid-svg-icons/index";
import { faSkating} from "@fortawesome/free-solid-svg-icons/index";

import "../../styles/Logo.css"
import LogoIcons from "./LogoIcons";

class Logo extends Component{

    render() {
        return(
            <div className={"logo"}>

                <LogoIcons/>

                <h className={"logo-header"}>Podium Together</h>
            </div>

        );
    }


}

export default Logo;


