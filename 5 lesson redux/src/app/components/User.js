import React, { Component } from 'react';


export default class User extends Components {
    render() {
        const {username, name, email, phone, website} = this.props;

        return(
            <div className = 'card border-secondary mb-3'>
                <div className="card-header">
                    <h1>{username}</h1>
                </div>
                <div className="card-body text-secondary">
                    <p>{name}</p>
                    <p>{email}</p>
                    <p>{phone}</p>
                    <p>{webdite}</p>
                </div>
            </div>
        )
    }
}