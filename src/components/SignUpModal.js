import React, {Component} from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {faUnlock} from "@fortawesome/free-solid-svg-icons";
import {faTrophy} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import "../styles/SignUpModal.css"
import Logo from "./Logo";
import SignUpForm from "./SignUpForm";

class SignUpModal extends Component{

    constructor(props){
        super(props);
    }

    render() {
        return(

            <Modal show={this.props.isSignUpModalVisible} onHide={this.props.closeSignUpModal}>

                <Modal.Header className="signInModalHeader">
                    <Modal.Title className="signInModalHeaderTitle">
                        <Logo/>
                    </Modal.Title>
                    <div className="signInTitleHeader">
                        <h2>Sign up</h2>
                        <h>
                            We are glad to see you joining your community.
                            We hope you find your dream team!
                        </h>
                    </div>
                </Modal.Header>

                <Modal.Body>

                    <SignUpForm/>

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

export default SignUpModal;