import Container from "react-bootstrap/esm/Container";
import React, {useState} from "react";
import Row from "react-bootstrap/esm/Row";
import "../../../styles/admin/AdminPanel.css"
import AdminPanelButtonsColumn from "./AdminPanelButtonsColumn";
import AdminPanelUserTableColumn from "./AdminPanelUserTableColumn";
import AdminPanelPlaceTableColumn from "./AdminPanelPlaceTableColumn";
import Col from "react-bootstrap/Col";

export default function AdminPanel() {

    const [isUserTableVisible, setIsUserTableVisible] = useState(false);
    const [isPlaceTableVisible, setIsPlaceTableVisible] = useState(false);

    return(

        <Container>

            <Row className={"AdminPanelRow"}>

                <Col>

                    <AdminPanelUserTableColumn
                        isUserTableVisible = {isUserTableVisible}
                    />

                    <AdminPanelPlaceTableColumn
                        isPlaceTableVisible = {isPlaceTableVisible}
                    />

                </Col>

                <AdminPanelButtonsColumn
                    setIsUserTableVisible = {setIsUserTableVisible}
                    isUserTableVisible = {isUserTableVisible}
                    setIsPlaceTableVisible = {setIsPlaceTableVisible}
                    isPlaceTableVisible = {isPlaceTableVisible}
                />

            </Row>

        </Container>

    )

}
