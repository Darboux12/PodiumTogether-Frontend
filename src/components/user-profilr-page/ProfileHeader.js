import React, {Component} from "react";

import "../../styles/user-profile/ProfileHeader.css"

class ProfileHeader extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return <div className={"header"}>{this.props.text}</div>;
    }

}

export default ProfileHeader;