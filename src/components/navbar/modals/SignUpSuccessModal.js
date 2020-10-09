import React, {Component} from "react";
import Modal from "react-bootstrap/esm/Modal";
import "../../../styles/navbar/SignUpModal.css"
import Logo from "../../common/Logo";
import SignUpForm from "./SignUpForm";

export default function SignUpSuccessModal(props){

    const isSignUpModalVisible = props.isSignUpModalVisible;
    const closeSignUpModal = props.closeSignUpModal;

    return(

        <Modal show={isSignUpModalVisible} onHide={closeSignUpModal}>

            <Modal.Header className="signInModalHeader">

                <Modal.Title className="signInModalHeaderTitle">
                    <Logo/>
                </Modal.Title>

            </Modal.Header>

            <Modal.Body>

                <h>You were successfully signed up!</h>

                <h>You can sign in now!</h>



            </Modal.Body>

            <Modal.Footer className="signUpModalFooter">

            </Modal.Footer>

        </Modal>


    );


}

