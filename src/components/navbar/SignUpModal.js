import React, {Component} from "react";
import Modal from "react-bootstrap/esm/Modal";
import Button from "react-bootstrap/esm/Button";
import InputGroup from "react-bootstrap/esm/InputGroup";
import FormControl from "react-bootstrap/esm/FormControl";
import {faUser} from "@fortawesome/free-solid-svg-icons/index";
import {faUnlock} from "@fortawesome/free-solid-svg-icons/index";
import {faTrophy} from "@fortawesome/free-solid-svg-icons/index";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index";

import "../../styles/navbar-styles/SignUpModal.css"
import Logo from "../common/Logo";
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
                    
                </Modal.Footer>

            </Modal>


        );
    }

}

export default SignUpModal;