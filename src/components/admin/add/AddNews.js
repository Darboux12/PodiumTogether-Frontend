import React, {useState} from "react";
import AddNewsForm from "./AddNewsForm";
import Container from "react-bootstrap/esm/Container";
import SubmitModal from "../../common/SubmitModal";

export default function AddNews() {

    const [submitModalVisible,setSubmitModalVisible] = useState(false);

    return (

        <Container>

            <AddNewsForm submitModal = {() => setSubmitModalVisible(true)} />

            <SubmitModal
                isSubmitModalVisible={submitModalVisible}
                closeSubmitModal={() => setSubmitModalVisible(false)}
                text = "News"
            />

        </Container>

    )

}