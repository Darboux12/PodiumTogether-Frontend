import React, {Component} from "react";

import "../../styles/user-profile/ProfileHeader.css"

export default function ProfileHeader(props){

        return <div className={"header"}>{props.text}</div>;
}
