import React, {Component, useState} from "react";
import Container from "react-bootstrap/esm/Container";
import TagPlaceForm from "./TagPlaceForm";
import SubmitModal from "../common/SubmitModal";
import SubmitFailModal from "../common/SubmitFailModal";

export default function TagPlacePage(){

    const [submitModalVisible,setSubmitModalVisible] = useState(false);
    const [submitFailModalVisible,setSubmitFailModalVisible] = useState(false);

    return(

        <Container className="tagPlaceContainer d-flex flex-column align-items-center">

            <div className={"createEventHeader"}>
                <h>Fill out our form and let other know about incredible place!</h>
            </div>

            <TagPlaceForm
                submitModal = {() => setSubmitModalVisible(true)}
                submitFailModal = {() => setSubmitFailModalVisible(true)}
            />

            <SubmitModal
                isSubmitModalVisible={submitModalVisible}
                closeSubmitModal={() => setSubmitModalVisible(false)}
                text = "Place Add Request"
            />

            <SubmitFailModal
                isSubmitFailModalVisible={submitFailModalVisible}
                closeSubmitFailModal={() => setSubmitFailModalVisible(false)}
                text = "Place Add Request"
            />


        </Container>

    );

}

