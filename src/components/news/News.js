import React, {Component} from "react";

import picture from "../../images/person.jpg"

import "../../styles/news-page/News.css"

import { format } from "date-fns";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function News(props){

    const date =  new Date(props.date);

        return(

            <Container className={"newsContainer col-md-10 col-12 align-items-center justify-content"}>

                <Row className={"NewsMainRow pb-md-0 pb-5"}>

                    <Col className={"NewsImageColumn col-md-4 col-12"}>
                        <img className={"newsImage"} src={`data:image/jpeg;base64,${props.images[0].content}`}  alt={"newsImage"}/>
                    </Col>

                    <Col className={"NewsTextColumn mt-md-0 mt-4"}>

                            <h className={"newsHeader"}>{props.title}</h>

                            <p  className={"newsParagraph mt-3 mb-3"}>{props.shortText}</p>

                            <a className={"newsLink"} href={"/news/details/" + props.id}>{props.linkText}</a>

                    </Col>

                    <h className={"newsDate"}>{format(date, "dd-MM-yyyy hh:mm")}</h>

                </Row>

            </Container>

        )
}

