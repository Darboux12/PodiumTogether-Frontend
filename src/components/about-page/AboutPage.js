import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import AboutItem from "./AboutItem";
import picture from "../../images/desk.jpg"

class AboutPage extends Component{

    render(){
        return(

            <Container>


                <h1 className={"mb-5"}>About Podium Together</h1>

                <AboutItem
                    header = "The journey to relaxation"
                    paragraph = "
                    Finding a hammock you can truly relax in didn’t
                    happen overnight. It started with a chance discovery
                    while on vacation, and took a lot of hard work
                    (and a lot of hanging around) to bring the softest,
                    most comfortable, and thoughtfully crafted hammocks
                    to your backyard."
                    image={picture}
                />

                <AboutItem
                    header = "The journey to relaxation"
                    paragraph = "
                    Finding a hammock you can truly relax in didn’t
                    happen overnight. It started with a chance discovery
                    while on vacation, and took a lot of hard work
                    (and a lot of hanging around) to bring the softest,
                    most comfortable, and thoughtfully crafted hammocks
                    to your backyard."
                    image={picture}
                    left={true}
                />




            </Container>





        );
    }

}

export default AboutPage;