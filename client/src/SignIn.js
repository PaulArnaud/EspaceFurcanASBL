import React, { Component } from 'react';
import {Form,Container,Col,Button} from 'react-bootstrap';

/*
TODO
Vérifier le mot de passe (assez sécurisé ? tapé deux fois pareil ?)
Vérifier l'email (déjà existant ?)

*/

class SignIn extends Component {
    constructor(props) {
      super(props);
      this.state = {name:'',email:'',phone:'',password:'',passwordConfirm:''};
  
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
      var id = "2";
      request.post(
        'http://localhost:9000/users',
        { json: {user_id:id,name:this.state.name,email:this.state.email,phone:this.state.phone,password: this.state.password,password2:this.state.passwordConfirm } },
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
                <Form.Group controlId="formGroupName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control name="name" type="text" placeholder="Enter name" value={this.state.name} onChange={this.handleChange}/>
                </Form.Group>
                <Form.Group controlId="formGroupEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control name="email" type="email" placeholder="Enter email" value={this.state.email} onChange={this.handleChange}/>
                </Form.Group>
                <Form.Group controlId="formGroupPhone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control name="phone" type="text" placeholder="Enter phone" value={this.state.phone} onChange={this.handleChange}/>
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control name="password" type="text" placeholder="Enter password" value={this.state.password} onChange={this.handleChange}/>
                </Form.Group>
                <Form.Group controlId="formGroupPasswordConfirm">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control name="passwordConfirm" type="text" placeholder="Enter password again" value={this.state.passwordConfirm} onChange={this.handleChange}/>
                </Form.Group>
                <Button type="submit" value="Sign In" >Sign In</Button>
              </Form></Col>
            <Col></Col>
          </Container>
          
      );
    }
};

export default SignIn;