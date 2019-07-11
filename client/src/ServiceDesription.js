import React,{Component} from "react";
import {} from "react-router-dom";

class ServiceDescription extends Component {
    constructor(props) {
        super(props);
        this.state = {
            service: ""
        };
    }

    getService(){
        var request = "http://localhost:9000/services/" + this.props.id;
        fetch(request)        
            .then(res => res.text())        
            .then(res => this.setState({ service: JSON.parse(res) }))
            .catch(err => err);
    }
    
    componentDidMount() {
    this.getService();
    }
    
    render() {
        return (<div>
            <h1>{this.state.service.name}</h1>
            <p>{this.state.service.description}</p>
        </div>);
    }
}

export default ServiceDescription;