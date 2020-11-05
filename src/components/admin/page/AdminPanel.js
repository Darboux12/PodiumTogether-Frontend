import Container from "react-bootstrap/esm/Container";
import React, {useState} from "react";
import Row from "react-bootstrap/esm/Row";
import "../../../styles/admin/AdminPanel.css"
import AdminPanelButtonsColumn from "./AdminPanelButtonsColumn";
import AdminPanelUserTableColumn from "./AdminPanelUserTableColumn";

export default function AdminPanel() {

    const [isUserTableVisible, setIsUserTableVisible] = useState(false);

    return(

        <Container>

            <Row>

                <AdminPanelUserTableColumn
                    isUserTableVisible = {isUserTableVisible}
                />

                <AdminPanelButtonsColumn
                    setIsUserTableVisible = {setIsUserTableVisible}
                    isUserTableVisible = {isUserTableVisible}
                />

            </Row>

        </Container>

    )

}