import React, {useState} from "react";
import Container from "react-bootstrap/Container";

import "../../../styles/place-details/rows-web/Comment.css"
import Row from "react-bootstrap/Row";
import {faStar, faWallet} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarAlt, faThumbsDown, faThumbsUp} from "@fortawesome/free-regular-svg-icons";

import commentImage from "../../../images/person.jpg"
import {findAllPlaceFetch, incrementReviewDislikesFetch, incrementReviewLikesFetch} from "../../fetch/Fetch";
import {format} from "date-fns";

export default function Comment(props) {

    let {ratings,opinion,author,images,likes,dislikes,id,date} = props;

    const [likesItem,setLikesItem] = useState(likes);
    const [dislikesItem,setDislikesItem] = useState(dislikes);

    const commentDate = new Date(date);


    const calculateGrade = () => {

        let sum = 0;

        ratings.map(item => {sum += item.rating;});

        return sum / ratings.length;

    };

    const incrementLikes = () => {

        incrementReviewLikesFetch(id)

            .then(res => {

                if(res.ok){
                    setLikesItem(likesItem + 1);
                }

            })

    };

    const incrementDislikes = () => {

        incrementReviewDislikesFetch(id)

            .then(res => {

                if(res.ok){
                    setDislikesItem(dislikesItem + 1);
                }

            })

    };

    return (

        <Container className={"PlaceCommentContainer"}>

            <div className={"CommentThumbsContainer d-flex flex-row"}>

                <div className={"CommentThumbContainerUp d-flex flex-row"}>
                    <FontAwesomeIcon className={"CommentThumbIconUp"} icon={faThumbsUp} onClick={incrementLikes}/>
                    <h className={"CommentThumbHeaderUp"}>{likesItem}</h>
                </div>

                <div className={"CommentThumbContainerDown d-flex flex-row"}>
                    <FontAwesomeIcon className={"CommentThumbIconDown"} icon={faThumbsDown} onClick={incrementDislikes}/>
                    <h className={"CommentThumbHeaderDown"}>{dislikesItem}</h>
                </div>

            </div>

            <div className={"CommentStarRatingsContainer"}>


                {ratings.map(rating =>

                        <div className={"CommentStarsRow d-flex flex-row"}>

                            <h className={"StarRatingCommentHeader"}>{rating.category}</h>

                            {[...Array(rating.rating)].map(() => <FontAwesomeIcon className={"PlaceDetailsStarRatingStar"} icon={faStar}/>)}

                        </div>

                    )}

            </div>

            <Row className={"CommentGradeUserRow"}>

                <h className={"CommentGrade"}>{calculateGrade()}</h>

                <div className={"CommentPostedBy d-flex flex-column"}>

                    <h className={"CommentPostedByHeader"}>Posted by:</h>

                    <h className={"CommentPostedByUsername"}>{author}</h>

                </div>

            </Row>

            <Row className={"CommentDateRow"}>
                <FontAwesomeIcon className={"CommentDateIcon"} icon={faCalendarAlt}/>

                <h className={"CommentDate"}>{format(commentDate, "dd-MM-yyyy hh:mm")}</h>

            </Row>

            <Row className={"CommentReviewRow"}>

                <h className={"CommentReviewText"}>
                    {opinion}
                </h>

            </Row>

            <Row className={"CommentImagesRow"}>


                {images.map(image =>

                    <img className={"CommentImage"} src={`data:image/jpeg;base64,${image.content}`} alt={"Comment Image"}/>



                )}






            </Row>

        </Container>

    )

}
