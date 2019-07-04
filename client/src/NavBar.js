import React, { Component } from 'react';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
        services: "",
        service:""
    };
  }

  getServices(){
    fetch("http://localhost:9000/services")        
        .then(res => res.text())        
        .then(res => this.setState({ services: JSON.parse(res) }))
        .catch(err => err);
  }

  componentDidMount() {
    this.getServices();
  }

  changeContent(serviceId){
    this.getService(serviceId);
  }

  getService(serviceId){
    fetch("http://localhost:9000/services/"+serviceId)        
        .then(res => res.text())        
        .then(res => this.setState({ service: JSON.parse(res) }))
        .catch(err => err);
  }

  handleClick() {
    console.log("This is sparta");
  };

  render() {
    var tabServicesArray = "";

    return <nav> {tabServicesArray} </nav> ;
  }
}

export default NavBar;