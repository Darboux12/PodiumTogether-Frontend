import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index";
import Row from "react-bootstrap/esm/Row";
import React, {useEffect, useState} from "react";
import Col from "react-bootstrap/esm/Col";
import "../../../styles/place-details/rows-web/PlaceDetailsCommentRow.css"
import Comment from "./Comment";
import Button from "react-bootstrap/Button";
import {findPlaceByIdFetch} from "../../fetch/Fetch";
import Place from "../../display-places/page/Place";

export default function PlaceDetailsCommentRow(props) {

    let {reviews} = props;

    return(

        <Row className={"CommentRowContainer"}>

            <Col>

                <Row className={""}>

                    <Col className={""}>

                        {reviews.map(item =>

                            <Comment
                                ratings = {item.starRatings}
                                opinion = {item.opinion}
                                author = {item.author}
                                images = {item.images}
                                likes = {item.likes}
                                dislikes = {item.dislikes}
                                id = {item.id}
                                date = {item.date}
                            />
                        )}

                        <Button
                            variant={"outline-primary"}
                            className={"SeeMooreReviewsButton"}
                        >See more reviews
                        </Button>

                    </Col>

                </Row>



            </Col>

        </Row>

    )

}
