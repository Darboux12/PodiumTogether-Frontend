import reactBrand from "../../../images/reactBrand.png";
import AboutItem from "../../about-item/AboutItem";
import React from "react";

export default function FrontendItem() {

    return <AboutItem

        header="Frontend & User Interface"

        paragraph =
            "All frontend & user Interface was designed and implemented
                         using java script library ReactJS, including
                         react hooks, react bootstrap and react reveal"

        image={reactBrand}
    />;

}