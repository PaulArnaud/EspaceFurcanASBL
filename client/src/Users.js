import React, { Component } from 'react';
import './Navbar.css';
import { Table } from 'react-bootstrap';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {users: ''};
    }

    getServices(){
      fetch("http://localhost:9000/users")        
          .then(res => res.text())        
          .then(res => this.setState({ users: JSON.parse(res) }))
          .catch(err => err);
    }
  
    componentDidMount() {
      this.getServices();
    }
  
    render() {
      var listOfUsers = [];
      var users = this.state.users;
      for (var i = 0 ; i < users.length ; i++){
        console.log(users[i]);
        listOfUsers.push(<tr id={users[i]._id}><th>{users[i].userId}</th><th>{users[i].name}</th><th>{users[i].description}</th></tr>);
      }
      return (
        <Table striped bordered hover >
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {listOfUsers}
          </tbody>
        </Table>
      );
    }
};

export default Users;