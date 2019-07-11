import React, { Component } from 'react';
import { Navbar,Nav,Button } from 'react-bootstrap';
import { Link,BrowserRouter as Router,Route } from 'react-router-dom';
import ServiceDescription from './ServiceDesription';

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
      var service_Id = services[i].serviceId
      var servicePath = "/services/" + service_Id
      
      tabServicesArray.push(<Link key={service_Id} to={servicePath}>{services[i].name}</Link>);
    }

    return (
      <Router>
        <div> 
        <Navbar bg="dark" variant="dark">
          <Nav>
            {tabServicesArray}
            <Button size="sm" variant="secondary">Sign in</Button>
            <Button size="sm" variant="secondary">Log in</Button>
          </Nav>
        </Navbar>
        <Route path={'/services/:serviceId'} component={ServiceDescription}/>}/>
      </div>
      </Router>
    );
  }
}

export default NavBar;