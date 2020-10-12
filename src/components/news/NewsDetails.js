import React, {useEffect, useState} from "react";
import "../../styles/news-page/NewsDetails.css"
import Container from "react-bootstrap/Container";
import NewsDetailsCarousel from "./NewsDetailsCarousel";

export default function NewsDetails(props) {

    const id = props.match.params.id;

    const [isLoaded,setIsLoaded] = useState(false);
    const [news,setNews] = useState();

    useEffect(() => {

        fetch('http://localhost:8080/news/find/' + id)
            .then(res => res.json())
            .then(res => {

                setNews(res);
                setIsLoaded(true);

            })

    },[]);

    if(isLoaded)

    return(

        <div className={"d-flex align-items-center justify-content-center"}>

            <div className={"NewsDetailsContainer"}>

               <div className={"ImageTitleContainer d-flex flex-row"}>

                   <h>news.title</h>

                   <NewsDetailsCarousel images={news.podiumFiles}/>





               </div>

            </div>

        </div>
    );

    else
        return <div/>




}