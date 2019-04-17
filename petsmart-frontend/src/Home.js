// src/Home.js

import React, { Component } from 'react';
import { withAuth } from '@okta/okta-react';
import './LoginForm.css';
import puppy from './puppy.png' 
export default withAuth(class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { authenticated: null };
    this.checkAuthentication = this.checkAuthentication.bind(this);
    this.checkAuthentication();
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  async checkAuthentication() {
    const authenticated = await this.props.auth.isAuthenticated();
    if (authenticated !== this.state.authenticated) {
      this.setState({ authenticated });
    }
  }

  componentDidUpdate() {
    this.checkAuthentication();
  }

  async login() {
    // Redirect to '/' after login
    this.props.auth.login('/');
  }

  async logout() {
    // Redirect to '/' after logout
    this.props.auth.logout('/');
  }

  render() {

    return(
    <div class="container">
        <label id= "title">
        <b>Expense Reimbursement Portal</b>
        </label>
        <img id= "puppy" src={puppy}></img>
        <button onClick={this.login}>Login</button>
    </div>
    
    )
  }

});
