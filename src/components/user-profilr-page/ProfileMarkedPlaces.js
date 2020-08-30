import React, {Component} from "react";
import ProfileHeader from "./ProfileHeader";
import Table from "react-bootstrap/Table";

import "../../styles/user-profile/ProfileMarkedPlaces.css"

class ProfileMarkedPlaces extends Component{

    render(){

        return(

            <div>

                <ProfileHeader text={"Marked Places"}/>

                <Table striped bordered hover variant="dark">

                    <thead className={"MarkedPlacesTableHead"}>
                    <tr>
                        <th>Title</th>
                        <th>Discipline</th>
                        <th>Date</th>
                        <th>Localization</th>
                        <th>Status</th>
                    </tr>
                    </thead>

                    <tbody className={"MarkedPlacesTableBody"}>

                    <tr>
                        <td>Common game on orlik</td>
                        <td>Football</td>
                        <td>12.08.2020</td>
                        <td>Kraków, Polna 64</td>
                        <td>Finished</td>
                    </tr>

                    <tr>
                        <td>Common game on orlik</td>
                        <td>Football</td>
                        <td>12.08.2020</td>
                        <td>Kraków, Polna 64</td>
                        <td>Upcoming</td>
                    </tr>

                    <tr>
                        <td>Common game on orlik</td>
                        <td>Football</td>
                        <td>12.08.2020</td>
                        <td>Kraków, Polna 64</td>
                        <td>Upcoming</td>
                    </tr>

                    <tr>
                        <td>Common game on orlik</td>
                        <td>Football</td>
                        <td>12.08.2020</td>
                        <td>Kraków, Polna 64</td>
                        <td>Finished</td>
                    </tr>

                    </tbody>
                </Table>




            </div>







        );
    }

}

export default ProfileMarkedPlaces;