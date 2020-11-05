import React, {useState} from "react";
import Container from "react-bootstrap/esm/Container";
import {Form} from "react-bootstrap/esm/index";
import Button from "react-bootstrap/esm/Button";
import {minSubjectLength} from "../../config/Limits";
import {maxSubjectLength} from "../../config/Limits";
import SubmitModal from "../../common/SubmitModal";
import {addSubjectFetch,existSubjectByNameFetch} from "../../fetch/Fetch";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

export default function AddSubject() {

    const [subject,setSubject] = useState("");
    const [subjectError, setSubjectError] = useState("");
    const [submitModalVisible,setSubmitModalVisible] = useState(false);

    const resetErrors = () => {
        setSubjectError("");
    };

    const formValidation = () => {

        resetErrors();

        let isOk = true;

        if(subject.length < minSubjectLength){
            setSubjectError("Subject must be longer than " + minSubjectLength + "!");
            isOk = false;
        }

        if(subject.length > maxSubjectLength){
            setSubjectError("Subject must be shorter than " + maxSubjectLength + "!");
            isOk = false;
        }

        if(subject === ""){
            setSubjectError("Subject cannot be empty!");
            isOk = false;
        }

        return isOk;
    };

    const onFormSubmit = () => {

        if(formValidation())

            existSubjectByNameFetch(subject)

                .then((res) =>{

                    if(res.ok)
                        setSubjectError("Subject already exist!");

                    else if(res.status === 404)

                        addSubjectFetch(subject)

                            .then((res) =>{

                                if(res.ok)
                                    setSubmitModalVisible(true);

                                else return res.json();

                            })

                            .then(res => console.log(res))

                            .catch(error => console.log(error));

                    else return res.json();

                })

                .then(res => console.log(res))

                .catch(error => console.log(error));

    };

    return(

        <Container>

            <Form className={"createNewsForm col-md-8 col-12"}>

                <Form.Group controlId="formNewsTitle">
                    <Form.Label className={"FormLabel mt-3"}>Subject</Form.Label>
                    <h className={"ErrorHeader ml-3"}>{subjectError}</h>
                    <Form.Control
                        className={"FormInputField"}
                        type="text" placeholder="Please, write news subject..."
                        onChange = {(e) => setSubject(e.target.value)}/>
                </Form.Group>

                <Row>

                    <Col className={"col-md-6 col-12 mb-md-0 mb-3"}>
                        <Button
                            variant="outline-primary"
                            className={"col-12"}
                            onClick={onFormSubmit}
                        > Add Subject
                        </Button>
                    </Col>

                    <Col className={"col-md-6 col-12"}>
                        <Button
                            variant="outline-info"
                            className={"col-12"}
                            href={"/admin/panel"}
                        >
                            Return to admin panel
                        </Button>
                    </Col>

                </Row>

            </Form>

            <SubmitModal
                isSubmitModalVisible={submitModalVisible}
                closeSubmitModal={() => setSubmitModalVisible(false)}
                text = "Subject"
            />

        </Container>
    )

}