import React, {Component, useEffect, useState} from "react";

import "../../styles/news-page/NewsPage.css"
import News from "./News";
import Container from "react-bootstrap/Container";
import NewsMobile from "./NewsMobile";
import {Form} from "react-bootstrap";

import serverAddress from "../config/Constants"
import {findAllNewsFetch} from "../fetch/Fetch";

export default function NewsPage(){

    const [isLoaded,setIsLoaded] = useState(false);
    const [newsItems,setNewsItems] = useState([]);

    useEffect(() => {

        findAllNewsFetch()

            .then(res => res.json())

            .then(res => {

                setIsLoaded(true);
                setNewsItems(res);

            })

    },[]);

    if(isLoaded)

        return(

            <Container className={"NewsContainerBitch"}>



                    {newsItems.map(item =>
                        <News
                            title = {item.title}
                            shortText = {item.shortText}
                            images = {item.images}
                            date = {item.date}
                            text = {item.text}
                            linkText = {item.linkText}
                            id = {item.id}

                        />
                    )}







            </Container>

        );

    else return <div className={"EmptyNewsPage"}/>

}

