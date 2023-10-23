import Table from "react-bootstrap/esm/Table";
import React, {useEffect, useState} from "react";
import ActionIcons from "./ActionIcons";
import Modal from "react-bootstrap/esm/Modal";
import Button from "react-bootstrap/esm/Button";
import SubmitModal from "../../common/SubmitModal";
import Container from "react-bootstrap/Container";
import "../../../styles/admin/AdminPanel.css"
import {banUserFetch, deleteUserFetch, findAllUsersFetch} from "../../fetch/Fetch";
import {Form} from "react-bootstrap";

export default function UsersTable() {

    const [users,setUsers] = useState([]);
    const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
    const [isBanModalVisible, setIsBanModalVisible] = useState(false);
    const [submitModalVisible,setSubmitModalVisible] = useState(false);
    const [userUsernameAction,setUserUsernameAction] = useState("");
    const [submitBanModalVisible,setSubmitBanModalVisible] = useState(false);

    const [dateFrom,setDateFrom] = useState("");
    const [dateTo,setDateTo] = useState("");
    const [reason,setReason] = useState("");

    const [dateFromError,setDateFromError] = useState("");
    const [dateToError,setDateToError] = useState("");
    const [reasonError,setReasonError] = useState("");


    useEffect(() => {

        findAllUsersFetch()

            .then(res => res.json())

            .then(res => {setUsers(res);})

            .catch(error => console.log(error));

    },[]);

    const deleteUser = (username) => {

        setUserUsernameAction(username);
        setIsDeleteModalVisible(true);

    };

    const banUser = (username) => {

        setUserUsernameAction(username);
        setIsBanModalVisible(true);

    };

    const banUserConfirmed = () => {

        setDateFromError("");
        setDateToError("");
        setReasonError("");

        let isOk = true;

        if(dateFrom === ""){
            isOk = false;
            setDateFromError("Date From cannot be empty!");
        }

        if(dateTo === ""){
            isOk = false;
            setDateToError("Date From cannot be empty!");
        }

        if(reason === "") {
            isOk = false;
            setReasonError("Reason cannot be empty!");
        }

        if(isOk){

            setIsBanModalVisible(false);

            banUserFetch(dateFrom,dateTo,reason,userUsernameAction)

                .then((res) => {

                    if(res.ok){
                        setSubmitBanModalVisible(true);
                        setTimeout(() => {window.location.reload()},2000);
                    }


                    else return res.json();

                })

                .then(res => console.log(res))

                .catch(err => { console.log(err) })

        }
    };

    const deleteUserConfirmed = () => {

        setIsDeleteModalVisible(false);

        deleteUserFetch(userUsernameAction)

            .then((res) => {

            if(res.ok){
                setSubmitModalVisible(true);
                setTimeout(() => {window.location.reload()},2000);
            }


            else return res.json();

            })

            .then(res => console.log(res))

            .catch(err => { console.log(err) })

    };

    return(

        <Container>

            <h className={"AdminPanelUserTableHeader"}>User Table</h>

            <Table striped bordered hover variant="dark">

            <thead>

            <tr>
                <th>Id</th>
                <th>Username</th>
                <th>Email</th>
                <th>Role</th>
                <th>Country</th>
                <th>Action</th>
            </tr>

            </thead>

            <tbody>

            {users.map(item =>

                <tr key={item.username}>
                    <td>{item.id}</td>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td>{item.roles.join(", ")}</td>
                    <td>{item.country}</td>
                    <td><ActionIcons
                        deleteUser = {(user) => deleteUser(user)}
                        banUser = {(user) => banUser(user)}
                        username = {item.username}


                    /></td>
                </tr>

            )}

            </tbody>

        </Table>

            <Modal
                show={isDeleteModalVisible}
                onHide={() => setIsDeleteModalVisible(false)}
            >

                <Modal.Header closeButton>
                    <Modal.Title>Delete Confirmation</Modal.Title>
                </Modal.Header>

                <Modal.Body>Do you really want to delete this user?</Modal.Body>

                <Modal.Footer>

                    <Button variant="secondary" onClick={() => setIsDeleteModalVisible(false)}>
                        Close
                    </Button>

                    <Button variant="danger" onClick={() => deleteUserConfirmed()}>
                        Delete user
                    </Button>

                </Modal.Footer>
            </Modal>

            <Modal
                show={isBanModalVisible}
                onHide={() => setIsBanModalVisible(false)}
            >

                <Modal.Header closeButton>
                    <Modal.Title>Ban User</Modal.Title>
                </Modal.Header>

                <Modal.Body>

                    <Form className={"createNewsForm w-70"}>

                        <Form.Group controlId="formNewsTitle">
                            <Form.Label className={"FormLabel"}>Ban Date From</Form.Label>
                            <h className={"ErrorHeader ml-3"}>{dateFromError}</h>
                            <Form.Control
                                className={"FormInputField"}
                                type="datetime-local"
                                onChange = {(e) => setDateFrom(e.target.value)}/>
                        </Form.Group>

                        <Form.Group controlId="formNewsTitle">
                            <Form.Label className={"FormLabel"}>Ban Date To</Form.Label>
                            <h className={"ErrorHeader ml-3"}>{dateToError}</h>
                            <Form.Control
                                className={"FormInputField"}
                                type="datetime-local"
                                onChange = {(e) => setDateTo(e.target.value)}/>
                        </Form.Group>

                        <Form.Group controlId="formNewsTitle">
                            <Form.Label className={"FormLabel"}>Ban Reason</Form.Label>
                            <h className={"ErrorHeader ml-3"}>{reasonError}</h>
                            <Form.Control
                                className={"FormInputField"}
                                as="textarea"
                                rows="6"
                                onChange = {(e) => setReason(e.target.value)}/>
                        </Form.Group>

                    </Form>

                </Modal.Body>

                <Modal.Footer>

                    <Button variant="secondary" onClick={() => setIsBanModalVisible(false)}>
                        Close
                    </Button>

                    <Button variant="danger" onClick={() => banUserConfirmed()}>
                        Ban user
                    </Button>

                </Modal.Footer>

            </Modal>

            <SubmitModal
                isSubmitModalVisible={submitModalVisible}
                closeSubmitModal={() => setSubmitModalVisible(false)}
                text = "Delete request"
            />

            <SubmitModal
                isSubmitModalVisible={submitBanModalVisible}
                closeSubmitModal={() => setSubmitBanModalVisible(false)}
                text = "Ban request"
            />



        </Container>

    )

}
