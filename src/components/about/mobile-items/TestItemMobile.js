import restAssuredBrand from "../../../images/RestAssuredBrand.png";
import AboutItemMobile from "../../about-item/AboutItemMobile";
import React from "react";

export default function TestItemMobile() {

    return <AboutItemMobile

        header="Testing & validating"

        paragraph =
            "Testing of REST service was implemented using
                        REST assured and JUnit"

        image={restAssuredBrand}
    />

}
