import React, { Component } from 'react';
import axios from 'axios';

export default class Register extends Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: ''
        }

        this.registerUser = this.registerUser.bind(this);
    }

    registerUser() {
        let user = {
            username: this.refs.username.value,
            password: this.refs.password.value
        }

        axios.post('/api/users', user).then(res => res.data);
        this.refs.username.value = '';
        this.refs.password.value = '';
    }


    render() {
        return(
            <div className="App">
            <input type='' className='' ref='username' placeholder='Username'/>
            <input type='' className='' ref='password' placeholder='Password'/>
            <button type='' className=''>Login</button>
            <button type='' className='' onClick={ this.registerUser } >Register</button>
            </div>
        )
    }
}




