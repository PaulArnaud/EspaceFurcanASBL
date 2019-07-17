import React, { Component } from 'react';
import {Form,Button,Container,Col} from 'react-bootstrap';

class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {email:'',password:''};

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event,type) {
      const propertie = event.target.name;
      const value = event.target.value;
      this.setState({[propertie]:value});
    }
  
    handleSubmit(event) {
      var request = require('request');
      request.post(
        'http://localhost:9000/users/login',
        { json: {email:this.state.email,password: this.state.password } },
        function (error, response, body) {
          if (!error && response.statusCode === 200) {
              console.log(body);
          }
        }
      );
      event.preventDefault();
    }


    render() {
      return (
        <Container>
            <Col></Col>
            <Col>
                <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" value={this.state.email} onChange={this.handleChange}/>
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="text" placeholder="Enter password" value={this.state.password} onChange={this.handleChange}/>
                </Form.Group>
                <Button type="submit" value="Log In" >Log In</Button>
                </Form>
            </Col>
            <Col></Col>
        </Container>      
      );
    }
};

export default Login;