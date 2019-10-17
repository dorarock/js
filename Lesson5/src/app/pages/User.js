import React, { Component } from 'react';
import axios from 'axios';

import UserCard from '../components/User';

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  render() {
    return (
      <div>
        {this.state.user && <UserCard {...this.state.user} />}
      </div>
    )
  }

  componentDidMount() {
    axios.get(`http://jsonplaceholder.typicode.com/users/${this.props.params.userId}`)
      .then(response => {
        const data = response.data;
        this.setState({ user: data })
      })
  }
}
