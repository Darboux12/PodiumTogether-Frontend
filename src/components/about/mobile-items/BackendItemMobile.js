import springBrand from "../../../images/springBrand.png";
import AboutItemMobile from "../../about-item/AboutItemMobile";
import React from "react";

export default function BackendItemMobile(){

    return <AboutItemMobile

        header="Backend & Server side"

        paragraph =
            "Backend & Server side was designed and implemented
                        using java framework spring, including spring boot"

        image={springBrand}
    />
}