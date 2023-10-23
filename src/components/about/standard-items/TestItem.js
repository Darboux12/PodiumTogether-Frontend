import restAssuredBrand from "../../../images/RestAssuredBrand.png";
import AboutItem from "../../about-item/AboutItem";
import React from "react";

export default function TestItem() {

    return <AboutItem
        header="Testing & validating"
        paragraph =
            "Testing of REST service was implemented using
                        REST assured and JUnit"
        image={restAssuredBrand}
    />

}
