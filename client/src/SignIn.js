import React, { Component } from 'react';

var request = require('request');

class Form extends Component {
    constructor(props) {
      super(props);
      this.state = {id: '',name:'',description:''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event,type) {
      const propertie = event.target.name;
      const value = event.target.value;
      this.setState({[propertie]:value});
    }
  
    handleSubmit(event) {
      request.post(
        'http://localhost:9000/users',
        { json: { userId:this.state.id,name:this.state.name,description:this.state.description } },
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
        <form onSubmit={this.handleSubmit}>
          <label>
            ID :
            <input name="id" type="text" value={this.state.id} onChange={this.handleChange} />
          </label>
          <label>
            Name :
            <input name="name" type="text" value={this.state.name} onChange={this.handleChange} />
          </label>
          <label>
            Description :
            <input name="description" type="text" value={this.state.description} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Envoyer" />
        </form>
      );
    }
};
export default Form;