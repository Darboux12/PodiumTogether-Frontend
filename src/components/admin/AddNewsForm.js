import React, {Component, useEffect, useState} from "react";

import ImageUploader from 'react-images-upload';


import "../../styles/admin/AddNewsForm.css"
import {Form, InputGroup} from "react-bootstrap";
import Button from "react-bootstrap/Button";


export default function AddNewsForm(){

    const [title,setTitle] = useState("");
    const [shortText,setShortText] = useState("");
    const [linkText,setLinkText] = useState("");
    const [fullText,setFullText] = useState("");
    const [image,setImage] = useState(null);

    const onFormSubmit = () => {

        const formData = new FormData();

        formData.append('title',title);
        formData.append('shortText',shortText);
        formData.append('linkText',linkText);
        formData.append('fullText',fullText);
        formData.append('image',image);

        fetch('http://localhost:8080/news/add', { // Your POST endpoint
            method: 'POST',
            body: formData

        })
            .then(response => {

                if(response.ok)
                    alert("News was successfully added!");
            }

        );

    };

      return(

        <Form className={"createNewsForm w-70"}>
            
            <Form.Group controlId="formNewsTitle">
                <Form.Label className={"FormLabel mt-3"}>News Title</Form.Label>
                <Form.Control
                    className={"FormInputField"}
                    type="text" placeholder="Please, write news title..."
                    onChange = {(e) => setTitle(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId="formNewsTitle">
                <Form.Label className={"FormLabel mt-1"}>News Short Text</Form.Label>
                <Form.Control
                    className={"FormInputField"}
                    as={"textarea"} placeholder="Please, write news short text..."
                    onChange = {(e) => setShortText(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId="formNewsTitle">
                <Form.Label className={"FormLabel mt-1"}>News Link Text</Form.Label>
                <Form.Control
                    className={"FormInputField"}
                    type="text" placeholder="Please, write news link text..."
                    onChange = {(e) => setLinkText(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId="formNewsTitle">
                <Form.Label className={"FormLabel mt-1"}>News Text</Form.Label>
                <Form.Control
                    className={"FormInputField"}
                    as={"textarea"}
                    rows={"7"}
                    placeholder="Please, write news full text..."
                    onChange = {(e) => setFullText(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label className={"FormLabel mt-1"} >News Image</Form.Label>
                <ImageUploader
                    withIcon={false}
                    buttonText='Choose images'
                    onChange={(pic) => setImage(pic[0])}
                    imgExtension={['.jpg', '.gif', '.png', '.gif']}
                    withPreview = {true}
                    label=""
                    singleImage = {true}

                />
            </Form.Group>

            <Button
                variant="primary"
                type="submit"
                className={"d-md-inline d-none w-50 createNewsSubmitButton mt-3"}
                onClick={onFormSubmit}
            >
                Create News
            </Button>









        </Form>

    );


}

