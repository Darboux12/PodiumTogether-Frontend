import React, {Component} from "react";

export default function AboutItemMobile(props){

        return(

            <div className={"d-flex flex-column aboutItemContainer align-items-center mb-5"}>

                <div className={"aboutText"}>

                    <h className={"aboutPageHeader"}>{props.header}</h>
                    <img className={"aboutImage w-100 mt-2 mb-2"} src={props.image} alt="aboutPageImage"/>
                    <p className={"aboutPageParagraph"}>{props.paragraph}</p>

                </div>

            </div>

        );
}