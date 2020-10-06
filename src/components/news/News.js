import React, {Component} from "react";

import picture from "../../images/person.jpg"

import "../../styles/news-page/News.css"

import { format } from "date-fns";

export default function News(props){

    const date =  new Date(props.date);

        return(

            <div className={"newsContainer d-flex flex-row  align-items-center"}>

                <img className={"newsImage"} src={`data:image/jpeg;base64,${props.image}`}  alt={"newsImage"}/>

                <div className={"newsTexts"}>

                    <h className={"newsHeader"}>{props.title}</h>

                    <p  className={"newsParagraph mt-3 mb-3"}>{props.text}</p>

                    <a className={"newsLink"} href={"#"}>{props.linkText}</a>

                    <h className={"newsDate"}>{format(date, "dd-MMMM-yyyy")}</h>



                </div>



            </div>

        )
}

