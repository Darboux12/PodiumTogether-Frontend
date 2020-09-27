import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index";
import Row from "react-bootstrap/esm/Row";
import React from "react";
import Col from "react-bootstrap/esm/Col";
import "../../../styles/place-details/rows-web/PlaceDetailsCommentRow.css"
import Comment from "./Comment";
import Button from "react-bootstrap/Button";

export default function PlaceDetailsCommentRow() {

    return(

        <Row className={"CommentRowContainer"}>

            <Col>

                <Row className={""}>

                    <Col className={""}>

                        <Comment/>
                        <Comment/>
                        <Comment/>

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