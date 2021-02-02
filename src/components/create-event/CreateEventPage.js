import React, {useState} from "react";
import Container from "react-bootstrap/esm/Container";
import CreateEventForm from "./CreateEventForm";
import "../../styles/create-event/CreateEventPage.css"
import TagPlaceForm from "../tag-place/TagPlaceForm";
import SubmitModal from "../common/SubmitModal";
import SubmitFailModal from "../common/SubmitFailModal";

export default function CreateEventPage(){

    const [submitModalVisible,setSubmitModalVisible] = useState(false);
    const [submitFailModalVisible,setSubmitFailModalVisible] = useState(false);

        return(

            <Container className="createEventContainer d-flex flex-column align-items-center">

                <h className={"createEventHeader"}>
                    Fill out our form and create your perfect event!
                </h>

                <CreateEventForm
                    submitModal = {() => setSubmitModalVisible(true)}
                    submitFailModal = {() => setSubmitFailModalVisible(true)}
                />

                <SubmitModal
                    isSubmitModalVisible={submitModalVisible}
                    closeSubmitModal={() => setSubmitModalVisible(false)}
                    text = "Event Add Request"
                />

                <SubmitFailModal
                    isSubmitFailModalVisible={submitFailModalVisible}
                    closeSubmitFailModal={() => setSubmitFailModalVisible(false)}
                    text = "Event Add Request"
                />

            </Container>

        );
}

