import React, {useEffect, useState} from "react";
import {deletePlaceFetch, findAllPlaceFetch} from "../../fetch/Fetch";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";

import Button from "react-bootstrap/Button";
import SubmitModal from "../../common/SubmitModal";
import PlaceActionIcons from "./PlaceActionIcons";
import Modal from "react-bootstrap/Modal";

export default function PlaceTable(){

    const [places,setPlaces] = useState([]);
    const [isPlaceDeleteModalVisible, setIsPlaceDeleteModalVisible] = useState(false);
    const [submitPlaceModalVisible,setSubmitPlaceModalVisible] = useState(false);
    const [placeIdAction,setPlaceIdAction] = useState("");

    const deletePlace= (id) => {
        setPlaceIdAction(id);
        setIsPlaceDeleteModalVisible(true);
    };

    const deletePlaceConfirmed = () => {

        setIsPlaceDeleteModalVisible(false);

        deletePlaceFetch(placeIdAction)

            .then((res) => {

                if(res.ok){
                    setSubmitPlaceModalVisible(true);
                    setTimeout(() => {window.location.reload()},2000);
                }


                else return res.json();

            })

            .then(res => console.log(res))

            .catch(err => { console.log(err) })

    };

    useEffect(() => {

        findAllPlaceFetch()

            .then(res => res.json())

            .then(res => {setPlaces(res);})

            .catch(error => console.log(error));

    },[]);

    return(

        <Container>

            <h className={"AdminPanelUserTableHeader"}>Place Table</h>

            <Table striped bordered hover variant="dark">

                <thead>

                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Discipline</th>
                    <th>Author</th>
                    <th>City</th>
                    <th>Action</th>
                </tr>

                </thead>

                <tbody>

                {places.map(item =>


                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td><a href={"/place/details/" + item.id}>{item.name}</a></td>
                        <td>{item.discipline}</td>
                        <td>{item.author}</td>
                        <td>{item.localization.city}</td>
                        <td><PlaceActionIcons
                            deletePlace = {(placeId) => deletePlace(placeId)}
                            placeId = {item.id}
                        /></td>
                    </tr>

                )}

                </tbody>

            </Table>

            <Modal
                show={isPlaceDeleteModalVisible}
                onHide={() => setIsPlaceDeleteModalVisible(false)}
            >

                <Modal.Header closeButton>
                    <Modal.Title>Delete Confirmation</Modal.Title>
                </Modal.Header>

                <Modal.Body>Do you really want to delete this place?</Modal.Body>

                <Modal.Footer>

                    <Button variant="secondary" onClick={() => setIsPlaceDeleteModalVisible(false)}>
                        Close
                    </Button>

                    <Button variant="danger" onClick={() => deletePlaceConfirmed()}>
                        Delete place
                    </Button>

                </Modal.Footer>
            </Modal>

            <SubmitModal
                isSubmitModalVisible={submitPlaceModalVisible}
                closeSubmitModal={() => setSubmitPlaceModalVisible(false)}
                text = "Delete request"
            />



        </Container>

    )





}
