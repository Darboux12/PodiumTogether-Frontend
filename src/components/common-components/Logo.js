import React, {Component} from "react";

import "../../styles/common-styles/Logo.css"
import LogoIcons from "./LogoIcons";

class Logo extends Component{

    constructor(props){
        super(props);
    }

    render() {
        return(

            <div className={"logo"}
                 style={{fontSize: this.props.size}}
            >
                <LogoIcons/>

                <h className={"logo-header"}>Podium Together</h>

            </div>

        );
    }

}

export default Logo;


