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
    for (var i = 0 ; i < services.length ; i++ ){
      tabServicesArray.push(<ul id={services[i]._id }> <a href='/' > {services[i].name} </a></ul>)
    }

    return (
      <nav>
        {tabServicesArray}
      </nav>

    );
  }
}

export default NavBar;