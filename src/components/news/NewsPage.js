import React, {Component, useEffect, useState} from "react";

import "../../styles/news-page/NewsPage.css"
import News from "./News";
import Container from "react-bootstrap/Container";
import NewsMobile from "./NewsMobile";
import {Form} from "react-bootstrap";

export default function NewsPage(){

    const [isLoaded,setIsLoaded] = useState(false);
    const [newsItems,setNewsItems] = useState([]);

    useEffect(() => {

        fetch('http://localhost:8080/news/get/all')
            .then(res => res.json())
            .then(res => {

                setIsLoaded(true);
                setNewsItems(res);

            })

    });


        return(

            <Container>

                <div className={"d-md-flex flex-column d-none"}>

                    {newsItems.map(item =>
                        <News
                            title = {item.title}
                            shortText = {item.shortText}
                            image = {item.image}
                            date = {item.date}
                            text = {item.text}
                            linkText = {item.linkText}

                        />
                    )}



                </div>

                <div className={"d-md-none d-flex flex-column"}>

                    <NewsMobile/>
                    <NewsMobile/>
                    <NewsMobile/>
                    <NewsMobile/>

                </div>

            </Container>

        );

}

