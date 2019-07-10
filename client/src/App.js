import React, { Component } from "react";
import "./App.css";
import NavBar from "./NavBar";
import Header from "./Header";
import Footer from "./Footer";
import SignIn from "./SignIn";
import Users from "./Users";
import { Container } from 'react-bootstrap';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            dbResponse: ""
        };
    };

    callDB() {    
        fetch("http://localhost:9000/testDB")        
            .then(res => res.text())        
            .then(res => this.setState({ dbResponse: res }))
            .catch(err => err);
    };

    componentDidMount() {
        this.callDB();
    };

    render() {
        return (
            <Container>
                <Header/>
                <NavBar/>
                <SignIn/>
                <Users/>
                <Footer/>
            </Container>
        );
    };
}
  
export default App;