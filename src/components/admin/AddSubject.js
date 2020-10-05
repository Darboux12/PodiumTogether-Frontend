import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";

export default function AddSubject() {

    const [subject,setSubject] = useState("");

    const onFormSubmit = () => {

        const PostUrl = 'http://localhost:8080/subject/add';

        const formData = new FormData();
        formData.append("subject",subject);

        const requestOptions = {
            method: 'POST',
            body: formData
        };

        fetch(PostUrl,requestOptions)

            .then((res) => {

                if (res.ok){
                    alert("Response ok");
                }


            })


    };

    return(

        <Container>

            <Form className={"createNewsForm col-6"}>

                <Form.Group controlId="formNewsTitle">
                    <Form.Label className={"FormLabel mt-3"}>Subject</Form.Label>
                    <Form.Control
                        className={"FormInputField"}
                        type="text" placeholder="Please, write news subject..."
                        onChange = {(e) => setSubject(e.target.value)}/>
                </Form.Group>

                <div className={"d-flex flex-row"}>



                <Button
                    variant="outline-primary"
                    type="submit"
                    className={"d-md-inline d-none w-50 createNewsSubmitButton mt-3 mr-4"}
                    onClick={onFormSubmit}
                >
                    Add Subject
                </Button>

                <Button
                    variant="outline-info"
                    type="submit"
                    className={"d-md-inline d-none w-50 createNewsSubmitButton mt-3"}
                    href={"/admin/panel"}
                >
                    Return to admin panel
                </Button>

                </div>

            </Form>





        </Container>





    )

}