import React, { Component } from "react";
import { } from "react-router-dom";
import axios from "axios";

class Reservation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            services: ""
        }
    }

    componentDidMount() {
        axios.get('http://localhost:9000/services')
            .then(response => {
                this.setState({ services: response.data });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        var listOfService = [];
        var services = this.state.services;
        for (var i = 0; i < services.length; i++) {
            listOfService.push(<option value={services[i]._id} key={services[i]._id}> {services[i].name} </option>);
        }
        return (
            <div className="container">
                <input type="text" className="timepicker" placeholder="Choississez une heure" />
                <input type="text" className="datepicker" placeholder="Choississez une date" />
                <div className="input-field col s12">
                    <select className="browser-default" defaultValue={'DEFAULT'}>
                        <option key="0" value="DEFAULT" disabled>Choississez un service</option>
                        {listOfService}
                    </select>
                </div>
            </div>
        );
    }
}

export default Reservation;