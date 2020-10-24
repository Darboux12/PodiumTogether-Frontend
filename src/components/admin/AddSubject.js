import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {serverAddress} from "../config/Constants"
import {addSubjectEndpoint} from "../config/Constants"
import {existSubjectByNameEndpoint} from "../config/Constants"
import {minSubjectLength} from "../config/Limits";
import {maxSubjectLength} from "../config/Limits";
import SubmitModal from "../common/SubmitModal";

export default function AddSubject() {

    const [subject,setSubject] = useState("");
    const [subjectError, setSubjectError] = useState("");
    const [submitModalVisible,setSubmitModalVisible] = useState(false);

    const onFormSubmit = () => {

        setSubjectError("");

        if(subject.length < minSubjectLength)
            setSubjectError("Subject must be longer than " + minSubjectLength + "!");

        if(subject.length > maxSubjectLength)
            setSubjectError("Subject must be shorter than " + maxSubjectLength + "!");

        if(subject === "")
            setSubjectError("Subject cannot be empty!");

        fetch(serverAddress + existSubjectByNameEndpoint + subject)

            .then((res) => {

                if (res.ok){
                    setSubjectError("Subject already exist!")
                }

            });

        if(subjectError === ""){

            const subjectData = {subject : subject};
            const requestOptions = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(subjectData)
            };

            fetch(serverAddress + addSubjectEndpoint,requestOptions)

                .then((res) => {

                    if (res.ok){
                        setSubmitModalVisible(true);
                    }

                    else return res.json()

                })

                .then(res => {

                    console.log(res);

                })



        }

    };

    return(

        <Container>

            <Form className={"createNewsForm col-6"}>

                <Form.Group controlId="formNewsTitle">
                    <Form.Label className={"FormLabel mt-3"}>Subject</Form.Label>
                    <h className={"ErrorHeader ml-3"}>{subjectError}</h>
                    <Form.Control
                        className={"FormInputField"}
                        type="text" placeholder="Please, write news subject..."
                        onChange = {(e) => setSubject(e.target.value)}/>
                </Form.Group>

                <div className={"d-flex flex-row"}>

                <Button
                    variant="outline-primary"
                    className={"d-md-inline d-none w-50 createNewsSubmitButton mt-3 mr-4"}
                    onClick={onFormSubmit}
                >
                    Add Subject
                </Button>

                <Button
                    variant="outline-info"
                    className={"d-md-inline d-none w-50 createNewsSubmitButton mt-3"}
                    href={"/admin/panel"}
                >
                    Return to admin panel
                </Button>

                </div>

            </Form>

            <SubmitModal
                isSubmitModalVisible={submitModalVisible}
                closeSubmitModal={() => setSubmitModalVisible(false)}
                text = "Subject"
            />





        </Container>
    )

}