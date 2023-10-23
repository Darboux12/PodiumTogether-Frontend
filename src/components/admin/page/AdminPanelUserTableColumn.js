import UsersTable from "./UsersTable";
import React from "react";
import "../../../styles/admin/AdminPanel.css"
import Row from "react-bootstrap/Row";

export default function AdminPanelUserTableColumn(props) {

    const {isUserTableVisible} = props;

    const UserTable = isUserTableVisible ? <UsersTable/> : <div/>;

    return (

        <Row className={"AdminDisplayColumn"}>
            {UserTable}
        </Row>

    )

}
