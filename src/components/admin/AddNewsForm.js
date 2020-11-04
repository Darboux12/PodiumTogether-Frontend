import React, {Component, useEffect, useState} from "react";

import ImageUploader from 'react-images-upload';


import "../../styles/admin/AddNewsForm.css"
import {Form, InputGroup} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import serverAddress, {newsImagesUploadEndpoint} from "../config/Constants";
import {minNewsTitleLength} from "../config/Limits";
import {maxNewsTitleLength} from "../config/Limits";
import {minNewsShortTextLength} from "../config/Limits";
import {maxNewsShortTextLength} from "../config/Limits";
import {minNewsLinkTextLength} from "../config/Limits";
import {maxNewsLinkTextLength} from "../config/Limits";
import {minNewsFullTextLength} from "../config/Limits";
import {maxNewsFullTextLength} from "../config/Limits";
import {maxImagesNumber} from "../config/Limits";

export default function AddNewsForm(props){

    const [title,setTitle] = useState("");
    const [shortText,setShortText] = useState("");
    const [linkText,setLinkText] = useState("");
    const [fullText,setFullText] = useState("");
    const [images,setImages] = useState([]);

    const [titleError,setTitleError] = useState("");
    const [shortTextError,setShortTextError] = useState("");
    const [linkTextError,setLinkTextError] = useState("");
    const [fullTextError,setFullTextError] = useState("");
    const [imagesError,setImagesError] = useState("");

    const inputValidation = () => {

        setTitleError("");
        setShortTextError("");
        setLinkTextError("");
        setFullTextError("");
        setImagesError("");

        if(title.length < minNewsTitleLength)
            setTitleError("Title must be longer than " + minNewsTitleLength + "!");

        if(title.length > maxNewsTitleLength)
            setTitleError("Title must be shorter than " + maxNewsTitleLength + "!");

        if(title === "")
            setTitleError("Title cannot be empty!");


        if(shortText.length < minNewsShortTextLength)
            setShortTextError("Short text must be longer than " + minNewsShortTextLength + "!");

        if(shortText.length > maxNewsShortTextLength)
            setShortTextError("Short text must be shorter than " + maxNewsShortTextLength + "!");

        if(shortText === "")
            setShortTextError("Short text cannot be empty!");


        if(linkText.length < minNewsLinkTextLength)
            setLinkTextError("Link text must be longer than " + minNewsLinkTextLength);

        if(linkText.length > maxNewsLinkTextLength)
            setLinkTextError("Link text must be shorter than " + maxNewsLinkTextLength + "!");

        if(linkText === "")
            setLinkTextError("Link text cannot be empty!");


        if(fullText.length < minNewsFullTextLength)
            setFullTextError("Full text must be longer than " + minNewsFullTextLength + "!");

        if(fullText.length > maxNewsFullTextLength)
            setFullTextError("Full text must be shorter than " + maxNewsFullTextLength + "!");

        if(fullText === "")
            setFullTextError("Full text cannot be empty!");

        if(images === [])
            setImagesError("You must choose at least one image!");

        if(images.length > maxImagesNumber)
            setImagesError("You can choose max " + maxImagesNumber + " images!");

    };

    const onFormSubmit = () => {

        inputValidation();

        if(
            titleError === "" &&
            shortTextError === "" &&
            linkTextError === "" &&
            fullTextError === "" &&
            imagesError === ""
        ){

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

            fetch(serverAddress + '/news/add', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(NewsData)

            })
                .then(response => {

                    if(response.ok){

                        fetch(serverAddress + newsImagesUploadEndpoint, { // Your POST endpoint
                            method: 'POST',
                            body: ImageData

                        })
                            .then(response => {

                                props.submitModal();


                                }

                            )

                            .catch(err => { console.log(err) });

                    }

                });

        }

    };

      return(

        <Form className={"createNewsForm w-70"}>
            
            <Form.Group controlId="formNewsTitle">
                <Form.Label className={"FormLabel mt-3"}>News Title</Form.Label>
                <h className={"ErrorHeader ml-3"}>{titleError}</h>
                <Form.Control
                    className={"FormInputField"}
                    type="text" placeholder="Please, write news title..."
                    onChange = {(e) => setTitle(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId="formNewsTitle">
                <Form.Label className={"FormLabel mt-1"}>News Short Text</Form.Label>
                <h className={"ErrorHeader ml-3"}>{shortTextError}</h>
                <Form.Control
                    className={"FormInputField"}
                    as={"textarea"} placeholder="Please, write news short text..."
                    onChange = {(e) => setShortText(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId="formNewsTitle">
                <Form.Label className={"FormLabel mt-1"}>News Link Text</Form.Label>
                <h className={"ErrorHeader ml-3"}>{linkTextError}</h>
                <Form.Control
                    className={"FormInputField"}
                    type="text" placeholder="Please, write news link text..."
                    onChange = {(e) => setLinkText(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId="formNewsTitle">
                <Form.Label className={"FormLabel mt-1"}>News Text</Form.Label>
                <h className={"ErrorHeader ml-3"}>{fullTextError}</h>
                <Form.Control
                    className={"FormInputField"}
                    as={"textarea"}
                    rows={"7"}
                    placeholder="Please, write news full text..."
                    onChange = {(e) => setFullText(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label className={"FormLabel mt-1"} >News Image</Form.Label>
                <h className={"ErrorHeader ml-3"}>{imagesError}</h>
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

