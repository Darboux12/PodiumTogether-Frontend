import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-regular-svg-icons";
import React, {useEffect, useState} from "react";
import Modal from "react-bootstrap/Modal";
import {findAllRatingCategoriesFetch} from "../fetch/Fetch";
import ReviewTagForm from "../tag-place/ReviewTagForm";

import "../../styles/review/ReviewModal.css"
import ReviewAdd from "./ReviewAdd";

export default function ReviewModal(props) {

    let {isModalVisible, closeModal: onHide, text} = props;

    const [ratings,setRatings] = useState([]);
    const [ratingCategoriesItems,setRatingCategoriesItems] = useState([]);

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

    return(

        <Modal show={isModalVisible} onHide={onHide}>

            <Modal.Header>
                <h>Header</h>
            </Modal.Header>

            <Modal.Body>

                <Row className={"ReviewRow"}>

                    {ratingCategoriesItems.map(category =>
                        <ReviewAdd
                            id={category.category}
                            title={category.category}
                            onChange = {(newRating) => createRating(category,newRating)}
                        />
                    )}



                </Row>



            </Modal.Body>

        </Modal>

    );

}
