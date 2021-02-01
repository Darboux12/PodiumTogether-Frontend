import Modal from "react-bootstrap/Modal";
import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {faEyeSlash} from "@fortawesome/free-regular-svg-icons";

import "../../styles/security/AuthenticationRefusedModal.css"

export default function AdminRefusedModal() {

    const [modalVisible, setModalVisible] = useState(true);

    return (

        <div>

            <Modal show={modalVisible} onHide={() => setModalVisible(false)}>

                <Modal.Header className={"d-flex align-items-center justify-content-center"}>
                    <h2
                        className={"text-align-center authenticationModalHeader"}
                    >
                        Access denied
                    </h2>
                </Modal.Header>

                <Modal.Body className={""}>

                    <Row>

                        <Col className={"d-flex align-items-center justify-content-center"}>

                            <h className={"authenticationModalText"}>

                                You must be admin to see page content. </h>

                        </Col>

                        <Col className={"d-flex align-items-center justify-content-center"}>

                            <FontAwesomeIcon
                                id="logo-icon-2"
                                icon={faEyeSlash}
                                className={"authenticationModalImage"}
                            />

                        </Col>

                    </Row>


                </Modal.Body>



            </Modal>

        </div>







    );

}
