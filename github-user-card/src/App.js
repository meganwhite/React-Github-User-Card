import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';
import FollowerList from './components/FollowerList';

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      followers: [],
    };
  }

  componentDidMount() {
    this.getUsers();
    this.getFollowers();
  }

  getUsers = () => {
    axios
      .get('https://api.github.com/users/meganwhite')
      .then(response => this.setState({ users: response.data }))
      .catch(err => {
        console.log(err);
      });
  };

  getFollowers = () => {
    axios
      .get('https://api.github.com/users/meganwhite/followers')
      .then(response => this.setState({ followers: response.data }))
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <h1>Github Users</h1>
        <h2>{this.state.users.name}</h2>
        <FollowerList 
          followers = {this.state.followers}
        />
      </div>
    );
  }
}

export default App;