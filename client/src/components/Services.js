import React, { Component } from "react";
import axios from "axios";
import Service from "./Service";

class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {
            services: '',
            imageURL: '',
        };
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
            listOfService.push(<Service key={services[i]._id} service={services[i]} />);
        }
        return (
            <div>
                {listOfService}
            </div>
        );
    }
}

export default Services;