import React, { Component } from "react";
import "./App.css";
import NavBar from "./NavBar";
import Header from "./Header";
import Footer from "./Footer";
import Form from "./SignIn";
import Users from "./Users";

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
            <div className="App">
                <Header/>
                <NavBar/>
                <p className="App-intro">{this.state.dbResponse}</p>
                <div id="content"></div>
                <Form/>
                <Users/>
                <Toggle/>
                <Footer/>
            </div>
        );
    };
}

class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
  
      // Cette liaison est nécéssaire afin de permettre
      // l'utilisation de `this` dans la fonction de rappel.
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(state => ({
        isToggleOn: !state.isToggleOn
      }));
    }
  
    render() {
      return (
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      );
    }
  }
  
export default App;