import React, {Component, useEffect, useState} from "react";

import "../../styles/news-page/NewsPage.css"
import News from "./News";
import Container from "react-bootstrap/Container";
import NewsMobile from "./NewsMobile";
import {Form} from "react-bootstrap";

import serverAddress from "../config/Constants"

export default function NewsPage(){

    const [isLoaded,setIsLoaded] = useState(false);
    const [newsItems,setNewsItems] = useState([]);

    useEffect(() => {

        fetch(serverAddress + '/news/find/all')
            .then(res => res.json())
            .then(res => {

                setIsLoaded(true);
                setNewsItems(res);

            })

    },[]);

        return(

            <Container>

                <div className={""}>

                    {newsItems.map(item =>
                        <News
                            title = {item.news.title}
                            shortText = {item.news.shortText}
                            images = {item.podiumFiles}
                            date = {item.news.date}
                            text = {item.news.text}
                            linkText = {item.news.linkText}
                            id = {item.news.newsId}

                        />
                    )}



                </div>



            </Container>

        );

}

