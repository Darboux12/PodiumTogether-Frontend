import "../../styles/edit-profile/EditProfilePage.css"
import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";

export default function EditProfilePage() {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("a");
    const [repeatPassword,setRepeatPassword] = useState("b");
    const [username,setUsername] = useState("");
    const [birthdate,setBirthDate] = useState("");
    const [country,setCountry] = useState("");

    const [saved,setSaved] = useState(false);

    return(

        <Container>

            <Form>

                <Form.Group controlId="formEditEmail">
                    <Form.Label className={"formEditLabel"}>Current email address: <h className={"formEditChange"}>{saved ? email : "daro1551@op.pl"}</h></Form.Label>
                    <Form.Control
                        className={"formEditInput"}
                        type="email" placeholder="Please, enter new email address..."
                        onChange = {(e) => setEmail(e.target.value)}/>
                </Form.Group>

                <Form.Group controlId="formEditUsername">
                    <Form.Label className={"formEditLabel"}>Current username: <h className={"formEditChange"}>{saved ? username : "daro1551@op.pl"}</h></Form.Label>
                    <Form.Control
                        className={"formEditInput"}
                        type="email" placeholder="Please, enter new username..."
                        onChange = {(e) => setEmail(e.target.value)}/>
                </Form.Group>

                <Form.Group controlId="formEditPassword">
                    <Form.Label className={"formEditLabel"}>Current password: <h className={"formEditChange"}>{saved && (password === repeatPassword) ? password : "admin123"}</h></Form.Label>
                    <Form.Control
                        className={"formEditInput mb-3"}
                        type="password" placeholder="Please, enter new password..."
                        onChange = {(e) => setPassword(e.target.value)}
                    />
                    <Form.Control
                        className={"formEditInput"}
                        type="password" placeholder="Please, repeat new password..."
                        onChange = {(e) => setRepeatPassword(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="formEditBirthDate">
                    <Form.Label className={"formEditLabel"}>Current birth date: <h className={"formEditChange"}>{saved ? birthdate : "1998-12-23"}</h></Form.Label>
                    <Form.Control
                        className={"formEditInput"}
                        type="date" placeholder="Please, enter new birth date..."
                        onChange = {(e) => setBirthDate(e.target.value)}/>
                </Form.Group>

                <Form.Group controlId="formEditBirthDate">
                    <Form.Label className={"formEditLabel"}>Current country: <h className={"formEditChange"}>{saved ? country : "Poland"}</h></Form.Label>
                    <Form.Control
                        className={"formEditInput"}
                        type="text" placeholder="Please, enter new country..."
                        onChange = {(e) => setBirthDate(e.target.value)}/>
                </Form.Group>

                <Button
                    variant={"primary"}
                    onClick = {() => setSaved(true)}
                    className={"formEditSaveButton"}
                >
                    Save
                </Button>

            </Form>




        </Container>
    )



}