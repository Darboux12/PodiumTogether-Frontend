import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index";
import {faChild, faMapMarkedAlt, faMoneyBill, faUsers, faVenusMars} from "@fortawesome/free-solid-svg-icons/index";
import Row from "react-bootstrap/esm/Row";
import React, {useEffect, useState} from "react";
import {faCalendarAlt} from "@fortawesome/free-regular-svg-icons/index";
import Col from "react-bootstrap/esm/Col";

import "../../../styles/place-details/rows-web/PlaceDetailsStarRatingRow.css"
import {faStar} from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";


export default function PlaceDetailsStarRatingRow(props) {

    let {reviews} = props;

    const [rowRatings,setRowRatings] = useState([]);

    useEffect(() => {

        if(reviews.length > 0){
            let rowRat = createCountedRowRatings();
            setRowRatings(rowRat);
        }

    },[]);

    const findRatingCategories = (review) => {

       let categories = [];

        review.starRatings.map(item => {
            categories = categories.concat(item.category);
        });

        return categories;

    };

    const createRowRatings = () => {

        let rowRatings = [];

        let categories = findRatingCategories(reviews[0]);

        categories.map(category => {

            let rowRating = {

                category : category,

                ratings : {
                    one : 0,
                    two : 0,
                    three : 0,
                    four : 0,
                    five : 0
                }
            };

            rowRatings = rowRatings.concat(rowRating);
        });

        return rowRatings;

    };

    const createCountedRowRatings = () => {

        let rowRatings = createRowRatings();

        reviews.map(review => {

            review.starRatings.map(rating => {

                rowRatings.map(rowRating => {

                    if(rating.category === rowRating.category){

                        if(rating.rating === 1)
                            rowRating.ratings.one += 1;

                        if(rating.rating === 2)
                            rowRating.ratings.two += 1;

                        if(rating.rating === 3)
                            rowRating.ratings.three += 1;

                        if(rating.rating === 4)
                            rowRating.ratings.four += 1;

                        if(rating.rating === 5)
                            rowRating.ratings.five += 1;

                    }

                });

            });

        });

        return rowRatings;
    };

    const makeFiveStarRow = (number) => {

        return (

        <Row className={"StarRow"}>
            <div className={"OnlyStarsRow"}>
            {[...Array(5)].map(() =>
                    <FontAwesomeIcon className={"PlaceDetailsStarRatingStar"} icon={faStar}/>)
            }
            </div>

            <h className={"RatingRowNumberHeader"}>Five stars ratings ({number})</h>

        </Row>
        )
    };

    const makeFourStarRow = (number) => {

        return (

            <Row className={"StarRow"}>

                <div className={"OnlyStarsRow"}>
                {[...Array(4)].map(() =>
                    <FontAwesomeIcon className={"PlaceDetailsStarRatingStar"} icon={faStar}/>)
                }
                </div>

                <h className={"RatingRowNumberHeader"}>Four stars ratings ({number})</h>

            </Row>
        )

    };

    const makeThreeStarRow = (number) => {

        return (

            <Row className={"StarRow"}>
                <div className={"OnlyStarsRow"}>
                {[...Array(3)].map(() =>
                    <FontAwesomeIcon className={"PlaceDetailsStarRatingStar"} icon={faStar}/>)}
                </div>
                <h className={"RatingRowNumberHeader"}>Three stars ratings ({number})</h>
            </Row>
        )

    };

    const makeTwoStarRow = (number) => {

        return (

            <Row className={"StarRow"}>
                <div className={"OnlyStarsRow"}>
                {[...Array(2)].map(() =>
                    <FontAwesomeIcon className={"PlaceDetailsStarRatingStar"} icon={faStar}/>)}
                </div>
                <h className={"RatingRowNumberHeader"}>Two stars ratings ({number})</h>
            </Row>
        )

    };

    const makeOneStarRow = (number) => {

        return (

            <Row className={"StarRow"}>
                <div className={"OnlyStarsRow"}>
                {[...Array(1)].map(() =>
                    <FontAwesomeIcon className={"PlaceDetailsStarRatingStar"} icon={faStar}/>)}
                </div>
                <h className={"RatingRowNumberHeader"}>One star ratings ({number})</h>
            </Row>
        )

    };

    if(reviews.length > 0)

    return(

        <Row className={"IconRowsContainer"}>

            <Col>

                {rowRatings.map(rowRating =>

                    <div>

                        <Row>
                            <h className={"PlaceDetailsStarRatingStarType"}>{rowRating.category}</h>
                        </Row>

                        <div className={"AllStarRow"}>
                        {makeFiveStarRow(rowRating.ratings.five)}
                        {makeFourStarRow(rowRating.ratings.four)}
                        {makeThreeStarRow(rowRating.ratings.three)}
                        {makeTwoStarRow(rowRating.ratings.two)}
                        {makeOneStarRow(rowRating.ratings.one)}
                        </div>

                    </div>

                  )}

            </Col>

        </Row>

    );

    else return (<Row className={"IconRowsContainer"}></Row>)

}
