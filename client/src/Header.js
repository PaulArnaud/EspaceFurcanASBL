import React, { Component } from 'react';
import logo from "./logo.svg";

class Header extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    };
  
    componentDidMount() {
    };
  
    render() {
      return  <header className="App-header"> <img src={logo} className="App-logo" alt="logo" /> <h1 className="App-title">Bienvenue à l'Espace Furcan</h1> </header>};
  }
  
  export default Header;