import React, { Component } from 'react';
import {Form,Button,Container,Col} from 'react-bootstrap';

class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
  
    render() {
      return (
        <Container>
            <Col></Col>
            <Col>
                <Form>
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit"> Submit </Button>
                </Form>
            </Col>
            <Col></Col>
        </Container>      
      );
    }
};

export default Login;