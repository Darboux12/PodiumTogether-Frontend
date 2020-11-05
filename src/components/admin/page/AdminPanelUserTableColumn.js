import UsersTable from "./UsersTable";
import React from "react";
import Col from "react-bootstrap/esm/Col";
import "../../../styles/admin/AdminPanel.css"

export default function AdminPanelUserTableColumn(props) {

    const {isUserTableVisible} = props;

    const UserTable = isUserTableVisible ? <UsersTable/> : <div/>;

    return (

        <Col className={"AdminDisplayColumn col-md-9 col-12"}>
            {UserTable}
        </Col>

    )

}