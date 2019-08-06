import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    axios
      .get('https://api.github.com/users/meganwhite')
      .then(response => this.setState({ users: response.data }))
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <h1>Github Users</h1>
        <p>{this.state.users.name}</p>
      </div>
    );
  }
}

export default App;