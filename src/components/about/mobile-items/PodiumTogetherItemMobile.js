import universityBrand from "../../../images/universityBrand.jpg";
import AboutItemMobile from "../../about-item/AboutItemMobile";
import React from "react";

export default function PodiumTogetherItemMobile() {

    return <AboutItemMobile
        header = "Podium together?"
        paragraph = "
                        Podium together is a web application, designed and developed by one university student
                            as an engineering thesis to graduate from Cracow University of Technology.

                        "
        image={ universityBrand}
    />

}