import React, {Component} from "react";
import picture from "../../images/person.jpg";

import "../../styles/news-page/News.css"
import {format} from "date-fns";

export default function NewsMobile(props){

    const date =  new Date(props.date);

        return(

            <div className={"newsContainerMobile d-flex flex-row  align-items-center"}>

                <img className={"newsImage"} src={`data:image/jpeg;base64,${props.images[0].content}`}  alt={"newsImage"}/>

                <div className={"newsTexts"}>

                    <h className={"newsHeader"}>{props.title}</h>

                    <p  className={"newsParagraph mt-3 mb-3"}>{props.shortText}</p>

                    <a className={"newsLink"} href={"/news/details/" + props.id}>{props.linkText}</a>

                    <h className={"newsDate"}>{format(date, "dd-MMMM-yyyy")}</h>

                </div>

                <h className={"newsDate"}>20.05.2020</h>

            </div>

        );

}
