import React, {Component} from "react";
import LogoIcons from "./LogoIcons";
import "../../styles/logo/Logo.css"

export default function Logo(){

        return(

            <div className={"d-flex flex-column align-items-center justify-content-center"}>
                <LogoIcons/>
                <h className={"logo-header"}>Podium Together</h>
            </div>

        );

}




