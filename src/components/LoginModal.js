import React, {Component} from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {faUnlock} from "@fortawesome/free-solid-svg-icons";
import {faTrophy} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import "../styles/signInModal.css"

class LoginModal extends Component{

    constructor(props){
        super(props);
    }

    render() {
        return(

            <Modal show={this.props.isVisible} onHide={this.props.closeModal}>

                <Modal.Header className="signInModalHeader">
                    <Modal.Title>
                        <FontAwesomeIcon id="trophy-icon" icon={faTrophy}/>
                        Sign in
                    </Modal.Title>
                    <h>
                        Welcome again, we are glad to see you sharing your passion
                        and searching for another amazing people.
                    </h>
                </Modal.Header>

                <Modal.Body>

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
                            placeholder="Please, write your password..."
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>

                    <Button
                        variant="primary"
                        onClick={this.props.closeModal}
                        className="signInModalButton"
                    >
                        Sign In
                    </Button>

                </Modal.Body>

                <Modal.Footer className="signInModalFooter">

                    <a href="#forgotPassword">
                        Forgot your password?
                    </a>

                </Modal.Footer>

            </Modal>


        );
    }

}

export default LoginModal;