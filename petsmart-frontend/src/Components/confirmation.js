// src/Home.js

import React, { Component } from 'react';
import { withAuth } from '@okta/okta-react';
import '../LoginForm.css';
import puppy from '../puppy.png' 
import animals from '../animals.jpg'
import ExpenseDataStore from '../Data/ExpenseDataStore'

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

  componentDidMount() {
    // Send out json POST
    let json = JSON.stringify(ExpenseDataStore.data);
    console.log(json);
  }
  
  componentDidUpdate() {
    this.checkAuthentication();
  }

  async login() {
    // Redirect to '/' after login
    this.props.auth.login('/section1');
  }

  async logout() {
    // Redirect to '/' after logout
    this.props.auth.logout('/');
  }

  render() {

    return(
    <div class="container">
        <label id= "title">
        <b>Your expenditure has been successfully submitted!</b>
        </label>
        <p>You will be informed on the status of your submission by your manager.</p>
        <img id= "animals" src={animals}></img>
        
        <button onClick={this.login}><b>Submit Another?</b></button>
    </div>
    
    )
  }

});
