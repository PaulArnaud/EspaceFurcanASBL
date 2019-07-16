import React, { Component } from 'react';
import { Navbar,Nav } from 'react-bootstrap';
import { Link,BrowserRouter as Router,Route } from 'react-router-dom';
import SignIn from './SignIn';
import Login from './Login';

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
            <Link size="sm" variant="secondary" to="/signin">Sign in</Link>
            <Link size="sm" variant="secondary" to="/login">Log in</Link>
          </Nav>
        </Navbar>
      </div>
      <Route path="/signin" component={SignIn} />
      <Route path="/login" component={Login} />

      </Router>
    );
  }
}

export default NavBar;