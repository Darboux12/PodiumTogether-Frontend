import universityBrand from "../../../images/universityBrand.jpg";
import AboutItem from "../../about-item/AboutItem";
import React from "react";

export default function PodiumTogetherItem() {

    return <AboutItem
        header = "Podium together"
        paragraph = "
                        Podium together is a web application, designed and developed by one university student
                            as an engineering thesis to graduate from Cracow University of Technology.

                        "
        image={ universityBrand}
    />

}
