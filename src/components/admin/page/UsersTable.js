import Table from "react-bootstrap/esm/Table";
import React, {useEffect, useState} from "react";
import serverAddress, {deleteUserEndpoint} from "../../config/Constants";
import News from "../../news/News";
import ActionIcons from "./ActionIcons";
import Modal from "react-bootstrap/esm/Modal";
import Button from "react-bootstrap/esm/Button";
import SubmitModal from "../../common/SubmitModal";
import Container from "react-bootstrap/Container";
import "../../../styles/admin/AdminPanel.css"
import {deleteUserFetch, findAllUsersFetch} from "../../fetch/Fetch";

export default function UsersTable() {

    const [users,setUsers] = useState([]);
    const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
    const [submitModalVisible,setSubmitModalVisible] = useState(false);
    const [userUsernameAction,setUserUsernameAction] = useState("");

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
                    <td>{item.roles}</td>
                    <td>{item.country}</td>
                    <td><ActionIcons
                        deleteUser = {(user) => deleteUser(user)}
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

            <SubmitModal
                isSubmitModalVisible={submitModalVisible}
                closeSubmitModal={() => setSubmitModalVisible(false)}
                text = "Delete request"
            />

        </Container>

    )

}