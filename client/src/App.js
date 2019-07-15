import React, { Component } from "react";
import "./App.css";
import NavBar from "./NavBar";
import Header from "./Header";
import SignIn from "./SignIn";
import Users from "./Users";
import {} from 'react-bootstrap';
import BasicExample from "./Example";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        return (
            <div>
            <Header/>
            <NavBar/>
            <SignIn/>
            <Users/>
            <BasicExample/>
            </div>
        );
    };
}
  
export default App;