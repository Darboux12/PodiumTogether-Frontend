import React, {useState} from "react";
import Container from "react-bootstrap/esm/Container";
import {Form} from "react-bootstrap/esm/index";
import Button from "react-bootstrap/esm/Button";
import SubmitModal from "../../common/SubmitModal";
import {maxDisciplineLength, minDisciplineLength} from "../../config/Limits";
import {addDisciplineFetch, existDisciplineByNameFetch} from "../../fetch/Fetch";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

export default function AddDiscipline() {

    const [submitModalVisible,setSubmitModalVisible] = useState(false);
    const [discipline,setDiscipline] = useState("");
    const [disciplineError,setDisciplineError] = useState("");

    const resetErrors = () => {
        setDisciplineError("");
    };

    const formValidation = () => {

        resetErrors();

        let isOk = true;

        if(discipline.length > maxDisciplineLength){
            setDisciplineError("Discipline cannot be longer than" + maxDisciplineLength +  "!");
            isOk = false;
        }

        if(discipline.length < minDisciplineLength){
            setDisciplineError("Discipline cannot be shorter than" + minDisciplineLength +  "!");
            isOk = false;
        }

        if(discipline === ""){
            setDisciplineError("Discipline cannot be empty!");
            isOk = false;
        }

        return isOk;

    };

    const onFormSubmit = () => {

        if(formValidation())

            existDisciplineByNameFetch(discipline)

                .then((res) =>{

                    if(res.ok){

                        res.text().then(res => {

                            if (res === "true") {
                                setDisciplineError("Discipline already exist!");
                            }

                            else {

                                addDisciplineFetch(discipline)

                                    .then((res) =>{

                                        if(res.ok)
                                            setSubmitModalVisible(true);

                                        else return res.json();

                                    })

                                    .then(res => console.log(res))

                                    .catch(error => console.log(error));
                            }
                        });
                    }

                    else return res.json();

                })

                .then(res => console.log(res))

                .catch(error => console.log(error))

    };

    return(

        <Container>

            <Form className={"col-md-8 col-12"}>

                <Form.Group>

                    <Form.Label className={"FormLabel mt-3"}>Discipline</Form.Label>

                    <h className={"ErrorHeader ml-4"}>{disciplineError}</h>

                    <Form.Control
                        className={"FormInputField"}
                        type="text" placeholder="Please, write news discipline..."
                        onChange = {(e) => setDiscipline(e.target.value)}
                    />

                </Form.Group>

                <Row>

                    <Col className={"col-md-6 col-12 mb-md-0 mb-3"}>

                        <Button
                            variant="outline-primary"
                            className={"col-12"}
                            onClick={onFormSubmit}
                        > Add Discipline
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
                text = {"Adding discipline"}
                isSubmitModalVisible={submitModalVisible}
                closeSubmitModal={() => setSubmitModalVisible(false)}
            />

        </Container>

    )

}
