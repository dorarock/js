import React, { Component } from 'react'

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: this.props.items,
    }
    this.myRef = React.createRef();
    this.addUser = this.addUser.bind(this);
  }

  addUser() {
    const user = this.myRef.current.value;
    const users = [...this.state.users, user]
    this.setState({ users });
    this.myRef.current.value = '';
  }

  render() {
    const users = this.state.users.map((user, index) => {
      return <li key={index}>{user}</li>
    })

    return (
      <div>
        <ul>
          {users}
        </ul>
        <hr />
        <label>
          Введите имя пользователя: <input ref={this.myRef} type="text" placeholder="Имя" />
        </label>
        <button onClick={this.addUser}>Добавить пользователя</button>
      </div>
    )
  }
}

/* this.props.items = ['Anna', 'Victor', 'Olga', 'Anton']

*/
