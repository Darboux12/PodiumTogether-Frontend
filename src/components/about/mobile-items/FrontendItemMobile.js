import reactBrand from "../../../images/reactBrand.png";
import AboutItemMobile from "../../about-item/AboutItemMobile";
import React from "react";

export default function FrontendItemMobile() {

    return <AboutItemMobile

        header="Frontend & User Interface"

        paragraph =
            "All frontend & user Interface was designed and implemented
                         using java script library ReactJS, including
                         react hooks, react bootstrap and react reveal"

        image={reactBrand}
    />

}