import React, {Component, useEffect, useState} from "react";

import ImageUploader from 'react-images-upload';


import "../../styles/admin/AddNewsForm.css"
import {Form, InputGroup} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import serverAddress from "../config/Constants";


export default function AddNewsForm(){

    const [title,setTitle] = useState("");
    const [shortText,setShortText] = useState("");
    const [linkText,setLinkText] = useState("");
    const [fullText,setFullText] = useState("");
    const [images,setImages] = useState([]);

    const onFormSubmit = () => {

       const  ImageData  = new FormData();

        const NewsData = {
            title : title,
            shortText : shortText,
            linkText : linkText,
            text : fullText
        };

        for(const file of images)
            ImageData.append("images",file);

        ImageData.append("title",title);

        fetch(serverAddress + '/news/add', { // Your POST endpoint
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(NewsData)

        })

            .then(response => {

                if(response.ok){

                    fetch(serverAddress + '/image/upload/news', { // Your POST endpoint
                        method: 'POST',
                        body: ImageData

                    })
                        .then(response => {

                            console.log(response.error);

                                if(response.ok)
                                    alert("News was successfully added!");
                            }

                        )

                .catch(err => { console.log(err) });

                }

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
                    onChange={(pic) => setImages(pic)}
                    imgExtension={['.jpg', '.gif', '.png', '.gif']}
                    withPreview = {true}
                    label=""
                />
            </Form.Group>

            <Button
                variant="primary"
                className={"d-md-inline d-none w-50 createNewsSubmitButton mt-3"}
                onClick={onFormSubmit}
            >
                Create News
            </Button>

        </Form>

    );


}

