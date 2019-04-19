// src/App.js

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
import Home from './Home';
import Login from './Login';
import Protected from './Protected';
import Section1 from './Components/Section1'
import Section2 from './Components/Section2'
import Section3 from './Components/Section3'
import confirmation from './Components/confirmation'


function onAuthRequired({history}) {
  history.push('/login');
}

class App extends Component {
  render() {
    return (
      <Router>
        <Security issuer='https://dev-748079.oktapreview.com/oauth2/default'
                  client_id='0oajsr5opp7iyUQ2S0h7'
                  redirect_uri={window.location.origin + '/implicit/callback'}
                  onAuthRequired={onAuthRequired} >
        
          <Route path='/' exact={true} component={Home} />
          <Route path='/confirmation' component={confirmation}/> 
          <SecureRoute path='/protected' component={Protected} />
          <Route path='/login' render={() => <Login baseUrl='https://dev-748079.oktapreview.com' />} />
            
          <Route path='/implicit/callback' component={Section1} />
          <Route path="/section1" component={Section1}/>
          <Route path="/section2" component={Section2}/>
          <Route path="/section3" component={Section3}/>

        </Security>
      </Router>
    );
  }
}

export default App;
