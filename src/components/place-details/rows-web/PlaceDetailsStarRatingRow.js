import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index";
import {faChild, faMapMarkedAlt, faMoneyBill, faUsers, faVenusMars} from "@fortawesome/free-solid-svg-icons/index";
import Row from "react-bootstrap/esm/Row";
import React from "react";
import {faCalendarAlt} from "@fortawesome/free-regular-svg-icons/index";
import Col from "react-bootstrap/esm/Col";

import "../../../styles/place-details/rows-web/PlaceDetailsStarRatingRow.css"
import {faStar} from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";


export default function PlaceDetailsStarRatingRow(props) {

    let {reviews} = props;


    const createReviews = () => {

        let rev = [];

        if(reviews.length > 0){

            reviews[0].starRatings.map(item => {

                let category = item.category;
                let rat = item.rating;
                let toAdd = {category : category, sum : rat} ;
                rev = rev.concat(toAdd);

            });

            console.log(rev);





        }



    };

    return(

        <Row className={"IconRowsContainer"}>

            <Button onClick={createReviews}>CLICK ME</Button>

            <Col>

                <Row className={"PlaceDetailsStarRatingRow"}>

                    <Col className={"d-flex flex-row align-items-center justify-content-between"}>

                        <h className={"PlaceDetailsStarRatingStarType"}>Service</h>

                        <div className={"PlaceDetailsStarRatingStars"}>

                            <FontAwesomeIcon className={"PlaceDetailsStarRatingStar"} icon={faStar}/>
                            <FontAwesomeIcon className={"PlaceDetailsStarRatingStar"} icon={faStar}/>
                            <FontAwesomeIcon className={"PlaceDetailsStarRatingStar"} icon={faStar}/>
                            <FontAwesomeIcon className={"PlaceDetailsStarRatingStar"} icon={faStar}/>
                            <FontAwesomeIcon className={"PlaceDetailsStarRatingStar"} icon={faStar}/>

                        </div>

                        <h className={"PlaceDetailsStarRatingNumber"}>Awesome (1300)</h>

                    </Col>

                </Row>

                <Row className={"PlaceDetailsStarRatingRow"}>

                    <Col className={"d-flex flex-row align-items-center justify-content-between"}>

                        <h className={"PlaceDetailsStarRatingStarType"}>Service</h>

                        <div className={"PlaceDetailsStarRatingStars"}>

                            <FontAwesomeIcon className={"PlaceDetailsStarRatingStar"} icon={faStar}/>
                            <FontAwesomeIcon className={"PlaceDetailsStarRatingStar"} icon={faStar}/>
                            <FontAwesomeIcon className={"PlaceDetailsStarRatingStar"} icon={faStar}/>
                            <FontAwesomeIcon className={"PlaceDetailsStarRatingStar"} icon={faStar}/>
                            <FontAwesomeIcon className={"PlaceDetailsStarRatingStar"} icon={faStar}/>

                        </div>

                        <h className={"PlaceDetailsStarRatingNumber"}>Awesome (1300)</h>

                    </Col>

                </Row>

                <Row className={"PlaceDetailsStarRatingRow"}>

                    <Col className={"d-flex flex-row align-items-center justify-content-between"}>

                        <h className={"PlaceDetailsStarRatingStarType"}>Service</h>

                        <div className={"PlaceDetailsStarRatingStars"}>

                            <FontAwesomeIcon className={"PlaceDetailsStarRatingStar"} icon={faStar}/>
                            <FontAwesomeIcon className={"PlaceDetailsStarRatingStar"} icon={faStar}/>
                            <FontAwesomeIcon className={"PlaceDetailsStarRatingStar"} icon={faStar}/>
                            <FontAwesomeIcon className={"PlaceDetailsStarRatingStar"} icon={faStar}/>
                            <FontAwesomeIcon className={"PlaceDetailsStarRatingStar"} icon={faStar}/>

                        </div>

                        <h className={"PlaceDetailsStarRatingNumber"}>Awesome (1300)</h>

                    </Col>

                </Row>

                <Row className={"PlaceDetailsStarRatingRow"}>

                    <Col className={"d-flex flex-row align-items-center justify-content-between"}>

                        <h className={"PlaceDetailsStarRatingStarType"}>Service</h>

                        <div className={"PlaceDetailsStarRatingStars"}>

                            <FontAwesomeIcon className={"PlaceDetailsStarRatingStar"} icon={faStar}/>
                            <FontAwesomeIcon className={"PlaceDetailsStarRatingStar"} icon={faStar}/>
                            <FontAwesomeIcon className={"PlaceDetailsStarRatingStar"} icon={faStar}/>
                            <FontAwesomeIcon className={"PlaceDetailsStarRatingStar"} icon={faStar}/>
                            <FontAwesomeIcon className={"PlaceDetailsStarRatingStar"} icon={faStar}/>

                        </div>

                        <h className={"PlaceDetailsStarRatingNumber"}>Awesome (1300)</h>

                    </Col>

                </Row>

                <Row className={"PlaceDetailsStarRatingRow"}>

                    <Col className={"d-flex flex-row align-items-center justify-content-between"}>

                        <h className={"PlaceDetailsStarRatingStarType"}>Service</h>

                        <div className={"PlaceDetailsStarRatingStars"}>

                            <FontAwesomeIcon className={"PlaceDetailsStarRatingStar"} icon={faStar}/>
                            <FontAwesomeIcon className={"PlaceDetailsStarRatingStar"} icon={faStar}/>
                            <FontAwesomeIcon className={"PlaceDetailsStarRatingStar"} icon={faStar}/>
                            <FontAwesomeIcon className={"PlaceDetailsStarRatingStar"} icon={faStar}/>
                            <FontAwesomeIcon className={"PlaceDetailsStarRatingStar"} icon={faStar}/>

                        </div>

                        <h className={"PlaceDetailsStarRatingNumber"}>Awesome (1300)</h>

                    </Col>

                </Row>








            </Col>

        </Row>

    )

}
