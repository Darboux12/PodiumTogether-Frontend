import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import userProfileImage from "../../images/person.jpg";

import "../../styles/user-profile/UserProfilePage.css"
import TabsBar from "./TabsBar";
import ProfileInformation from "./ProfileInformation";
import ProfileEvents from "./ProfileEvents";
import ProfilePlaces from "./ProfilePlaces";
import ProfileWarnings from "./ProfileWarnings";

class UserProfilePage extends Component{

    constructor(props) {
        super(props);
        this.state = {
            profile : true,
            events : false,
            places : false,
            warnings: false
        };



    }

    handleTabChange(element){

        if(element === "profile") {

            this.setState({profile: true});
            this.setState({events: false});
            this.setState({places: false});
            this.setState({warnings: false});

        }

        if(element === "events") {

            this.setState({profile: false});
            this.setState({events: true});
            this.setState({places: false});
            this.setState({warnings: false});

        }

        if(element === "places") {

            this.setState({profile: false});
            this.setState({events: false});
            this.setState({places: true});
            this.setState({warnings: false});

        }

        if(element === "warnings") {

            this.setState({profile: false});
            this.setState({events: false});
            this.setState({places: false});
            this.setState({warnings: true});

        }

    }

    render(){

        if(this.state.profile === true){

            return (
                <Container>
                    <TabsBar
                        onTabChange = {this.handleTabChange.bind(this)}
                    />
                    <ProfileInformation/>
                </Container>
            );

        }

        if(this.state.events === true){

            return (
                <Container>
                    <TabsBar
                        onTabChange = {this.handleTabChange.bind(this)}
                    />
                    <ProfileEvents/>
                </Container>
            );

        }

        if(this.state.places === true){

            return (
                <Container>
                    <TabsBar
                        onTabChange = {this.handleTabChange.bind(this)}
                    />
                    <ProfilePlaces/>
                </Container>
            );

        }

        if(this.state.warnings === true){

            return (
                <Container>
                    <TabsBar
                        onTabChange = {this.handleTabChange.bind(this)}
                    />
                    <ProfileWarnings/>
                </Container>
            );

        }








    }

}

export default UserProfilePage;