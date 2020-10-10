import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import SubmitModal from "../common/SubmitModal";


export default function AddDiscipline() {

    const [submitModalVisible,setSubmitModalVisible] = useState(false);

    const [discipline,setDiscipline] = useState("");
    const [disciplineError,setDisciplineError] = useState("");

    const onFormSubmit = () => {

        if(discipline === ""){
            setDisciplineError("Discipline cannot be empty!")
        }

        const PostUrl = 'http://localhost:8080/discipline/add';

        const formData = new FormData();
        formData.append("discipline",discipline);

        const requestOptions = {
            method: 'POST',
            body: formData
        };

        fetch('http://localhost:8080/discipline/exist/' + discipline)
            .then((res) =>{

                if(res.ok){
                    setDisciplineError("Discipline already exist!");
                }


            }).catch(
            error => console.log(error) // Handle the error response object
        );

        if(disciplineError === ""){

            fetch(PostUrl,requestOptions)

                .then((res) => {

                    if (res.ok){
                        setSubmitModalVisible(true);

                    }


                });





        }

    };

    return(

        <Container>

            <Form className={"createNewsForm col-6"}>

                <Form.Group controlId="formNewsTitle" className={"d-flex flex-column"}>
                    <Form.Label className={"FormLabel mt-3"}>Discipline</Form.Label>
                    <h className={"ErrorHeader"}>{disciplineError}</h>
                    <Form.Control
                        className={"FormInputField"}
                        type="text" placeholder="Please, write news discipline..."
                        onChange = {(e) => setDiscipline(e.target.value)}/>
                </Form.Group>


                <div className={"d-flex flex-row"}>

                    <Button
                        variant="outline-primary"

                        className={"d-md-inline d-none w-50 createNewsSubmitButton mt-3 mr-4"}
                        onClick={onFormSubmit}
                    >
                        Add Discipline
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
            />

        </Container>

    )

}