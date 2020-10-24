import "../../styles/edit-profile/EditProfilePage.css"
import React, {useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import serverAddress from "../config/Constants"
import {findUserByUsernameEndpoint} from "../config/Constants";
import {format} from "date-fns";




export default function EditProfilePage() {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("a");
    const [repeatPassword,setRepeatPassword] = useState("b");
    const [username,setUsername] = useState("");
    const [birth,setBirth] = useState(new Date());
    const [country,setCountry] = useState("");
    const [profileImages,setProfileImages] = useState([]);

    const [saved,setSaved] = useState(false);

    useEffect(() => {

        let usernameSession = localStorage.getItem('Username');

        const PostUrl = serverAddress + findUserByUsernameEndpoint + usernameSession;

        fetch(PostUrl)

            .then((res) => {

                    if (res.status === 409){
                        console.log("Server error 409");
                    }

                    else return res.json()
                })

            .then(res => {


                   setEmail(res.email);
                   setUsername(res.username);
                   setBirth(new Date(res.birthday));
                   setCountry(res.country);
                   setProfileImages(res.profileImages);





                })

            .catch((error) => {
                    console.log(error);
                });


    },[]);



    return(

        <Container>

            <Accordion  className={"AccordionContainer"}>

                <Card className={"AccordionCard"}>

                    <Accordion.Toggle as={Card.Header} eventKey="0" className={"AccordionToggle"}>

                        <Row className={"EditProfileRow"}>
                            <h className={"EditProfileCategoryTitle"}>Email</h>
                            <h className={"EditProfileCategoryText"}>{email}</h>
                            <h className={"EditProfileEditHeader"}>Edit</h>
                        </Row>

                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0">
                        <Card.Body>Hello! I'm the body</Card.Body>
                    </Accordion.Collapse>

                </Card>

                <Card className={"AccordionCard"}>

                    <Accordion.Toggle as={Card.Header} eventKey="1" className={"AccordionToggle"}>

                        <Row className={"EditProfileRow"}>
                            <h className={"EditProfileCategoryTitle"}>Username</h>
                            <h className={"EditProfileCategoryText"}>{username}</h>
                            <h className={"EditProfileEditHeader"}>Edit</h>
                        </Row>

                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="1">
                        <Card.Body>Hello! I'm the body</Card.Body>
                    </Accordion.Collapse>

                </Card>

                <Card className={"AccordionCard"}>

                    <Accordion.Toggle as={Card.Header} eventKey="2" className={"AccordionToggle"}>

                        <Row className={"EditProfileRow"}>
                            <h className={"EditProfileCategoryTitle"}>Birthday</h>
                            <h className={"EditProfileCategoryText"}>{format(birth, "dd-MM-yyyy")}</h>
                            <h className={"EditProfileEditHeader"}>Edit</h>
                        </Row>

                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="2">
                        <Card.Body>Hello! I'm the body</Card.Body>
                    </Accordion.Collapse>

                </Card>

                <Card className={"AccordionCard"}>

                    <Accordion.Toggle as={Card.Header} eventKey="3" className={"AccordionToggle"}>

                        <Row className={"EditProfileRow"}>
                            <h className={"EditProfileCategoryTitle"}>Country</h>
                            <h className={"EditProfileCategoryText"}>{country}</h>
                            <h className={"EditProfileEditHeader"}>Edit</h>
                        </Row>

                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="3">
                        <Card.Body>Hello! I'm the body</Card.Body>
                    </Accordion.Collapse>

                </Card>

                <Card className={"AccordionCard"}>

                    <Accordion.Toggle as={Card.Header} eventKey="4" className={"AccordionToggle"}>

                        <Row className={"EditProfileRow"}>
                            <h className={"EditProfileCategoryTitle"}>Profile Images</h>
                            <h className={"EditProfileEditHeader"}>Edit</h>
                        </Row>

                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="4">

                        <Card.Body>

                            {profileImages.map(item =>

                                    <img
                                        className=""
                                        src={`data:image/jpeg;base64,${item.content}`}
                                        alt="First slide"
                                    />

                            )}


                        </Card.Body>


                    </Accordion.Collapse>

                </Card>




            </Accordion>








        </Container>
    )



}