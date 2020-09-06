import React, {Component} from "react";
import Event from "../display-events-page/page/Event";
import ProfileHeader from "./ProfileHeader";

import "../../styles/user-profile/ProfileEvents.css"
import Table from "react-bootstrap/Table";


export default function ProfileEvents(){

        return (

            <div>

            <ProfileHeader text={"Organized Events"}/>

                <Table striped bordered hover variant="dark">

                    <thead className={"EventsTableHead"}>
                        <tr>
                            <th>Title</th>
                            <th>Discipline</th>
                            <th>Date</th>
                            <th>Localization</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody className={"EventsTableBody"}>

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

