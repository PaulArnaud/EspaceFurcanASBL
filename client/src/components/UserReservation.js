import React, { Component } from "react";
import axios from "axios";

class UserReservations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reservations: ""
        }
    }

    componentDidMount() {
        axios.get('http://localhost:9000/reservations?user=' + this.props.userId)
            .then(response => {
                this.setState({ reservations: response.data });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        var listOfReservation = [];
        var reservations = this.state.reservations;
        for (var i = 0; i < reservations.length; i++) {
            listOfReservation.push(<tr> <th> {reservations[i].date} </th> <th> {reservations[i].hour} </th> <th> {reservations[i].service} </th> </tr>);
        }
        return (
            <table className="stripped highlight centered responsive-table">
                <thead className="center">
                    <tr>
                        <th> Date </th>
                        <th> Heure </th>
                        <th> Service </th>
                    </tr>
                </thead>
                <tbody>
                    {listOfReservation}
                </tbody>
            </table>
        );
    }
}

export default UserReservations;