import React, { Component } from "react";
import { } from "react-router-dom";

class UserReservations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reservations: ""
        }
    }

    componentDidMount() {
        var id = this.props.userId;
    }

    render() {
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
                    
                </tbody>
            </table>
        );
    }
}

export default UserReservations;