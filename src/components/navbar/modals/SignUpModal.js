import React, {Component} from "react";
import Modal from "react-bootstrap/esm/Modal";
import "../../../styles/navbar/SignUpModal.css"
import Logo from "../../common/Logo";
import SignUpForm from "./SignUpForm";

export default function SignUpModal(props){

    const isSignUpModalVisible = props.isSignUpModalVisible;
    const closeSignUpModal = props.closeSignUpModal;

        return(

            <Modal show={isSignUpModalVisible} onHide={closeSignUpModal}>

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

