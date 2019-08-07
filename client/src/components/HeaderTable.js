import React, { Component } from 'react';
import axios from "axios";

class HeaderTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            socialcategory: ""
        };
    }

    componentDidMount() {
        axios.get('http://localhost:9000/socialcategory')
            .then(response => {
                this.setState({ socialcategory: response.data });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        var listOfLabel = []
        var labels = this.state.socialcategory;
        for (var i = 0; i < labels.length; i++) {
            listOfLabel.push(<th key={labels[i]._id}> {labels[i].name}</th>)
        }
        return (
            <thead>
                <tr>
                    {listOfLabel}
                </tr>
            </thead>
        )
    }
}

export default HeaderTable;