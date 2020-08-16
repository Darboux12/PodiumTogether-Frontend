import React, {Component} from "react";
import Modal from "react-bootstrap/esm/Modal";
import Button from "react-bootstrap/esm/Button";
import InputGroup from "react-bootstrap/esm/InputGroup";
import FormControl from "react-bootstrap/esm/FormControl";
import {faUser} from "@fortawesome/free-solid-svg-icons/index";
import {faUnlock} from "@fortawesome/free-solid-svg-icons/index";
import {faTrophy} from "@fortawesome/free-solid-svg-icons/index";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index";



import "../../styles/SignInModal.css"
import Logo from "../common-components/Logo";
import SignInForm from "./SignInForm";

class SignInModal extends Component{

    constructor(props){
        super(props);
    }

    render() {
        return(

            <Modal show={this.props.isSignInModalVisible} onHide={this.props.closeSignInModal}>

                <Modal.Header className="signInModalHeader">
                    <Modal.Title className="signInModalHeaderTitle">
                        <Logo/>
                    </Modal.Title>
                    <div className="signInTitleHeader">
                    <h2>Sign in</h2>
                    <h>
                        Welcome again, we are glad to see you sharing your passion
                        and searching for another amazing people.
                    </h>
                    </div>
                </Modal.Header>

                <Modal.Body>

                    <SignInForm/>

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

export default SignInModal;