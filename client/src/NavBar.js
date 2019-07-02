import React, { Component } from 'react';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
        services: ""
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
  render() {
    var tabServicesArray = [];
    var services = this.state.services;
    console.log(this.state.services[0]);
    for (var i = 0 ; i < services.length ; i++){
      tabServicesArray.push(<ul> {services[i]["name"]} </ul>);
    }
    return <nav class="menu"> {tabServicesArray} </nav>;
  }
}

export default NavBar;