import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarTimes, faCheckCircle} from "@fortawesome/free-regular-svg-icons";
import React, {useEffect, useState} from "react";
import Modal from "react-bootstrap/Modal";
import {addPlaceFetch, findAllRatingCategoriesFetch} from "../fetch/Fetch";
import ReviewTagForm from "../tag-place/ReviewTagForm";

import "../../styles/review/ReviewModal.css"
import ReviewAdd from "./ReviewAdd";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {faPenSquare} from "@fortawesome/free-solid-svg-icons";
import ReviewHeaderColumn from "./ReviewHeaderColumn";
import QuestionTooltip from "../tag-place/QuestionTooltip";
import ImageUploader from "react-images-upload";
import Container from "react-bootstrap/Container";
import {maxObjectReviewLength, minObjectReviewLength} from "../config/Limits";

export default function ReviewModal(props) {

    let {isModalVisible, closeModal: onHide} = props;

    const [review,setReview] = useState("");
    const [ratings,setRatings] = useState([]);
    const [images,setImages] = useState([]);

    const [ratingCategoriesItems,setRatingCategoriesItems] = useState([]);

    const [starRatingsError,setStarRatingsError] = useState("");
    const [reviewError,setReviewError] = useState("");

    useEffect(() => {

        findAllRatingCategoriesFetch()

            .then(res => res.json())

            .then(res => {
                setRatingCategoriesItems(res);
            })

            .catch(error => console.log(error));

    },[]);

    const createRating = (category,rating) => {

        let tmpArray = ratings;

        ratings.forEach(added => {

            if(added.category === category.category) {
                tmpArray = ratings.filter(item => item.category !== added.category);
            }

        });

        let starRating = {
            category : category.category,
            rating : rating
        };

        setRatings(tmpArray.concat(starRating));

    };

    const resetErrors = () => {
        setStarRatingsError("");
        setReviewError("");
    };

    const formValidation = () => {

        let isOk = true;

        if(ratings.length !== ratingCategoriesItems.length){
            setStarRatingsError("All star ratings must be filled!");
            isOk = false;
        }

        if(review.length < minObjectReviewLength){
            setReviewError("Review must be longer than " + minObjectReviewLength + " !");
            isOk = false;
        }

        if(review.length > maxObjectReviewLength){
            setReviewError("Review must be shorter than " + maxObjectReviewLength + " !");
            isOk = false;
        }


        return isOk;

    };

    const onFormSubmit = () => {

        resetErrors();

        if(formValidation()){

            alert("Form validation ok");

            /*



            let openingDays = createOpeningDays();

            let placeLocalization = createPlaceLocalization();

            let ratings = createRatings();


            addPlaceFetch(name,discipline,placeLocalization,
                openingDays,cost,usageTime,minAge,maxAge,ratings,review,images,documents)

                .then(res => {

                    if(res.ok)
                        props.submitModal();

                    else return res.json();

                })

                .then(res => console.log(res))

                .catch(error => console.log(error)); */

        }



    };

    return(

        <Modal show={isModalVisible} onHide={onHide}>

            <Modal.Header>
                <ReviewHeaderColumn/>
            </Modal.Header>

            <Modal.Body>

                <Form>

                    <Form.Group >

                        <Form.Label className={"FormLabel"}>Ratings</Form.Label>

                        <QuestionTooltip text={"Rate this place in all given categories"}/>

                        <h className={"ErrorHeader ml-4"}>{starRatingsError}</h>

                        {ratingCategoriesItems.map(category =>
                            <ReviewAdd
                                id={category.category}
                                title={category.category}
                                onChange = {(newRating) => createRating(category,newRating)}
                            />
                        )}

                    </Form.Group>

                    <Form.Group>

                        <Form.Label className={"FormLabel"}>Review</Form.Label>

                        <QuestionTooltip text={"Write a few words how you spend your time in this place"}/>

                        <h className={"ErrorHeader ml-4"}>{reviewError}</h>

                        <Form.Control
                            className={"FormInputField"}
                            as="textarea"
                            rows="6"
                            placeholder = {"Tell us about your experience..."}
                            onChange = {(e) => setReview(e.target.value)}
                        />

                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlInput1">

                        <Form.Label className={"FormLabel"} >Images</Form.Label>

                        <QuestionTooltip text={"Upload your images of this place"}/>

                        <ImageUploader
                            className={"imageEventUploader"}
                            withIcon={false}
                            buttonText='Choose place images'
                            onChange={(pic) => setImages(pic)}
                            imgExtension={['.jpg', '.gif', '.png', '.gif']}
                            withPreview = {true}
                            label=""
                        />

                    </Form.Group>





                </Form>

                <Button
                    variant="primary"
                    className={"d-md-inline d-none w-100 createEventSubmitButton"}
                    onClick={onFormSubmit}
                >
                    Create Event
                </Button>




            </Modal.Body>

        </Modal>

    );

}
