import React, {Component} from "react";
import Modal from "react-bootstrap/Modal";

import "../../styles/common/SubmitModal.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSkating} from "@fortawesome/free-solid-svg-icons";
import {faCheckCircle} from "@fortawesome/free-regular-svg-icons";



export default function SubmitModal(props){

    let isSubmitModalVisible = props.isSubmitModalVisible;
    let onHide = props.closeSubmitModal;

    return(

        <Modal show={isSubmitModalVisible} onHide={onHide}>

            <Modal.Header className="submitModalHeader">

                <div className={"d-flex flex-row submitModalHeaderIcon"}>

                    <h className={"submitModalLowerHeader col-7"}>Data was successfully sent!</h>

                    <FontAwesomeIcon className={"submitModalIcon col-5"} id="logo-icon-2" icon={faCheckCircle}/>

                </div>

            </Modal.Header>

        </Modal>

    );

}

