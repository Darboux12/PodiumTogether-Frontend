import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function SearchMessage(props) {

    let {message} = props;

    return (

        <div className={"searchMessagePlaceContainer d-flex flex-row align-items-center"}>
            <FontAwesomeIcon className={"searchMessagePlaceIcon"} icon={faSearch}/>
            <h className={"searchMessagePlaceHeader"}>{message}</h>
        </div>

    )

}
