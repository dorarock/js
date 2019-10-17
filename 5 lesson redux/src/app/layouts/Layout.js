import React from 'react';
import { connect } from 'react-redux';
// import Menu from '../components/Menu';
// import MenuItem from '../components/MenuItem';
import {fetchUsers} from '../actions/userActions';



class Layout extends React.Component {

  render() {
    const {userData} = this.props;
    console.log(userData);

    const mappedUsers = userData.map(user => 
      <div key={user.id}>
      <p>{user.name}</p>
      <p>{user.phone}</p>
      <p>{user.email}</p>
      <p>{user.website}</p>
      </div>) 
   

    return (
      <div>
        <h1>Пользователи</h1>
        {mappedUsers}
        <footer className="card-footer">
          &copy; 2019
        </footer>
      </div>
    )
  }

  componentDidMount() {
    this.props.dispatch(fetchUsers())
  }
}

function mapStateProps(state) {
    return {
    userData: state.user.userData
  }
}

export default connect(mapStateProps)(Layout);