import React, {Component} from "react";
import Container from "react-bootstrap/esm/Container";
import InputGroup from "react-bootstrap/esm/InputGroup";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index";
import {faUnlock, faEnvelope} from "@fortawesome/free-solid-svg-icons/index";
import FormControl from "react-bootstrap/esm/FormControl";
import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/esm/Modal";

import "../../styles/SignInModal.css"
import {faUser} from "@fortawesome/free-regular-svg-icons";

class  SignInForm extends Component{

    render() {
        return (

            <Container>

                <InputGroup className="mb-3">

                    <InputGroup.Prepend>
                        <InputGroup.Text id="userInputText">
                            <FontAwesomeIcon id="username-icon" icon={faUser}/>
                        </InputGroup.Text>
                    </InputGroup.Prepend>

                    <FormControl
                        placeholder="Please, write your username..."
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>

                <InputGroup className="mb-3">

                    <InputGroup.Prepend>
                        <InputGroup.Text id="passwordInputText">
                            <FontAwesomeIcon id="password-icon" icon={faUnlock}/>
                        </InputGroup.Text>
                    </InputGroup.Prepend>

                    <FormControl
                        type="password"
                        placeholder="Please, write your password..."
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>

                <Button
                    variant="primary"
                    onClick={this.props.closeSignInModal}
                    className="signInModalButton"
                >
                    Sign In

                </Button>



            </Container>







        );
    }

}

export default SignInForm;