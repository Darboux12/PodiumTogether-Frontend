import React, {Component} from "react";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

import "../../styles/user-profile/TabsBar.css"

export default function TabsBar(props){

        return(

            <div className={"tabBarContainer d-flex flex-row"}>

                        <button
                            className={"tabsBarButton"}
                            onMouseOver={() => props.onTabChange("profile")}
                        >Profile
                        </button>

                        <button
                            className={"tabsBarButton"}
                            onMouseOver={() => props.onTabChange("events")}
                        >Organized Events
                        </button>

                        <button
                            className={"tabsBarButton"}
                            onMouseOver={() => props.onTabChange("places")}
                        >Marked Places
                        </button>

                        <button
                            className={"tabsBarButton"}
                            onMouseOver={() => props.onTabChange("warnings")}
                        >Warnings
                        </button>

            </div>

        );

}

