import React, { Component } from "react";
import { } from "react-router-dom";
import axios from "axios";
import { registerReservation } from '../actions/resActions';

class Reservation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            services: "",
            service: '',
            date: '',
            hour: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        alert(this.state.service + " /n " + this.state.date + " /n " + this.state.hour);
        const { user } = this.props.auth;
        const newReservation = {
            date: this.state.date,
            hour: this.state.hour,
            user: user.id,
            service: this.state.service
        };
        this.props.registerReservation(newReservation, this.props.history);
    }

    render() {
        var listOfService = [];
        var services = this.state.services;
        for (var i = 0; i < services.length; i++) {
            listOfService.push(<option value={services[i]._id} key={services[i]._id}> {services[i].name} </option>);
        }
        return (
            <div className="container">
                <form className="center" onSubmit={this.handleSubmit}>
                    <input type="text" className="timepicker" value={this.state.hour} onChange={this.handleChange} placeholder="Choississez une heure" />
                    <input type="text" className="datepicker" value={this.state.date} onChange={this.handleChange} placeholder="Choississez une date" />
                    <div className="input-field col s12">
                        <select className="browser-default" defautlvalue="DEFAULT" onChange={this.handleChange}>
                            <option key="0" value="DEFAULT" disabled>Choississez un service</option>
                            {listOfService}
                        </select>
                    </div>
                    <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                        <button style={{ width: "150px", borderRadius: "3px", letterSpacing: "1.5px", marginTop: "1rem" }} type="submit" className="btn btn-large waves-effect waves-light hoverable green accent-3"> Réservation </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Reservation;