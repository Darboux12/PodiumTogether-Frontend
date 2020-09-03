import React, {Component} from "react";

import picture from "../../images/desk.jpg"

import "../../styles/news-page/LatestNews.css"

export default function LatestNews(){

        return(

            <div className={"d-flex flex-row latestNews"}>

                <img className={"latestNewsImage"} src={picture} alt={"image"}/>

                    <div className={"d-flex flex-column"}>
                        <h>Podium Together is most popular app in the world</h>
                        <h>See details...</h>
                    </div>

            </div>
        );
}

