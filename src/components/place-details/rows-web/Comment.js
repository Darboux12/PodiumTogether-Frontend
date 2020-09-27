import React from "react";
import Container from "react-bootstrap/Container";

import "../../../styles/place-details/rows-web/Comment.css"
import Row from "react-bootstrap/Row";
import {faStar, faWallet} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarAlt, faThumbsDown, faThumbsUp} from "@fortawesome/free-regular-svg-icons";

import commentImage from "../../../images/person.jpg"
export default function Comment() {

    return (

        <Container className={"PlaceCommentContainer"}>

            <div className={"CommentThumbsContainer d-flex flex-row"}>

                <div className={"CommentThumbContainerUp d-flex flex-row"}>
                    <FontAwesomeIcon className={"CommentThumbIconUp"} icon={faThumbsUp}/>
                    <h className={"CommentThumbHeaderUp"}>123</h>
                </div>

                <div className={"CommentThumbContainerDown d-flex flex-row"}>
                    <FontAwesomeIcon className={"CommentThumbIconDown"} icon={faThumbsDown}/>
                    <h className={"CommentThumbHeaderDown"}>123</h>
                </div>

            </div>

            <Row className={"CommentGradeUserRow"}>

                <h className={"CommentGrade"}>9.0</h>

                <div className={"CommentPostedBy d-flex flex-column"}>

                    <h className={"CommentPostedByHeader"}>Posted by:</h>

                    <h className={"CommentPostedByUsername"}>Janek126p</h>

                </div>

            </Row>

            <Row className={"CommentDateRow"}>
                <FontAwesomeIcon className={"CommentDateIcon"} icon={faCalendarAlt}/>

                <h className={"CommentDate"}>12.03.2020 12:00</h>

            </Row>

            <Row className={"CommentReviewRow"}>

                <h className={"CommentReviewText"}>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet, aperiam aut beatae cumque,
                        dolor ea enim facere ipsum minima, natus neque nobis nostrum officia praesentium quis ut velit
                        voluptate.
                    </div>
                    <div>Ad amet aspernatur beatae commodi cupiditate dolore dolores earum eveniet expedita explicabo
                        fuga hic, inventore iure iusto maxime nisi non nostrum obcaecati officiis, perferendis
                        perspiciatis quia quo reiciendis rerum vero.
                    </div>
                    <div>Delectus libero maxime optio tenetur! Cum doloribus exercitationem fugit ipsum iste minus
                        numquam ratione repudiandae velit voluptas. Delectus dolorum facilis fugiat iste minus officia
                        rerum. Nihil sequi voluptate voluptatem voluptates.
                    </div></h>

            </Row>

            <Row className={"CommentImagesRow"}>

                <img className={"CommentImage"} src={commentImage} alt={"Comment Image"}/>
                <img className={"CommentImage"} src={commentImage} alt={"Comment Image"}/>
                <img className={"CommentImage"} src={commentImage} alt={"Comment Image"}/>
                <img className={"CommentImage"} src={commentImage} alt={"Comment Image"}/>





            </Row>

        </Container>

    )

}