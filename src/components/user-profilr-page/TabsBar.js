import React, {Component} from "react";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

import "../../styles/user-profile/TabsBar.css"

class TabsBar extends Component{

    constructor(props){
        super(props);
    }

    render(){

        return(

            <div className={"tabBarContainer d-flex flex-row"}>

                        <button
                            className={"tabsBarButton"}
                            onMouseOver={() => this.props.onTabChange("profile")}
                        >Profile
                        </button>

                        <button
                            className={"tabsBarButton"}
                            onMouseOver={() => this.props.onTabChange("events")}
                        >Organized Events
                        </button>

                        <button
                            className={"tabsBarButton"}
                            onMouseOver={() => this.props.onTabChange("places")}
                        >Marked Places
                        </button>

                        <button
                            className={"tabsBarButton"}
                            onMouseOver={() => this.props.onTabChange("warnings")}
                        >Warnings
                        </button>










            </div>





        );
    }

}

export default TabsBar;