import React, { Component } from 'react';
import { Navbar,Nav,Button } from 'react-bootstrap';

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
      tabServicesArray.push(<Button size="sm">{services[i].name}</Button>);
    }

    return (
      <Navbar bg="dark" variant="dark">
        <Nav>
          {tabServicesArray}
          <Button size="sm" variant="secondary">Sign in</Button>
          <Button size="sm" variant="secondary">Log in</Button>
        </Nav>
      </Navbar>
    );
  }
}

export default NavBar;