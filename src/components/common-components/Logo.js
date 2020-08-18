import React, {Component} from "react";
import LogoIcons from "./LogoIcons";
import "../../styles/common-styles/Logo.css"

class Logo extends Component{

    constructor(props){super(props)}

    render() {

        let className = "d-flex flex-column align-items-center justify-content-center";

        if (this.props["isNavbarBrand"]){className += ' navbar-logo';}

        return(

            <div className={className}>

                <LogoIcons/>

                <h className={"logo-header"}>Podium Together</h>

            </div>

        );
    }
}

export default Logo;


