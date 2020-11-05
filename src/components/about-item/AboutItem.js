import React from "react";
import "../../styles/mainpage/AboutItem.css"
export default function AboutItem(props){

        if(props.left !== true)
            return(

                <div className={"d-flex flex-row aboutItemContainer align-items-center mb-5"}>

                    <div className={"aboutText mr-5"}>
                        <h className={"aboutPageHeader"}>{props.header}</h>
                        <p className={"aboutPageParagraph"}>{props.paragraph}</p>

                    </div>

                    <img className={"aboutImage pl-3"} src={props.image} alt="aboutPageImage"/>

                </div> );
        else
            return(


                <div className={"d-flex flex-row aboutItemContainer align-items-center"}>

                    <img className={"aboutImage pr-3"} src={props.image} alt="aboutPageImage"/>

                    <div className={"aboutText ml-5"}>
                        <h className={"aboutPageHeader"}>{props.header}</h>
                        <p className={"aboutPageParagraph"}>{props.paragraph}</p>
                    </div>

                </div>);
}

