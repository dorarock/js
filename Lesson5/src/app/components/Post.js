import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Post extends Component {
  render() {
    const { userId, title, body } = this.props;

    return (
      <div className="card border-secondary mb-3">
        <div className="card-header">
          <Link to={`/posts/${this.props.id}`}>
            {title}
          </Link>
        </div>
        <div className="card-body text-secondary">
          <p>{userId}</p>
          <p>{body}</p>
        </div>
      </div>
    )
  }
}