import UsersTable from "./UsersTable";
import React from "react";
import Col from "react-bootstrap/esm/Col";
import "../../../styles/admin/AdminPanel.css"
import PlaceTable from "./PlaceTable";
import Row from "react-bootstrap/Row";

export default function AdminPanelPlaceTableColumn(props) {

    const {isPlaceTableVisible} = props;

    const placeTable = isPlaceTableVisible ? <PlaceTable/> : <div/>;

    return (

        <Row className={"AdminDisplayColumn"}>
            {placeTable}
        </Row>

    )

}
