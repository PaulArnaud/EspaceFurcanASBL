import React, { Component } from 'react';
import { Navbar,Nav } from 'react-bootstrap';

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
      tabServicesArray.push(<Nav.Link href='/'>{services[i].name}</Nav.Link>);
    }

    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Espace Furcan</Navbar.Brand>
        <Nav>
          {tabServicesArray}
          <Nav.Link href='/'>Paul</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default NavBar;