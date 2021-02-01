import React, {useState} from "react";
import ImageUploader from 'react-images-upload';
import "../../../styles/admin/AddNewsForm.css"
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {minNewsTitleLength} from "../../config/Limits";
import {maxNewsTitleLength} from "../../config/Limits";
import {minNewsShortTextLength} from "../../config/Limits";
import {maxNewsShortTextLength} from "../../config/Limits";
import {minNewsLinkTextLength} from "../../config/Limits";
import {maxNewsLinkTextLength} from "../../config/Limits";
import {minNewsFullTextLength} from "../../config/Limits";
import {maxNewsFullTextLength} from "../../config/Limits";
import {maxImagesNumber} from "../../config/Limits";
import {addNewsFetch} from "../../fetch/Fetch";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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

    const resetErrors = () => {

        setTitleError("");
        setShortTextError("");
        setLinkTextError("");
        setFullTextError("");
        setImagesError("");

    };

    const formValidation = () => {

        resetErrors();

        let isOk = true;

        if(title.length < minNewsTitleLength){
            setTitleError("Title must be longer than " + minNewsTitleLength + "!");
            isOk = false;
        }

        if(title.length > maxNewsTitleLength){
            setTitleError("Title must be shorter than " + maxNewsTitleLength + "!");
            isOk = false;
        }

        if(title === ""){
            setTitleError("Title cannot be empty!");
            isOk = false;
        }

        if(shortText.length < minNewsShortTextLength){
            setShortTextError("Short text must be longer than " + minNewsShortTextLength + "!");
            isOk = false;
        }

        if(shortText.length > maxNewsShortTextLength){
            setShortTextError("Short text must be shorter than " + maxNewsShortTextLength + "!");
            isOk = false;
        }

        if(shortText === ""){
            setShortTextError("Short text cannot be empty!");
            isOk = false;
        }

        if(linkText.length < minNewsLinkTextLength){
            setLinkTextError("Link text must be longer than " + minNewsLinkTextLength);
            isOk = false;
        }

        if(linkText.length > maxNewsLinkTextLength){
            setLinkTextError("Link text must be shorter than " + maxNewsLinkTextLength + "!");
            isOk = false;
        }

        if(linkText === ""){
            setLinkTextError("Link text cannot be empty!");
            isOk = false;
        }

        if(fullText.length < minNewsFullTextLength){
            setFullTextError("Full text must be longer than " + minNewsFullTextLength + "!");
            isOk = false;
        }

        if(fullText.length > maxNewsFullTextLength){
            setFullTextError("Full text must be shorter than " + maxNewsFullTextLength + "!");
            isOk = false;
        }

        if(fullText === ""){
            setFullTextError("Full text cannot be empty!");
            isOk = false;
        }

        if(images === []){
            setImagesError("You must choose at least one image!");
            isOk = false;
        }

        if(images.length > maxImagesNumber){
            setImagesError("You can choose max " + maxImagesNumber + " images!");
            isOk = false;
        }

        return isOk;
    };

    const onFormSubmit = () => {

        if(formValidation()){

            addNewsFetch(title,shortText,linkText,fullText,images)

                .then(res => {

                    if(res.ok)
                        props.submitModal();

                    else return res.json();

                })

                .then(res => console.log(res))

                .catch(error => console.log(error));
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

            <Row>

                <Col className={"col-md-6 col-12 mb-md-0 mb-3"}>
                    <Button
                        variant="outline-primary"
                        className={"col-12"}
                        onClick={onFormSubmit}
                    >
                        Create News
                    </Button>
                </Col>

                <Col className={"col-md-6 col-12 mb-md-0 mb-3"}>
                    <Button
                        variant="outline-info"
                        className={"col-12"}
                        href={"/admin/panel"}
                    >
                        Return to admin panel
                    </Button>
                </Col>

            </Row>

        </Form> );

}

