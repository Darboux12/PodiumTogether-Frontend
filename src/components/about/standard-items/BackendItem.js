import AboutItem from "../../about-item/AboutItem";
import springBrand from "../../../images/springBrand.png";
import React from "react";

export default function BackendItem() {

    return <AboutItem
        header="Backend & Server side"
        paragraph =
            "Backend & Server side was designed and implemented
                        using java framework spring, including spring boot"
        image={springBrand}
    />

}